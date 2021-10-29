import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    return (
        <div className={s.wrapper}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyPress={onKeyPressHandler}
                       className={inputClass}
                    // onBlur={setNameCallback}
                />
                <div className={s.errorTitle}>{error}</div>
            </div>
            <div className={s.rightColumn}>
                <button onClick={addUser} disabled={!name}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
