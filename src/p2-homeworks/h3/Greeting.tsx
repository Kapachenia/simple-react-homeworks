import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    toggle: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, toggle} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div className={s.wrapper}>
            <div>
                <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass} />
                <span className={s.errorTitle}>{error}</span>
            </div>
            <div className={s.rightColumn}>
                <button onClick={addUser} disabled={toggle}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
