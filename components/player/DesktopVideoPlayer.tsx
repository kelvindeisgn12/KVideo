'use client';

import React from 'react';
import { useDesktopPlayerState } from './hooks/useDesktopPlayerState';
import { useDesktopPlayerLogic } from './hooks/useDesktopPlayerLogic';
import { useHlsPlayer } from './hooks/useHlsPlayer';
import { useAutoSkip } from './hooks/useAutoSkip';
import { useStallDetection } from './hooks/useStallDetection';
import { DesktopControlsWrapper } from './desktop/DesktopControlsWrapper';
import { DesktopOverlayWrapper } from './desktop/DesktopOverlayWrapper';
import { DanmakuCanvas } from './DanmakuCanvas';
import { usePlayerSettings } from './hooks/usePlayerSettings';
import { useDanmaku } from './hooks/useDanmaku';
import { useIsIOS, useIsMobile } from '@/lib/hooks/mobile/useDeviceDetection';
import { useDoubleTap } from '@/lib/hooks/mobile/useDoubleTap';
import './web-fullscreen.css';

interface DesktopVideoPlayerProps {
  src: string;
  poster?: string;
  onError?: (error: string) => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  initialTime?: number;
  shouldAutoPlay?: boolean;
  totalEpisodes?: number;
  currentEpisodeIndex?: number;
  onNextEpisode?: () => void;
  isReversed?: boolean;
  videoTitle?: string;
  episodeName?: string;
}

