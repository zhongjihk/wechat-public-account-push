export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxba5bb19b07f77eee",
    // 公众号APP_SECRET
    APP_SECRET: "db9b1cc9a20107bcfd0fc9606f58b55e",
    // 模板消息id
    TEMPLATE_ID: "oSxe-k5rykocCarww2P29fLAacSwe6NihGj99ubw5x0",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["ouI1v5x03s7RsF4pe9hbgceFTvZo","ouI1v51KqQtaw6pLb10_9mQypPsQ"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "河北",
    // 所在城市
    CITY: "张家口",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "老婆", "year": "1999", "date": "04-26"},
      {"name": "老公", "year": "2000", "date": "03-14"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2020-12-31",
    // 结婚纪念日
    MARRY_DATE: "2021-01-01",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
