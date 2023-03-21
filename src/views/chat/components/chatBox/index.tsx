import React, {useEffect, useState} from "react";
import {askAi, getHistoryChatRecordsList} from "../../../../api/chat";
import {Avatar, Button, Input, List} from "antd";



const chat = (props:any) => {
    const [chatRecords, setChatRecords] = useState([])
    const [message,setMessage]= useState("")
    async function init() {
        const res = await getHistoryChatRecordsList(props.data)
        setChatRecords(res.data ?? [])
    }

    async function askHandle() {
        await askAi({
            prompt: message,
            id:props.data.id,
            aiModelId: "",
            userId: "1",
        })
    }


    useEffect(() => {
        if (props.data?.id) {
            init()
        }
    }, [props.data?.id])
    return (
        <div style={{background:"#fff"}}>
            <List
                itemLayout="vertical"
                dataSource={chatRecords}
                renderItem={(item:any) => (
                    <List.Item
                        key={item.id}
                    >
                        {item.promptRole}
                        {item.content}
                    </List.Item>
                )}
            />
            <Input value={message} onInput={(e:any)=>setMessage(e.target.value)} ></Input>
            <Button type="primary"  onClick={askHandle}>发送</Button>
        </div>
    )
}
// @ts-ignore
export default chat