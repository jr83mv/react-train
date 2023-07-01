import { logos } from "../data/logo";
function HomePage(){
    return(
        <div className="flex justify-between  w-[1440px] h-[8356px] items-start w-screen px-24" id="outer-container">
            <div className="flex flex-col items-start gap-8 " id="inner-container">
                <div className="flex flex-col w-[531px]" id="header">
                    <p className="text-6xl font-medium not-italic leading-normal ">Navigating the digital landscape for success</p>
                </div>
                <div className="flex flex-col w-[498px] text-xl font-medium" id="para"><p>
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-2 py-5 px-9 rounded-2xl bg-black" id="booking-bt">
                    <p className="text-white text-center text-xl font-normal leading-7">Book a consultation</p>
                </div>
            </div>
            <img src="./illustration.png" alt="mike" />
            <div className="flex w-[1440px] px-24 justify-between items-start">
                {logos.map((logo:any) =>(
                        <img src={logo.url} alt={logo.name}  className="w-[126px] h-[48px] shrink-0"/>)
                    )   }
            </div>
        </div>
    )
}

export default HomePage;