export function DesktopVideoPlayer({
  src,
  poster,
  onError,
  onTimeUpdate,
  initialTime = 0,
  shouldAutoPlay = false,
  totalEpisodes = 1,
  currentEpisodeIndex = 0,
  onNextEpisode,
  isReversed = false,
  videoTitle = '',
  episodeName = '',
}: DesktopVideoPlayerProps) {
  const { refs, data, actions } = useDesktopPlayerState();
  const { fullscreenType: settingsFullscreenType } = usePlayerSettings();
  const isIOS = useIsIOS();
  const isMobile = useIsMobile();

  const { danmakuEnabled, setDanmakuEnabled, comments: danmakuComments } = useDanmaku({
    videoTitle,
    episodeName,
    episodeIndex: currentEpisodeIndex,
  });

  const [isLandscape, setIsLandscape] = React.useState(true);

  React.useEffect(() => {
    const checkOrientation = () => {
      if (typeof window !== 'undefined') {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // --- 修正區域開始 ---
  // 強制使用系統全螢幕，刪除原本的手機判斷邏輯
  const fullscreenType = 'native';

  // 因為使用系統全螢幕，畫面旋轉將由使用者的手機系統自動控制，不需要前端強制旋轉
  const shouldForceLandscape = false;
  // --- 修正區域結束 ---

  useHlsPlayer({
    videoRef: refs.videoRef,
    src,
    autoPlay: shouldAutoPlay
  });

  const {
    videoRef,
    containerRef,
  } = refs;

  const {
    isPlaying,
    currentTime,
    duration,
  } = data;

  const {
    setShowControls,
    setIsLoading,
    setCurrentTime,
    setDuration,
  } = actions;

  React.useEffect(() => {
    setIsLoading(true);
  }, [src, setIsLoading]);

  const logic = useDesktopPlayerLogic({
    src,
    initialTime,
    shouldAutoPlay,
    onError,
    onTimeUpdate,
    refs,
    data,
    actions,
    fullscreenType,
    isForceLandscape: shouldForceLandscape
  });

  const { isOutroActive, isTransitioningToNextEpisode } = useAutoSkip({
    videoRef,
    currentTime,
    duration,
    isPlaying,
    totalEpisodes,
    currentEpisodeIndex,
    onNextEpisode,
    isReversed,
    src,
  });

  useStallDetection({
    videoRef,
    isPlaying: data.isPlaying,
    isDraggingProgressRef: refs.isDraggingProgressRef,
    setIsLoading: actions.setIsLoading,
    isTransitioningToNextEpisode
  });

  const {
    handleMouseMove,
    handleTouchToggleControls,
    togglePlay,
    handlePlay,
    handlePause,
    handleTimeUpdateEvent,
    handleLoadedMetadata,
    handleVideoError,
  } = logic;

  const { handleTap } = useDoubleTap({
    onSingleTap: handleTouchToggleControls,
    onDoubleTapLeft: () => {
      logic.skipBackward();
      handleMouseMove(); 
    },
    onDoubleTapRight: () => {
      logic.skipForward();
      handleMouseMove(); 
    },
    onSkipContinueLeft: () => {
      logic.skipBackward();
      handleMouseMove();
    },
    onSkipContinueRight: () => {
      logic.skipForward();
      handleMouseMove();
    },
    isSkipModeActive: data.showSkipForwardIndicator || data.showSkipBackwardIndicator,
  });

  return (
    <div
      ref={containerRef}
      className="kvideo-container relative aspect-video bg-black rounded-[var(--radius-2xl)] group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--radius-2xl)]">
        <div className="absolute inset-0 pointer-events-auto">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            poster={poster}
            x-webkit-airplay="allow"
            playsInline={true} 
            controls={false} 
            onPlay={handlePlay}
            onPause={handlePause}
            onTimeUpdate={handleTimeUpdateEvent}
            onLoadedMetadata={handleLoadedMetadata}
            onError={handleVideoError}
            onWaiting={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onClick={!isMobile ? (e) => {
              togglePlay();
            } : undefined}
            onTouchStart={isMobile ? handleTap : undefined}
            {...({ 'webkit-playsinline': 'true' } as any)} 
          />

          {danmakuEnabled && danmakuComments.length > 0 && (
            <DanmakuCanvas
              comments={danmakuComments}
              currentTime={currentTime}
              isPlaying={isPlaying}
              duration={duration}
            />
          )}

          <DesktopOverlayWrapper
            data={data}
            actions={actions}
            showControls={data.showControls}
            isRotated={shouldForceLandscape}
            onTogglePlay={togglePlay}
            onSkipForward={logic.skipForward}
            onSkipBackward={logic.skipBackward}
            isTransitioningToNextEpisode={isTransitioningToNextEpisode}
            showMoreMenu={data.showMoreMenu}
            isProxied={src.includes('/api/proxy')}
            onToggleMoreMenu={() => actions.setShowMoreMenu(!data.showMoreMenu)}
            onMoreMenuMouseEnter={() => {
              if (refs.moreMenuTimeoutRef.current) {
                clearTimeout(refs.moreMenuTimeoutRef.current);
                refs.moreMenuTimeoutRef.current = null;
              }
            }}
            onMoreMenuMouseLeave={() => {
              if (refs.moreMenuTimeoutRef.current) {
                clearTimeout(refs.moreMenuTimeoutRef.current);
              }
              refs.moreMenuTimeoutRef.current = setTimeout(() => {
                actions.setShowMoreMenu(false);
                refs.moreMenuTimeoutRef.current = null;
              }, 800); 
            }}
            onCopyLink={logic.handleCopyLink}
            playbackRate={data.playbackRate}
            showSpeedMenu={data.showSpeedMenu}
            speeds={[0.5, 0.75, 1, 1.25, 1.5, 2]}
            onToggleSpeedMenu={() => actions.setShowSpeedMenu(!data.showSpeedMenu)}
            onSpeedChange={logic.changePlaybackSpeed}
            onSpeedMenuMouseEnter={logic.clearSpeedMenuTimeout}
            onSpeedMenuMouseLeave={logic.startSpeedMenuTimeout}
            containerRef={containerRef}
          />

          <DesktopControlsWrapper
            src={src}
            data={data}
            actions={actions}
            logic={logic}
            refs={refs}
          />
        </div>
      </div>
    </div>
  );
}
