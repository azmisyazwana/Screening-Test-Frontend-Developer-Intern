import React from 'react'
import './Form.css'

const GroupInput = ({type, nameLabel, placeholder, onChange, inputClass, inputStyle}) => {
    return (
        <div className='group-input'>
            { nameLabel && (<label className='label-form'>{nameLabel}</label>)}
            <input type={type} placeholder={placeholder} onChange={onChange} className={`input ${inputClass}`} style={inputStyle}/>
        </div>
    )
}

export default GroupInput