import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='foot'>
        <div className='icons'>
            <span><i class="fa fa-facebook-official"></i></span>
            <span><i class="fa fa-google"></i></span>
            <span><i class="fa fa-linkedin-square"></i></span>
            <span><i class="fa fa-twitter-square"></i></span>
        </div>
      <div className='terms'>
         <p>Conditions of Use</p>
         <p>Privacy Policy</p>
         <p>Press Room</p>
      </div>
    <center>© 2023 MovieBox with love by Odiah Ebuka</center>


    </div>
  )
}

export default Footer