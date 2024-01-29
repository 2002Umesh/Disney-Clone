import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
    <div className="grid md:grid-cols-4">
    <div className=''>
      <h3>Company</h3>
      <div className="flex gap-2 md:block">
      <div className='pt-4'><a href='https://en.wikipedia.org/wiki/Disney%2B_Hotstar' className='cursor-pointer'>About Us</a></div>
      <div className='pt-4'><a href='https://en.wikipedia.org/wiki/Disney%2B_Hotstar' className='cursor-pointer'>Careeers</a></div>
      </div>
    </div>
    <div>
      <h3>View Website in</h3>
      <div className="pt-4">
      <select name="lang">
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
  <option value="Odia">Odia</option>  
</select>
</div>
      </div>
    <div>
      <h3>Need Help?</h3>
      <div className="flex gap-2 md:block">
      <div className="pt-4 cursor-pointer"><a href='https://en.wikipedia.org/wiki/Disney%2B_Hotstar'>Visit Help Center</a></div>
      <div className="pt-4 cursor-pointer"><a href='https://en.wikipedia.org/wiki/Disney%2B_Hotstar'>Share feedback</a></div>
      </div>
      </div>
    <div>
      <h3>Connect With Us</h3>
      <div className="flex justify-content pt-4 cursor-pointer">
      <a className='pl-2'><FaFacebook /></a>
      <a className='pl-7'><FaSquareXTwitter /></a>
      </div>
      <div className="pt-5 flex cursor-pointer">
      <img className='size-[50px] w-24' src='https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore'/>
      {/* <img className='size-[50px] w-24'  src='https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore'/> */}
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer