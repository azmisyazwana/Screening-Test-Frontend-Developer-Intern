import React from 'react'
import ListItem from './ListItem'

const Discussion = () => {
  return (
    <div>
        <h3>Diskusi 5 teratas</h3>
            <ol>
                <ListItem no={1}>Bersihkan laptop dari butiran debu</ListItem>
                <ListItem no={2}>Cara akses website menggunakan koneksi openVPN</ListItem>
                <ListItem no={3}>Batas aman overclock PC rakitan</ListItem>
                <ListItem no={4}>Cara mengetahui akun Facebook di-hack melalui aplikasi</ListItem>
                <ListItem no={5}>Tutorial:langkah-langkah mencegah website untuk track user</ListItem>
            </ol>
    </div>
  )
}

export default Discussion