import React from 'react'
import logo from "./../../assets/images/logo.png"
// import {RiLinkedinFill} from "react-icons/ri"
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram, AiFillLinkedin} from "react-icons/ai"
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    path:"https://www.youtube.com/channel/UCLlbfO5op0NqGiMiuiaDXEg",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://github.com/samerr07",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com/",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.linkedin.com/in/sameer-srivastava-7896b8208/",
    icon:<AiFillLinkedin className='group-hover:text-white w-4 h-5'/>
  }
]

const quickLinks01 = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/services",
    display:"Services"
  },{
    path:"/",
    display:"Blog"
  }
]

const quickLinks02 = [
  {
    path:"/find-a-doctor",
    display:"Find a Doctor"
  },
  {
    path:"/",
    display:"Request an Appointment"
  },
  {
    path:"/",
    display:"Find a Location"
  },{
    path:"/",
    display:"Get a Opinion"
  }
]

const quickLinks03 = [
  {
    path:"/",
    display:"Donate",
  },
  {
    path:"/contact",
    display:"Contact Us"
  }
]
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright @ {year} developed by Sameer Srivastava All rights reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {
                socialLinks.map((e,i)=>(
                  <Link
                  to={e.path}
                  key={i}
                  className='w-9 h-9 border border-solid border-[181A1E] rounded-full flex items-center
                  justify-center group hover:bg-primaryColor hover:border-none'
                  >
                    {e.icon}
                  </Link>
                ))
              }
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quick Links
            </h2>

            <ul>
              {
                quickLinks01.map((e,i)=>(
                  <li key={i}>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={e.path}>{e.display}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              I want to:
            </h2>

            <ul>
              {
                quickLinks02.map((e,i)=>(
                  <li key={i}>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={e.path}>{e.display}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Support
            </h2>

            <ul>
              {
                quickLinks03.map((e,i)=>(
                  <li key={i}>
                    <Link className='text-[16px] leading-7 font-[400] text-textColor' to={e.path}>{e.display}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
