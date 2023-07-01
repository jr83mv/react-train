import { Spiral as Hamburger } from 'hamburger-react'
function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-24">
      <a href="#" className="flex items-center justify-center gap-3">
        <img src="./Icon.png"></img>
        <img src="./Positivus.png" alt="" />
      </a>
      <div className="">
        <ul className="flex flex-row items-center justify-center gap-10">
          <li className=""><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact</a></li>
          <button className='flex items-start gap-2.5 px-9 rounded-2xl border-2 border-black py-5'>request demo</button>
        </ul>
      </div>
      <div className='hidden'><Hamburger /></div>
      

    </nav>)
}

export default Navbar;