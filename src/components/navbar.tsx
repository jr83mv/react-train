import { Spiral as Hamburger } from 'hamburger-react'
import { useState,useEffect } from 'react';

function Navbar() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      console.log(windowSize.width,windowSize.height)
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <nav className="flex flex-row justify-between items-center px-24 py-2.5 w-[100%]">
      <a href="#" className="flex items-center justify-center gap-3 ">
        <img src="./Logo 2.png" alt="" className='' />
      </a>
      <div className={`${windowSize.width<1000?'hidden':'block'}`} id='desktop-nav'>
        <ul className="flex flex-row items-center justify-center gap-10">
          <li className=""><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact</a></li>
          <button className='flex items-start gap-2.5 px-9 rounded-2xl border-2 border-black py-5'>request demo</button>
        </ul>
      </div>
      <div className={`${windowSize.width < 1000 ? 'block' : 'hidden'}`}><Hamburger /></div>
    </nav>)
}

export default Navbar;