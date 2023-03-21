import http from '../http/index'

/**
 * 获取聊天房间
 */
export function getRoomList() {
    return http.get("/chatRoom/list", {});
}

/**
 * 获取历史聊天记录
 */
export function getHistoryChatRecordsList(row: any) {
    return http.get(`/chatRoom/historyChatRecordsList/${row.id}`, {});
}

/**
 * 问ai问题
 */
export function askAi(row: any) {
    return http.post(`/chatMessage/ask/${row.id}`, {data:row});
}
