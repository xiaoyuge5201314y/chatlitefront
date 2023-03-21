import s from './index.module.scss'
import Room from "./components/room";
import React, {useState} from "react";
import ChatBox from "./components/chatBox";


const chat = () => {
    const [message, setMessage] = useState({});
    function onChooseRoom(data:any){
      setMessage(data)
    }
    return (
        <div className={s.box}>
            <div className={s.roomList}>
                <Room onChooseRoom={onChooseRoom}></Room>
            </div>
                <ChatBox data={message}></ChatBox>
        </div>
    )
}
// @ts-ignore
export default chat