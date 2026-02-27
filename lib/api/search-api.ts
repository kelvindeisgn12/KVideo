import type {
    VideoSource,
    VideoItem,
    ApiSearchResponse,
} from '@/lib/types';
import { fetchWithTimeout, withRetry } from './http-utils';

// --- 繁簡轉換工具 (字串對位法，保證無編譯錯誤) ---
function convertToSimplified(text: string): string {
    if (!text) return text;

    // 繁體字庫 (包含基礎漢字 + 影視高頻字)
    const t = "萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂鄶脗饈儼儻黌釓釔釕釗釘釙釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鐘鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋮鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏌鍩鍁鍤鍠鋥鋷鋶鐦鐧鍃鍇鐔鐒鐠鐦鐓鐪鐵鏷鏹鐃鏵門閂閃閆閈閉問闖閏闈閑閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闃闄闆闇闏闐闒闓闔闕闖闞闠闡闢闥韋韌韍韓韙韞韜韭齏音韻韶響頁頂頃項順須頊頌頎頏預頑頒頓頗領頜頡頤頦頫頭頰頷頸頹頻顆題額顎顏顒顛顢顥顬顳颺颻飐颿飑飢飣飥餳飩餼飪飫飭飯飲飴飼飽飾餎餏餃餄餅餉養餌餑餒餓餧餫餛餿饋餽饁餼饃餾饈饉饅饊饌饍饎馬馭馱馳馴駎馹駁駃駏駐駑駒駓駔駕駘駙駛駝駟駢駩駪駭駰駱駸駻駼駿騁騂騃騄騅騊騋騌騍騎騏騑騖騙騜騝騤騧騫騭騮騰騶騸騹騾驀驁驂驃驄驅驆驈驌驟驎驢驤驥驦驧驩驪鳥鳩鳳鳴鳶鴆鴇鴉鴒鴕鴛鴝鴞鴟鴣鴦鴨鴯鴰鴲鴳鴴鴻鴿鵂鵃鵐鵑鵒鵓鵜鵝鵠鵡鵪鵬鵯鵰鵲鵷鵾鶇鶉鶊鶘鶖鶚鶡鶥鶩鶬鶯鶲鶴鶹鶺鶻鶼鶿鷁鷂鷙鷚鷥鷦鷫鷯鷲鷳鷸鷹鷺鷽鸇鸊鸌鸏鸕鸚鸛鸝鸞鹵鹹鹽鹺麥麩麫麯麱麵麷黃黌點黨黲黴黶黷黽黿鼂鼇鼈鼉鼕鼴鼢鼠齏齒齔齕齖齗齘齙齚齛齜齝齞齟齠齡齣齤齥齦齧齨齩齪齫齬齭齮齯齰齱齲齳齴齵齶齷齸齹齺齻齼齽齾龍龐龔龕龜龠復仇者聯盟變形金剛電視機劇動畫網終結戰爭羅亞惡靈魂劍傳說紀元異世界魔法神仙情緣愛覺醒歡迎實際測試號類藝術總體驗證醫藥廠廣場創造勢態導演員響應寶貝買賣蟲寵物奮鬥犧牲獨立獲獎絕對補充規則罰款審判縣鄉村衛生豐富貧窮遺產遲鈍鎮壓閃躲驚嚇顧問題顛覆驅逐騎士髓髒髮鬍鬚鬧鬱魅鮑鴕鳥鳶鳴鷗鷹鹿麥麵麻黃黍黑點黨鼓鼠鼻齊齒齡龐龜絡線纜離開關閉鎖鑰匙鐘錶釘鉛銅銀礦釋放錄音預領頻道顯示頁面頂部順序驟然驢駱駝騙騰騷過這還進達運遊遠遇選遜遞遼邁邊邏飛食飢飯飲飽飾餃餅餓餘館馬駐駕駛魚魯鮮鯉鯊鯨鱷鳳鴨鵝鶴鸚黽鼇";
    // 簡體字庫 (與上面完全對齊)
    const s = "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会偻伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬郐吻馐俨傥黉钆钇钌钊钉钋钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铖铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦镆锘锨锸锪锃锷锍锎锏锃锴镡铹镨锎镦镤镪镲铙铧门闩闪闫闭问闯闰闱闲闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阒阕板暗阗阘闼阖阙闯阚阛阐辟闼韦韧韨韩韪韫韬韭齑音韵韶响页顶顷项顺须顼颂颀颃预顽颁顿颇领颌颉颐颏俯头颊颔颈颓频颗题额颚颜颙颠颟颢颥颞飏飐飑饥饤托饧饨饩饪饫饬饭饮饴饲饱饰饸饹饺饸饼饷养饵饽馁饿喂馄馊馈馈馌饩馍馏馐馑馒馓馔膳馎马驭驮驰驯日驳駃驹驻驽驹駓驵驾骀驸驶驼驷骈驩骈骇骃骆骎悍途骏骋骍呆骄骓骉骋验骒骑骐騑骛骗骘骙骙䯄骞骘骝腾骣骟骐骡蓦骜骖骠骢驱驿驈骕骤麟驴骧骥霜驧欢骊鸟鸠凤鸣鸢鸩鸨鸦鸰鸵鸳鸲鸮鸱鸪鸯鸭鸸鸹鴳鴳鸻鸿鸽鸺鸼鹀鹃鹆鹁鹈鹅鹄鹉鹌鹏鹎雕鹊鹓鹍鸫鹑鹒鹈鹙鹗鹖鹛鹜鹒莺鹟鹤鹠鹡鹘鹣鹚鹢鹞鸷鹨鹭鹪鹔鹩鹫鹇鹬鹰鹭鸴鹯䴙鹱鹲鸬鹦鹳鹂鸾卤咸盐鹺麦麸面曲面面黄黉点党黪霉黡黩黾鼋鼂鳌鳖鼍冬鼹鼢鼠齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龍龎龏龐龑龈啮龒龓龔龕龖龗龘龙庞龚龛龟龠复仇者联盟变形金刚电视机剧动画网终结战争罗亚恶灵魂剑传说纪元异世界魔法神仙情缘爱觉醒欢迎实际测试号类艺术总体验证医药厂广场创造势态导演员响应宝贝买卖虫宠物奋斗牺牲独立获奖绝对补充规则罚款审判县乡村卫生丰富贫穷遗产迟钝镇压闪躲惊吓顾问题颠覆驱逐骑士髓脏发胡须闹郁魅鲍鸵鸟鸢鸣鸥鹰鹿麦面麻黄黍黑点党鼓鼠鼻齐齿龄庞龟络线缆离开关闭锁钥匙钟表钉铅铜银矿释放录音预领频道显示页面顶部顺序骤然驴骆驼骗腾骚过这还进达运游远遇选逊递辽迈边逻飞食饥饭饮饱饰饺饼饿余馆马驻驾驶鱼鲁鲜鲤鲨鲸鳄凤鸭鹅鹤鹦黾鳌";

    let decodedText = text;
    try {
        // 防止瀏覽器傳來亂碼 (%E5%BE 等)，先解碼
        decodedText = decodeURIComponent(text);
    } catch (e) {
        // 若解碼失敗則保持原樣
    }

    let result = '';
    for (let i = 0; i < decodedText.length; i++) {
        const char = decodedText.charAt(i);
        const index = t.indexOf(char);
        // 如果在繁體字庫中找到該字，則替換為對應的簡體字
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

    // 🟢 使用轉換機，將繁體關鍵字轉換為簡體
    const simplifiedQuery = convertToSimplified(query);

    const url = new URL(`${source.baseUrl}${source.searchPath}`);
    url.searchParams.set('ac', 'detail');
    // 🟢 把轉換好的簡體字丟給片源 API
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
                // 🟢 強制不使用 Next.js 快取，確保每次搜尋都能拿到最新結果
                cache: 'no-store',
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
