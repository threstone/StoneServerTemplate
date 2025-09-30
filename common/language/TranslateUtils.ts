/* eslint-disable no-use-before-define */
export type TranslateKey = keyof typeof TranslateMap;

export class TranslateUtils {
    static translate(key: TranslateKey, lang: string = 'zh-CN'): string {
        if (TranslateMap?.[key]?.[lang] == null) {
            return key;
        }
        return TranslateMap[key][lang];
    }
}

// todo后续可以抽出成配置文件，方便维护,id为中文内容
export const TranslateMap = {
    参数错误: { 'zh-CN': '参数错误', en: 'Parameter error' },
    超出字数限制: { 'zh-CN': '超出字数限制', en: 'Exceeding the word limit' },
    请求过于频繁: { 'zh-CN': '请求过于频繁', en: 'Requests are too frequent' },
    重启成功: { 'zh-CN': '重启成功', en: 'Restart success' },
    修改失败: { 'zh-CN': '修改失败', en: 'Modification failed' },
    更新成功: { 'zh-CN': '更新成功', en: 'Update success' },
    已达上限: { 'zh-CN': '已达上限', en: 'Reached the limit' },
    重复请求: { 'zh-CN': '重复请求', en: 'Repeat request' },
    清空账号: { 'zh-CN': '清空账号', en: 'Clear account' },
    服务未开启: { 'zh-CN': '服务未开启', en: 'Service not enabled' },
    您已被封禁: { 'zh-CN': '您已被封禁', en: 'You have been banned' },
    验证失败: { 'zh-CN': '验证失败', en: 'Verification failed' },
    超出限购次数: { 'zh-CN': '超出限购次数', en: 'Exceeding the limit purchase times' },
    道具不足: { 'zh-CN': '道具不足', en: 'Items are insufficient' },
    已满级: { 'zh-CN': '已满级', en: 'Reached the highest level' },
    重复领取奖励: { 'zh-CN': '重复领取奖励', en: 'Repeat redemption of rewards' },
    不满足条件: { 'zh-CN': '不满足条件', en: 'Conditions not met' },
    未知错误: { 'zh-CN': '未知错误', en: 'unknow error' },
    功能未开启: { 'zh-CN': '功能未开启', en: 'Function not enabled' },
    成功: { 'zh-CN': '成功', en: 'Success' },
    失败: { 'zh-CN': '失败', en: 'Fail' },
    被对方拉黑: { 'zh-CN': '被对方拉黑', en: 'Blacklisted by the other party' },
    只能私聊好友: { 'zh-CN': '只能私聊好友', en: 'Can only talk to friends' },
    房间不存在: { 'zh-CN': '房间不存在', en: 'Room does not exist' },
    房间已满: { 'zh-CN': '房间已满', en: 'Room is full' },
    礼包码无效: { 'zh-CN': '礼包码无效', en: 'Invitation code is invalid' },
};
