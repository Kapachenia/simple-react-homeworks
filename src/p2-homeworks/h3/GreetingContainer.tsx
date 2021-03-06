import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setName(e.currentTarget.value)
    }

    const addUser = () => {
        const trimmedName = name.trim()
        if (trimmedName) {
            alert(`Hello ${trimmedName} !`)
            addUserCallback(trimmedName)
            setName('')
        } else {
            setError('Title is required')
            setName('')
        }

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
        // if (e.charCode === 32) {
        //     setToggle(true)
        //     setError('Title is required')
        // }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
            // toggle={toggle}
        />
    )
}

export default GreetingContainer
