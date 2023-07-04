

import { logos } from "../data/logo";
function Header(){
    return (<div>
        <div className=" px-[100px] justify-between items-start gap-[106px] inline-flex">
<div className="justify-between items-center gap-[35px] flex-col " id="inner-container">
    <div className="flex flex-col w-[531px]" id="header">
        <p className="text-6xl font-medium not-italic leading-normal text-start">Navigating the digital landscape for success</p>
    </div>
    <div className="flex flex-col w-[498px] text-xl font-medium text-start mt-[25px]" id="para">
    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
    
    </div>
    <div className="w-[264px] flex items-center gap-2.5 sm:gap-2 py-5 px-9 mt-[35px] rounded-2xl bg-black" id="booking-bt">
        <p className="text-white text-center text-xl font-normal leading-7 text-start">Book a consultation</p>
    </div>
</div>
<img src="./illustration.png" className=" relative" alt="mike" />
</div>
<div className=" px-[100px] justify-between items-start gap-[106px] inline-flex">
{logos.map((logo:any) =>(
        <img src={logo.url} alt={logo.name}  className="w-[104.11px] h-12 relative"/>)
    )}
</div>
        </div>
    )
}
export default Header