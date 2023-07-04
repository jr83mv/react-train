import Cards from './cards';
import { cardsData } from "../data/cardsData";
function Services(){
    return (<div>
        <div className=" bg-white flex-col flex justify-start items-start gap-[70px]">
                <div className=" px-[100px] left-0  justify-start items-start gap-10 inline-flex">
                    <div className="flex-col justify-start items-start flex">
                        <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-black text-[30px] font-medium">Services</div>
                        </div>
                    </div>
                    <div className="text-black text-[18px] font-normal text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
                </div>


                <div className=" px-[100px] justify-start items-start gap-10 inline-flex flex-wrap">

                    {cardsData.map((cardData:any)=>(
                        <Cards data={ cardData }/>
                    ))}
                
                    
                </div>

            </div>

            <div className="  px-[100px] justify-start items-center inline-flex">
                <div className=" px-[60px] bg-zinc-100 rounded-[45px] justify-start items-center gap-[175px] flex">
                    <div className=" flex-col justify-start items-start gap-[26px] inline-flex">
                        <div className="  text-black text-[30px] font-medium text-start">Let’s make things happen</div>
                        <div className=" text-black text-[18px] font-normal text-start">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
                        <div className=" px-[35px] py-5 bg-zinc-900 rounded-2xl justify-start items-start gap-2.5 inline-flex">
                            <div className=" text-center text-white text-[20px] font-normal leading-7 text-start">Get your free proposal</div>
                        </div>
                    </div>
                    <div className="justify-start items-center inline-flex h-[394.27px]">
                        <img src="./Frame 19.png" className="h-[394.27px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;