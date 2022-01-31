import React from 'react'
import s from './Message.module.css'

type propsMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: propsMessageType) {
    return (
        <div className={s.message}>
            <div>
                <img className={s.avatar} src={props.avatar}/>
            </div>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.times}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
