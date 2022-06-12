import React, { useState } from 'react'
import './Form.css'
const FormAddComment = () => {
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [isEmailValid, setEmailValid] = useState(true)
    const [isCommentValid, setCommentValid] = useState(true)
    const [isNameValid, setNameValid] = useState(true)


    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangeComment = (event) => {
        setComment(event.target.value)
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const validation = (e) => {
        if(email === '') {
            setEmailValid(false)
            e.preventDefault()
        }else{
            setEmailValid(true)
        }
        if(comment === ''){
            setCommentValid(false)
            e.preventDefault()
        }else{
            setCommentValid(true)
        }
        if(name === ''){
            setNameValid(false)
            e.preventDefault()
        }else{
            setNameValid(true)
        }
    }
    return (
        <div className='form-comment'>
            <h3 className='add-comment'><span>Tambahkan komentar</span></h3>
            <form className='form-add-comment'>
                <input onChange={handleChangeName} className={`input input-name ${isNameValid ? 'default-border' : 'red-border' }`} type="text" name="name" placeholder='Nama' />
                {!isNameValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Wajib diisi</p>}
                <input  onChange={handleChangeEmail} className={`input input-email ${isEmailValid ? 'default-border' : 'red-border' }`} type="email" name="email" placeholder='Email' />
                {!isEmailValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Format email salah</p>}
                <textarea onChange={handleChangeComment} className={`input input-comment ${isCommentValid ? 'default-border' : 'red-border' }`} placeholder='Komentar anda' />
                {!isCommentValid && <p className='text-warning' style={{marginBottom: '.5rem'}}>Wajib diisi</p>}
                <div className='btn-form'>
                    <button className='button btn-reset' type='reset'>Reset</button>
                    <button className='button btn-submit' type='submit' onClick={validation}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddComment