import React, { useState } from 'react'
import GroupInput from './GroupInput'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Form.css'

const FormLogin = ({onClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setEmailValid] = useState(true)
    const [isPasswordValid, setPasswordValid] = useState(true)

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
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
    }

    
  return (
    <div className='modal'>
                <form className='modal-content'>
                    <div className='container-header'>
                        <h3 className='header-form'>Login</h3>
                        <FontAwesomeIcon className='close-btn' icon={faClose} onClick={onClick} />
                    </div>
                    <div className='container'>
                        <GroupInput nameLabel="Email" type="email" onChange={handleChangeEmail} inputClass={isEmailValid ? 'default-border' : 'red-border'} 
                        />
                        {!isEmailValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Format email salah</p>}
                        <GroupInput nameLabel="Password" type="password" onChange={handleChangePassword} inputClass={isPasswordValid ? 'default-border' : 'red-border'}
                        />
                        {!isPasswordValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Wajib diisi</p>}
                        <button className='button btn-submit margin-t-5'  onClick={validation}>Login</button>
                    </div>
                </form>

            </div>
  )
}

export default FormLogin