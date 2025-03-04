import React ,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';

const Navbar = () => {
  const [active,setActive]=useState('');
  const [toggle,setToggle]=useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w7xl mx-auto'>
      <Link to='/' className='flex items-center gap-2' onClick={()=>{
        setActive("");
        window.scrollTo(0,0);
      }}>
        <img src={logo} alt="Logo" className='w-9 h-9 object-contain' />
        <p className='text-white text-[18px] font-bold coursor-pointer flex' >Waseem  &nbsp;<span className='sm:block hidden'> Abbasi</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((Link)=>(
          <li
          key={Link.id}
          
          className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(Link.title)}>
          <a href={`#${Link.id}`}>{Link.title}</a>
        </li>
    
        ))}
      </ul>
      <div className = "sm:hidden flex flex-4 justify-end items-center">
        <img src={ toggle?close:menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>(setToggle(!toggle))}  />
        <div className={`${!toggle?'hidden':'flex'} p-6 bg-primary absolute top-14 right-0 text-center justify-center shadow-xl   my-2 w-full z-40`}>
        <ul className='list-none  flex justify-end items-start flex-col  gap-4'>
        {navLinks.map((Link)=>(
          <li
          key={Link.id}
          
          className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}
          onClick={() => {
            setToggle(!toggle);
            setActive(Link.title);
          }}>
          <a href={`#${Link.id}`}>{Link.title}</a>
        </li>
    
        ))}
      </ul>
           </div>
      </div>
      </div>

    </nav>
  )
}

export default Navbar