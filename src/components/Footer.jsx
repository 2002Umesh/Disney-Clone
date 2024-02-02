import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-4">
        <div className="">
          <h3 className="text-sm md:text-lg">Company</h3>
          <div className="flex gap-2 md:block">
            <div className="pt-4">
              <a
                href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar"
                className="cursor-pointer text-xs md:text-sm"
              >
                About Us
              </a>
            </div>
            <div className="pt-4">
              <a
                href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar"
                className="cursor-pointer text-xs md:text-sm"
              >
                Careeers
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm md:text-lg">View Website in</h3>
          <div className="pt-4">
            <select name="lang" className="text-sm">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Odia">Odia</option>
            </select>
          </div>
        </div>
        <div>
          <h3 className="text-sm md:text-lg">Need Help?</h3>
          <div className="flex gap-2 md:block text-xs md:text-sm">
            <div className="pt-4 cursor-pointer text-xs md:text-sm">
              <a href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar">
                Visit Help Center
              </a>
            </div>
            <div className="pt-4 cursor-pointer text-xs md:text-sm">
              <a href="https://en.wikipedia.org/wiki/Disney%2B_Hotstar">
                Share feedback
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm md:text-lg">Connect With Us</h3>
          <div className="flex justify-content pt-4 cursor-pointer">
            <a
              href="https://www.facebook.com/DisneyPlusHotstar"
              className="pl-2"
            >
              <FaFacebook />
            </a>
            <a href="https://twitter.com/DisneyPlusHS" className="pl-7">
              <FaSquareXTwitter />
            </a>
          </div>
          <div className="hidden md:block pt-5 cursor-pointer">
            <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar.dplus&hl=en&gl=US">
              <img
                className="size-[50px] w-24"
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
              />
            </a>
            {/* <img className='size-[50px] w-24'  src='https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore'/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
