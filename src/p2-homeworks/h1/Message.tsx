import React from 'react'

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div>
            {/*{props.avatar}*/}
            {props.name}
            {props.message}
            {props.time}
        </div>
    )
}

export default Message
