import React, { useEffect, useState } from 'react'
import Discussion from '../components/Discussion'
import ListItem from '../components/ListItem'
import Navbar from '../components/Navbar'
import './Dashboard.css'
import Comment from '../components/Comment'
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'
import FormAddComment from '../components/FormAddComment'


const Dashboard = () => {
    const [activeFormLogin, setActiveFormLogin] = useState(false)
    const [activeFormRegister, setActiveFormRegister] = useState(false)
    const [comments, setComments] = useState(null)


    const handleCloseLogin = () => {
        setActiveFormLogin(!setActiveFormLogin)
    }

    const handleOpenLogin = () => {
        setActiveFormLogin(true)
    }

    const handleCloseRegister = () => {
        setActiveFormRegister(!setActiveFormRegister)
    }

    const handleOpenRegister = () => {
        setActiveFormRegister(true)
    }

    useEffect(()=> {
        fetch('http://localhost:3000/comments')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setComments(data);
            })
    }, [])

  return (
    <div>
        <div>
            <Navbar onClickLogin={handleOpenLogin} onClickRegister={handleOpenRegister} />
            {activeFormLogin && <FormLogin onClick={handleCloseLogin} />}
            {activeFormRegister && <FormRegister onClick={handleCloseRegister} />}
            <div className='content'>
                <div className='left-side'>
                    <div className='header'>
                        <h1>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h1>
                        <p>Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet.</p>
                    </div>
                    <div className='comment-section'>
                        <h2><span>Komentar</span></h2>
                        {comments && <Comment comments={comments} />}
                    </div>
                    <FormAddComment />
                </div>
                <div className='right-side'>
                    <Discussion />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard