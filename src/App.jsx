import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [password, setpassword] = useState("")

  let password_conf = "ตัวเลขทั้งหมดนี้"

  function submit() {
    if (password == password_conf) {
      alert("✔✔ ทำไมเก่งจังว่ะ ✔✔")
    }else{
      alert("ยังไม่ใข้น้าาาา")
      setpassword("")
    }
  }

  return (
    <>
      <div className='container'>
        <div className="content">
          <h2>welcome</h2>
          <a href="https://drive.google.com/drive/folders/1NJQDUi3f_ZSUjwW7RF_q9RzdM8_V6M_w?usp=drive_link" target='_blank'>คำใบ้</a>
          <div className="form">
            <input placeholder='password' type="text" value={password} onChange={e => setpassword(e.target.value)}/>
            <button onClick={submit}>submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
