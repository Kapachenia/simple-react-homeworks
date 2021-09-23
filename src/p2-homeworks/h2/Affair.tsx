import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (value: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.name}>
                {props.affair.name}
            </div>
            <div className={s.priority}>
                { `[${props.affair.priority}]` }
            </div>
            <div>
                <button onClick={() => deleteCallback(props.affair._id)}>x</button>
            </div>

        </div>
    )
}

export default Affair
