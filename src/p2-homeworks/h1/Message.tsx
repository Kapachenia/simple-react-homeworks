import React from 'react'
import {MessageDataType} from "./HW1";
import s from "./Message.module.css"


function Message(props: MessageDataType) {
    return (
        <div className={s.content}>
            <img src={props.avatar} />
            <div className={s.commentBubble}>
                <div className={s.contentMessage}>
                    <div className={s.name}> { props.name } </div>
                    <div className={s.message}> { props.message } </div>
                </div>
                <div className={s.dataTime}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
