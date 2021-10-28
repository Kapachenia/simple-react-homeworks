import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (value: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }

    if (props.affair.priority === 'high') {
        return (
            <div className={s.wrapper}>
                <div className={s.name}>
                    {props.affair.name}
                </div>
                <div className={s.priority}>
                    {<div className={s.priorityHigh}>{`[${props.affair.priority}]`}</div>}
                </div>
                <div>
                    <button onClick={() => deleteCallback(props.affair._id)}>x</button>
                </div>
            </div>
        )
    }

    if (props.affair.priority === 'middle') {
        return (
            <div className={s.wrapper}>
                <div className={s.name}>
                    {props.affair.name}
                </div>
                <div className={s.priority}>
                    {<div className={s.priorityMiddle}>{`[${props.affair.priority}]`}</div>}
                </div>
                <div>
                    <button onClick={() => deleteCallback(props.affair._id)}>x</button>
                </div>
            </div>
        )
    }

    if (props.affair.priority === 'low') {
        return (
            <div className={s.wrapper}>
                <div className={s.name}>
                    {props.affair.name}
                </div>
                <div className={s.priority}>
                    {<div className={s.priorityLow}>{`[${props.affair.priority}]`}</div>}
                </div>
                <div>
                    <button onClick={() => deleteCallback(props.affair._id)}>x</button>
                </div>
            </div>
        )

    } else return (
        <div className={s.wrapper}>
            <div className={s.name}>
                {props.affair.name}
            </div>
            <div className={s.priority}>
                {`[${props.affair.priority}]`}
            </div>
            <div>
                <button onClick={() => deleteCallback(props.affair._id)}>x</button>
            </div>
        </div>
    )
}

export default Affair
