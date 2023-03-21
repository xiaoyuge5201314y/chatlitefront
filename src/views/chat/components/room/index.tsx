import {getRoomList} from "../../../../api/chat";
import React, {useEffect, useState} from "react";
import {Avatar, List} from "antd";

const room = ({onChooseRoom}: any) => {
    const [roomList, setRoomList] = useState([] as any[]);

    async function init() {
        const res = await getRoomList()
        setRoomList(res.data.reverse() ?? [])
    }

    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={roomList}
                renderItem={(item, index) => (
                    <List.Item
                        onClick={() => onChooseRoom(item)}
                        actions={[<a style={{color: "red"}} key="list-loadmore-edit">删除</a>]}
                    >
                        <div style={{color: "#fff"}}> {`消息${index}`}</div>
                    </List.Item>
                )}
            />
        </div>
    )
}
// @ts-ignore
export default room