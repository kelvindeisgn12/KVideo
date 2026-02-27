import type {
    VideoSource,
    VideoItem,
    ApiSearchResponse,
} from '@/lib/types';
import { fetchWithTimeout, withRetry } from './http-utils';

// --- 繁簡轉換字典與工具函數 ---
// 這裡收錄了超過上千個常用的繁體轉簡體字，專為影視搜尋優化
function t2s(text: string): string {
    const t = "萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂鄶脗饈儼儻黌釓釔釕釗釘釙釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鐘鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋮鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏌鍩鍁鍤鍠鋥鋷鋶鐦鐧鍃鍇鐔鐒鐠鐦鐓鐪鐵鏷鏹鐃鏵門閂閃閆閈閉問闖閏闈閑閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闃闄闆闇闏闐闒闓闔闕闖闞闠闡闢闥韋韌韍韓韙韞韜韭齏音韻韶響頁頂頃項順須頊頌頎頏預頑頒頓頗領頜頡頤頦頫頭頰頷頸頹頻顆題額顎顏顒顛顢顥顬顳颺颻飐颿飑飢飣飥餳飩餼飪飫飭飯飲飴飼飽飾餎餏餃餄餅餉養餌餑餒餓餧餫餛餿饋餽饁餼饃餾饈饉饅饊饌饍饎馬馭馱馳馴駎馹駁駃駏駐駑駒駓駔駕駘駙駛駝駟駢駩駪駭駰駱駸駻駼駿騁騂騃騄騅騊騋騌騍騎騏騑騖騙騜騝騤騧騫騭騮騰騶騸騹騾驀驁驂驃驄驅驆驈驌驟驎驢驤驥驦驧驩驪鳥鳩鳳鳴鳶鴆鴇鴉鴒鴕鴛鴝鴞鴟鴣鴦鴨鴯鴰鴲鴳鴴鴻鴿鵂鵃鵐鵑鵒鵓鵜鵝鵠鵡鵪鵬鵯鵰鵲鵷鵾鶇鶉鶊鶘鶖鶚鶡鶥鶩鶬鶯鶲鶴鶹鶺鶻鶼鶿鷁鷂鷙鷚鷥鷦鷫鷯鷲鷳鷸鷹鷺鷽鸇鸊鸌鸏鸕鸚鸛鸝鸞鹵鹹鹽鹺麥麩麫麯麱麵麷黃黌點黨黲黴黶黷黽黿鼂鼇鼈鼉鼕鼴鼢鼠齏齒齔齕齖齗齘齙齚齛齜齝齞齟齠齡齣齤齥齦齧齨齩齪齫齬齭齮齯齰齱齲齳齴齵齶齷齸齹齺齻齼齽齾龍龐龔龕龜龠";
    const s = "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会偻伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬郐吻馐俨傥黉钆钇钌钊钉钋钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铖铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦镆锘锨锸锪锃锷锍锎锏锃锴镡铹镨锎镦镤镪镲铙铧门闩闪闫闭问闯闰闱闲闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阒阕板暗阗阘闼阖阙闯阚阛阐辟闼韦韧韨韩韪韫韬韭齑音韵韶响页顶顷项顺须顼颂颀颃预顽颁顿颇领颌颉颐颏俯头颊颔颈颓频颗题额颚颜颙颠颟颢颥颞飏飐飑饥饤托饧饨饩饪饫饬饭饮饴饲饱饰饸饹饺饸饼饷养饵饽馁饿喂馄馊馈馈馌饩馍馏馐馑馒馓馔膳馎马驭驮驰驯日驳駃驹驻驽驹駓驵驾骀驸驶驼驷骈驩骈骇骃骆骎悍途骏骋骍呆骄骓骉骋验骒骑骐騑骛骗骘骙骙䯄骞骘骝腾骣骟骐骡蓦骜骖骠骢驱驿驈骕骤麟驴骧骥霜驧欢骊鸟鸠凤鸣鸢鸩鸨鸦鸰鸵鸳鸲鸮鸱鸪鸯鸭鸸鸹鴳鴳鸻鸿鸽鸺鸼鹀鹃鹆鹁鹈鹅鹄鹉鹌鹏鹎雕鹊鹓鹍鸫鹑鹒鹈鹙鹗鹖鹛鹜鹒莺鹟鹤鹠鹡鹘鹣鹚鹢鹞鸷鹨鹭鹪鹔鹩鹫鹇鹬鹰鹭鸴鹯䴙鹱鹲鸬鹦鹳鹂鸾卤咸盐鹺麦麸面曲面面黄黉点党黪霉黡黩黾鼋鼂鳌鳖鼍冬鼹鼢鼠齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龍龎龏龐龑龈啮龒龓龔龕龖龗龘龙庞龚龛龟龠";
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        const index = t.indexOf(char);
        result += index !== -1 ? s.charAt(index) : char;
    }
    return result;
}
// ------------------------------

/**
 * Search videos from a single source
 */
async function searchVideosBySource(
    query: string,
    source: VideoSource,
    page: number = 1
): Promise<{ results: VideoItem[]; source: string; responseTime: number; pagecount: number }> {
    const startTime = Date.now();

    // 🟢 將傳入的關鍵字轉換為簡體，確保能搜到大陸片源的資料
    const simplifiedQuery = query ? t2s(query) : query;

    const url = new URL(`${source.baseUrl}${source.searchPath}`);
    url.searchParams.set('ac', 'detail');
    // 使用轉換後的簡體關鍵字發送請求
    url.searchParams.set('wd', simplifiedQuery);
    url.searchParams.set('pg', page.toString());

    try {
        const response = await withRetry(async () => {
            const res = await fetchWithTimeout(url.toString(), {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0',
                    ...source.headers,
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }

            return res;
        });

        const data: ApiSearchResponse = await response.json();

        if (data.code !== 1 && data.code !== 0) {
            throw new Error(data.msg || 'Invalid API response');
        }

        const results: VideoItem[] = (data.list || []).map(item => ({
            ...item,
            source: source.id,
        }));

        return {
            results,
            source: source.id,
            responseTime: Date.now() - startTime,
            pagecount: data.pagecount ?? 1,
        };
    } catch (error) {
        console.error(`Search failed for source ${source.name}:`, error);
        throw {
            code: 'SEARCH_FAILED',
            message: `Failed to search from ${source.name}`,
            source: source.id,
            retryable: true,
        };
    }
}


/**
 * Search videos from multiple sources in parallel
 */
export async function searchVideos(
    query: string,
    sources: VideoSource[],
    page: number = 1
): Promise<Array<{ results: VideoItem[]; source: string; responseTime?: number; pagecount?: number; error?: string }>> {
    const searchPromises = sources.map(async source => {
        try {
            return await searchVideosBySource(query, source, page);
        } catch (error) {
            return {
                results: [],
                source: source.id,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    });

    return Promise.all(searchPromises);
}
