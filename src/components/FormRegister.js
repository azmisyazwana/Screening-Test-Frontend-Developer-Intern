import React, { useState } from 'react'
import GroupInput from './GroupInput'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Form.css'

const FormRegister = ({onClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isEmailValid, setEmailValid] = useState(true)
    const [isPasswordValid, setPasswordValid] = useState(true)
    const [isNameValid, setNameValid] = useState(true)


    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const validation = (e) => {
        if(email ==='') {
            setEmailValid(false)
            e.preventDefault()
        }else{
            setEmailValid(true)
        }
        if(password === ''){
            setPasswordValid(false)
            e.preventDefault()
        }else{
            setPasswordValid(true)
        }
        if(name === ''){
            setNameValid(false)
            e.preventDefault()
        }else{
            setNameValid(true)
        }
    }
  return (
    <div className='modal'>
                <form className='modal-content'>
                    <div className='container-header'>
                        <h3 className='header-form'>Register</h3>
                        <FontAwesomeIcon className='close-btn' icon={faClose} onClick={onClick}/>
                    </div>
                    <div className='container'>
                        <GroupInput nameLabel="Name" type="text" 
                        onChange={handleChangeName}
                        inputClass={isNameValid ? 'default-border' : 'red-border'}
                        />
                        {!isPasswordValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Wajib diisi</p>}
                        <GroupInput nameLabel="Email" type="email" 
                        onChange={handleChangeEmail}
                        inputClass={isEmailValid ? 'default-border' : 'red-border'} 
                        />
                        {!isEmailValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Format email salah</p>}

                        <GroupInput nameLabel="Password" type="password" 
                        onChange={handleChangePassword}
                        inputClass={isPasswordValid ? 'default-border' : 'red-border'}
                        />
                        {!isPasswordValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Wajib diisi</p>}

                        <button className='button btn-submit btn-create margin-t-5' type="submit" onClick={validation}>Create account</button>
                    </div>
                </form>

            </div>
  )
}

export default FormRegister