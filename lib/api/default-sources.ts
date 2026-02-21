import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
export const DEFAULT_SOURCES: VideoSource[] = [
    {
        "id": "feifan",
        "name": "非凡资源",
        "baseUrl": "http://ffzy5.tv/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 1
    },
    {
        "id": "wolong",
        "name": "卧龙资源",
        "baseUrl": "https://wolongzyw.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 2
    },
    {
        "id": "zuida",
        "name": "最大资源",
        "baseUrl": "https://api.zuidapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 3
    },
    {
        "id": "baiduyun",
        "name": "百度云资源",
        "baseUrl": "https://api.apibdzy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 4
    },
    {
        "id": "baofeng",
        "name": "暴风资源",
        "baseUrl": "https://bfzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 5
    },
    {
        "id": "jisu",
        "name": "极速资源",
        "baseUrl": "https://jszyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 6
    },
    {
        "id": "tianya",
        "name": "天涯资源",
        "baseUrl": "https://tyyszy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 7
    },
    {
        "id": "wujin",
        "name": "无尽资源",
        "baseUrl": "https://api.wujinapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 8
    },
    {
        "id": "modu",
        "name": "魔都资源",
        "baseUrl": "https://www.mdzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 9
    },
    {
        "id": "sanliuling",
        "name": "360资源",
        "baseUrl": "https://360zy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 10
    },
    {
        "id": "dytt",
        "name": "电影天堂",
        "baseUrl": "http://caiji.dyttzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 11
    },
    {
        "id": "ruyi",
        "name": "如意资源",
        "baseUrl": "https://cj.rycjapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 12
    },
    {
        "id": "wangwang",
        "name": "旺旺资源",
        "baseUrl": "https://wwzy.tv/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 13
    },
    {
        "id": "hongniu",
        "name": "红牛资源",
        "baseUrl": "https://www.hongniuzy2.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 14
    },
    {
        "id": "guangsu",
        "name": "光速资源",
        "baseUrl": "https://api.guangsuapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 15
    },
    {
        "id": "ikun",
        "name": "iKun资源",
        "baseUrl": "https://ikunzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 16
    },
    {
        "id": "youku",
        "name": "优酷资源",
        "baseUrl": "https://api.ukuapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 17
    },
    {
        "id": "huya",
        "name": "虎牙资源",
        "baseUrl": "https://www.huyaapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 18
    },
    {
        "id": "xinlang",
        "name": "新浪资源",
        "baseUrl": "http://api.xinlangapi.com/xinlangapi.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 19
    },
    {
        "id": "lezi",
        "name": "乐子资源",
        "baseUrl": "https://cj.lziapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 20
    },
    {
        "id": "haihua",
        "name": "海豚资源",
        "baseUrl": "https://hhzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 21
    },
    {
        "id": "jiangyu",
        "name": "鲸鱼资源",
        "baseUrl": "https://jyzyapi.com/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 22
    },
    {
        "id": "kkxiezhenziyuan",
        "name": "KK写真资源",
        "baseUrl": "https://kkzy.me/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 23
    },
    {
        "id": "91md",
        "name": "91md",
        "baseUrl": "http://bt4.cc/api.php/provide/vod/from/mdm3u8",
        "group": "premium",
        "enabled": true,
        "priority": 24
    },
    {
        "id": "siwaziyuan",
        "name": "丝袜资源",
        "baseUrl": "https://siwazyw.cc/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 25
    },
    {
        "id": "mangguoziyuan",
        "name": "芒果资源",
        "baseUrl": "https://mgzyz1.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 26
    },
    {
        "id": "shuimitao",
        "name": "水蜜桃",
        "baseUrl": "http://51smt4.xyz/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 27
    },
    {
        "id": "xiuseziyuan",
        "name": "秀色资源",
        "baseUrl": "https://api.xiuseapi.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 28
    },
    {
        "id": "tantanziyuan",
        "name": "探探资源",
        "baseUrl": "https://apittzy.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 29
    },
    {
        "id": "sewoziyuan",
        "name": "色窝资源",
        "baseUrl": "https://sewozyapi.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 30
    },
    {
        "id": "yinwoziyuan",
        "name": "淫窝资源",
        "baseUrl": "https://api.yinwoapi.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 31
    },
    {
        "id": "sediaosiziyuan",
        "name": "色屌丝资源",
        "baseUrl": "http://sdszyapi.com/home/cjapi/asbb/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 32
    },
    {
        "id": "xiaojiejieziyuan",
        "name": "小姐姐资源",
        "baseUrl": "https://xjjzyapi.com/home/cjapi/askl/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 33
    },
    {
        "id": "52avav",
        "name": "52AVAV",
        "baseUrl": "https://52zyapi.com/home/cjapi/asda/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 34
    },
    {
        "id": "woyaopapa",
        "name": "我要啪啪",
        "baseUrl": "http://www.caiji21.com/home/cjapi/klkl/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 35
    },
    {
        "id": "avjizhongyin",
        "name": "AV集中淫",
        "baseUrl": "https://www.caiji22.com/home/cjapi/klp0/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 36
    },
    {
        "id": "yeyeluziyuan",
        "name": "夜夜撸资源",
        "baseUrl": "https://www.caiji23.com/home/cjapi/kls6/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 37
    },
    {
        "id": "dadiaosiziyuan",
        "name": "大屌丝资源",
        "baseUrl": "http://www.caiji24.com/home/cjapi/p0d2/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 38
    },
    {
        "id": "mimiziyuan",
        "name": "咪咪资源",
        "baseUrl": "http://www.caiji25.com/home/cjapi/p0as/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 39
    },
    {
        "id": "baoyuav",
        "name": "鲍鱼AV",
        "baseUrl": "http://caiji26.com/home/cjapi/p0g8/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 40
    },
    {
        "id": "jinggongchangziyuan",
        "name": "精工厂资源",
        "baseUrl": "https://jgczyapi.com/home/cjapi/kld2/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 41
    },
    {
        "id": "diandianyule",
        "name": "点点娱乐",
        "baseUrl": "https://xx55zyapi.com/home/cjapi/ascf/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 42
    },
    {
        "id": "dammziyuan",
        "name": "大MM资源",
        "baseUrl": "https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 43
    },
    {
        "id": "huangguatvziyuan",
        "name": "黄瓜TV资源",
        "baseUrl": "https://www.caiji10.com/home/cjapi/cfs6/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 44
    },
    {
        "id": "kuaiboheziziyuan",
        "name": "快播盒子资源",
        "baseUrl": "https://www.caiji09.com/home/cjapi/cfp0/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 45
    },
    {
        "id": "ribenavzaixian",
        "name": "日本AV在线",
        "baseUrl": "https://www.caiji07.com/home/cjapi/cfcf/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 46
    },
    {
        "id": "jiujiurezaixian",
        "name": "久久热在线",
        "baseUrl": "https://www.caiji06.com/home/cjapi/cfbb/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 47
    },
    {
        "id": "qingqingcaoshipin",
        "name": "青青草视频",
        "baseUrl": "https://www.caiji05.com/home/cjapi/cfda/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 48
    },
    {
        "id": "madoushipin",
        "name": "麻豆视频",
        "baseUrl": "https://www.caiji04.com/home/cjapi/cfc7/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 49
    },
    {
        "id": "yibendaoziyuan",
        "name": "一本道资源",
        "baseUrl": "https://www.caiji03.com/home/cjapi/cfg8/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 50
    },
    {
        "id": "caoliushipin",
        "name": "草榴视频",
        "baseUrl": "https://www.caiji02.com/home/cjapi/cfas/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 51
    },
    {
        "id": "yazhouchengrenzaixian",
        "name": "亚洲成人在线",
        "baseUrl": "https://www.caiji01.com/home/cjapi/cfd2/mc10/vod",
        "group": "premium",
        "enabled": true,
        "priority": 52
    },
    {
        "id": "99ziyuan",
        "name": "99资源",
        "baseUrl": "http://99zy.pw/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 53
    },
    {
        "id": "chihanduizhang",
        "name": "痴汉队长",
        "baseUrl": "https://javcaptain.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 54
    },
    {
        "id": "douyinshipin",
        "name": "抖阴视频",
        "baseUrl": "https://www.888dav.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 55
    },
    {
        "id": "madoushipin2",
        "name": "麻豆视频2",
        "baseUrl": "https://madouse.la/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 56
    },
    {
        "id": "91madou",
        "name": "91麻豆",
        "baseUrl": "https://91md.me/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 57
    },
    {
        "id": "aicaoziyuan",
        "name": "爱操资源",
        "baseUrl": "https://aicaozy.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 58
    },
    {
        "id": "langchaoziyuan",
        "name": "浪潮资源",
        "baseUrl": "http://langchaozy6.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 59
    },
    {
        "id": "suboziyuan",
        "name": "速播资源",
        "baseUrl": "https://api.suboapi.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 60
    },
    {
        "id": "kudouziyuan",
        "name": "酷豆资源",
        "baseUrl": "https://kudouzy.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 61
    },
    {
        "id": "kudou2",
        "name": "酷豆2",
        "baseUrl": "https://api.kdapi.info/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 62
    },
    {
        "id": "kulunli",
        "name": "酷伦理",
        "baseUrl": "https://api.kudian70.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 63
    },
    {
        "id": "yingkuziyuan",
        "name": "影库资源",
        "baseUrl": "https://api.ykapi.net/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 64
    },
    {
        "id": "wanyingse",
        "name": "万影色",
        "baseUrl": "https://wanying4.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 65
    },
    {
        "id": "yinlongziyuan",
        "name": "银龙资源",
        "baseUrl": "https://yinlong.tv/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 66
    },
    {
        "id": "aiboziyuan",
        "name": "爱播资源",
        "baseUrl": "https://cj.apiabzy.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 67
    },
    {
        "id": "ckziyuan",
        "name": "CK资源",
        "baseUrl": "http://www.feifei67.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 68
    },
    {
        "id": "laoyaziyuan",
        "name": "老鸭资源",
        "baseUrl": "https://api.apilyzy.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 69
    },
    {
        "id": "huajiaoziyuan",
        "name": "花椒资源",
        "baseUrl": "https://apihjzy.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 70
    },
    {
        "id": "lajiaoziyuan",
        "name": "辣椒资源",
        "baseUrl": "https://apilj.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 71
    },
    {
        "id": "leboziyuan",
        "name": "乐播资源",
        "baseUrl": "https://lbapi9.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 72
    },
    {
        "id": "jializiyuan",
        "name": "佳丽资源",
        "baseUrl": "http://www.jializyzapi.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 73
    },
    {
        "id": "fanhaoziyuan",
        "name": "番号资源",
        "baseUrl": "http://fhapi9.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 74
    },
    {
        "id": "shayuziyuan",
        "name": "鲨鱼资源",
        "baseUrl": "https://shayuapi.com/api.php/provide/vod",
        "group": "premium",
        "enabled": true,
        "priority": 75
    },
    {
        "id": "foxziyuan",
        "name": "FOX资源",
        "baseUrl": "https://api.foxzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 76
    },
    {
        "id": "liangziziyuan",
        "name": "量子资源",
        "baseUrl": "http://cj.lziapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 77
    },
    {
        "id": "hongniuziyuan",
        "name": "红牛资源",
        "baseUrl": "https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8",
        "group": "normal",
        "enabled": true,
        "priority": 78
    },
    {
        "id": "feisuziyuan",
        "name": "飞速资源",
        "baseUrl": "https://www.feisuzy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 79
    },
    {
        "id": "guangsuziyuan",
        "name": "光速资源",
        "baseUrl": "https://api.guangsuapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 80
    },
    {
        "id": "xinlangziyuan",
        "name": "新浪资源",
        "baseUrl": "http://api.xinlangapi.com/xinlangapi.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 81
    },
    {
        "id": "yuleziyuan",
        "name": "鱼乐资源",
        "baseUrl": "https://api.ylzy1.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 82
    },
    {
        "id": "kuaiboziyuan",
        "name": "快播资源",
        "baseUrl": "http://www.kuaibozy.com/api.php/provide/vod/from/kbm3u8",
        "group": "normal",
        "enabled": true,
        "priority": 83
    },
    {
        "id": "baiduziyuan",
        "name": "百度资源",
        "baseUrl": "https://api.apibdzy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 84
    },
    {
        "id": "tiankongziyuan",
        "name": "天空资源",
        "baseUrl": "https://api.tiankongapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 85
    },
    {
        "id": "ukuziyuan",
        "name": "U酷资源",
        "baseUrl": "https://api.ukuapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 86
    },
    {
        "id": "kaolatv",
        "name": "考拉TV",
        "baseUrl": "https://ikaola.tv/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 87
    },
    {
        "id": "duanyouyingshi",
        "name": "段友影视",
        "baseUrl": "http://shangjihuoke.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 88
    },
    {
        "id": "meitiankankan",
        "name": "每天看看",
        "baseUrl": "http://47.113.126.237:1234/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 89
    },
    {
        "id": "qianxunshiguang",
        "name": "千寻时光",
        "baseUrl": "http://wy.dqyhg.cn/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 90
    },
    {
        "id": "lehuoyingshi",
        "name": "乐活影视",
        "baseUrl": "https://lehootv.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 91
    },
    {
        "id": "39yingshi",
        "name": "39影视",
        "baseUrl": "https://www.39kan.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 92
    },
    {
        "id": "piaohuadianying",
        "name": "飘花电影",
        "baseUrl": "http://www.zzrhgg.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 93
    },
    {
        "id": "duoduoziyuan",
        "name": "多多资源",
        "baseUrl": "https://www.ddzyz1.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 94
    },
    {
        "id": "jinyingziyuan",
        "name": "金鹰资源",
        "baseUrl": "https://jyzyapi.com/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 95
    },
    {
        "id": "yingtuziyuan",
        "name": "影图资源",
        "baseUrl": "https://cj.vodimg.top/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 96
    },
    {
        "id": "nuoxunziyuan",
        "name": "诺讯资源",
        "baseUrl": "https://caiji.nxflv.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 97
    },
    {
        "id": "xiaomaomi",
        "name": "小猫咪",
        "baseUrl": "http://zy.xiaomaomi.cc/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 98
    },
    {
        "id": "guanjunziyuan",
        "name": "冠军资源",
        "baseUrl": "https://www.cmpzy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 99
    },
    {
        "id": "tomziyuan",
        "name": "TOM资源",
        "baseUrl": "https://api.tomcaiji.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 100
    },
    {
        "id": "kuaicheziyuan",
        "name": "快车资源",
        "baseUrl": "https://caiji.kczyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 101
    },
    {
        "id": "fanqieziyuan",
        "name": "番茄资源",
        "baseUrl": "http://api.fqzy.cc/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 102
    },
    {
        "id": "wolongziyuan",
        "name": "卧龙资源",
        "baseUrl": "https://collect.wolongzyw.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 103
    },
    {
        "id": "yinghuaziyuan",
        "name": "樱花资源",
        "baseUrl": "https://m3u8.apiyhzy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 104
    },
    {
        "id": "kanziyuan",
        "name": "看资源",
        "baseUrl": "https://api.yikanapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 105
    },
    {
        "id": "kudianziyuan",
        "name": "酷点资源",
        "baseUrl": "https://kudianzy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 106
    },
    {
        "id": "sugengziyuan",
        "name": "速更资源",
        "baseUrl": "https://sugengzy.cn/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 107
    },
    {
        "id": "shandianziyuan",
        "name": "闪电资源",
        "baseUrl": "http://sdzyapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 108
    },
    {
        "id": "77hanju",
        "name": "77韩剧",
        "baseUrl": "https://www.77hanju.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 109
    },
    {
        "id": "kuaiboziyuan",
        "name": "快播资源",
        "baseUrl": "http://www.kuaibozy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 110
    },
    {
        "id": "tiankongziyuan",
        "name": "天空资源",
        "baseUrl": "https://api.tiankongapi.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 111
    },
    {
        "id": "kankanziyuan",
        "name": "看看资源",
        "baseUrl": "https://zy.hikan.xyz/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 112
    },
    {
        "id": "aikuyingshi",
        "name": "爱酷影视",
        "baseUrl": "https://www.zhanlangbu.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 113
    },
    {
        "id": "duoduoziyuan2",
        "name": "多多资源2",
        "baseUrl": "https://a.7dyu.cn/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 114
    },
    {
        "id": "omofun",
        "name": "OmoFun",
        "baseUrl": "https://app.omofun.net/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 115
    },
    {
        "id": "beichuanyingshi",
        "name": "北川影视",
        "baseUrl": "https://www.bcwzg.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 116
    },
    {
        "id": "bobiyingshi",
        "name": "波比影视",
        "baseUrl": "http://xxhhsc.top/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 117
    },
    {
        "id": "tujutv2",
        "name": "土剧TV2",
        "baseUrl": "http://tujutv.top/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 118
    },
    {
        "id": "yingmi",
        "name": "映迷",
        "baseUrl": "https://www.inmi.app/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 119
    },
    {
        "id": "siguyingyuan",
        "name": "思古影院",
        "baseUrl": "https://www.siguyy.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 120
    },
    {
        "id": "yidayingyuan",
        "name": "益达影院",
        "baseUrl": "http://luobu.yss6080.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 121
    },
    {
        "id": "lehuoyingshi",
        "name": "乐活影视",
        "baseUrl": "https://lehootv.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 122
    },
    {
        "id": "aidoushipin",
        "name": "爱兜视频",
        "baseUrl": "http://id190.tpddns.cn:81/mogai_api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 123
    },
    {
        "id": "shunjianyingshi",
        "name": "瞬间影视",
        "baseUrl": "http://app.7en7.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 124
    },
    {
        "id": "pankankan",
        "name": "盘看看",
        "baseUrl": "http://tvcaiji.pankk.cn/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 125
    },
    {
        "id": "chuangyiyingshi",
        "name": "创艺影视",
        "baseUrl": "https://www.30dian.cn/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 126
    },
    {
        "id": "xiangguayingshi",
        "name": "香瓜影视",
        "baseUrl": "http://v.xgvod.top/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 127
    },
    {
        "id": "huanfengyingshi",
        "name": "幻风影视",
        "baseUrl": "http://vip857.top/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 128
    },
    {
        "id": "xiaoniaodongman",
        "name": "小鸟动漫",
        "baseUrl": "http://xydm.baicai.buzz/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 129
    },
    {
        "id": "woniudongman",
        "name": "蜗牛动漫",
        "baseUrl": "http://woniudm.woniu.cyou:20000/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 130
    },
    {
        "id": "pugongyingshipin",
        "name": "蒲公英视频",
        "baseUrl": "http://www.pgy1.top/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 131
    },
    {
        "id": "mingxuanyingshi",
        "name": "铭轩影视",
        "baseUrl": "http://lz0716.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 132
    },
    {
        "id": "haiyuyingshi",
        "name": "海玉影视",
        "baseUrl": "http://tv2.hykjtv.cn/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 133
    },
    {
        "id": "baitaoyingshi",
        "name": "百淘影视",
        "baseUrl": "http://ys.58g8.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 134
    },
    {
        "id": "aliyingshi",
        "name": "阿里影视",
        "baseUrl": "http://aliys.cn:90/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 135
    },
    {
        "id": "zuilishengtv",
        "name": "醉璃笙TV",
        "baseUrl": "http://web.xhdj.vip/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 136
    },
    {
        "id": "wangmindianying",
        "name": "网民电影",
        "baseUrl": "https://www.prinevillesda.org/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 137
    },
    {
        "id": "haiwaidianying",
        "name": "海外电影",
        "baseUrl": "https://www.200121.com/api.php/provide/vod",
        "group": "normal",
        "enabled": true,
        "priority": 138
    }
];
