import React from 'react'
import Discussion from '../components/Discussion'
import ListItem from '../components/ListItem'
import Navbar from '../components/Navbar'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <div>
            <Navbar />
            <div className='content'>
                <div className='left-side'>
                    <div className='header'>
                        <h1>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h1>
                        <p>Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi di internet.</p>
                    </div>
                    <div className='comment-section'>
                        <h2><span>Komentar</span></h2>
                        <p>Komentar</p>
                        <p>Komentar</p>
                    </div>
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