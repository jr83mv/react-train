import Navbar from "./navbar";
import Accordion from "./accordian";
import { accordianData } from "../data/accordianData";
import Team from "./teams";
import { teamsData } from "../data/teamsData";
import { logos } from "../data/logo";
import { cardsData } from "../data/cardsData";
import Cards from "./cards";
import Header from "./header";
import Services from "./service";

function HomePage(){
    return(
        <div className=" flex-col justify-start items-start gap-[70px] inline-flex" id="outer-container">
            <Navbar/>
           <Header/>

            <Services/>

            <div className="  px-[100px] justify-start items-start gap-10 inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                    <div className=" px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className=" text-black text-[40px] font-medium">Case Studies</div>
                    </div>
                </div>
                <div className=" text-black text-[18px] font-normal text-start">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</div>
            </div>

            <div className="  px-[100px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className=" px-[60px] py-[70px] bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex">
                    <div className=" flex-col justify-start items-start gap-5 inline-flex">
                    <div className=" text-white text-[18px] font-normal text-start">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div>
                    <div className=" justify-start items-center gap-[15px] inline-flex">
                        <div className=" text-lime-300 text-[20px] font-normal leading-7">Learn more</div>
                    </div>
                    </div>
                    <div className=" w-[1px] h-[186px] origin-top-left border border-white"></div>
                    <div className=" flex-col justify-start items-start gap-5 inline-flex">
                    <div className=" text-white text-[18px] font-normal text-start">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div>
                    <div className=" justify-start items-center gap-[15px] inline-flex">
                        <div className=" text-lime-300 text-[20px] font-normal leading-7">Learn more</div>
                    </div>
                    </div>
                    <div className=" w-[1px] h-[186px] origin-top-left border border-white"></div>
                    <div className=" flex-col justify-start items-start gap-5 inline-flex">
                    <div className=" text-white text-[18px] font-normal text-start">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div>
                    <div className=" justify-start items-center gap-[15px] inline-flex">
                        <div className=" text-lime-300 text-[20px] font-normal leading-7">Learn more</div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="  px-[100px] justify-start items-start gap-10 inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                    <div className=" px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className=" text-black text-[40px] font-medium">Our Working Process </div>
                    </div>
                </div>
                <div className="  text-black text-[18px] font-normal text-start">Step-by-Step Guide to Achieving Your Business Goals</div>
            </div>

            <div className=" px-[100px] flex-col justify-start items-start gap-[30px] inline-flex">
            {accordianData.map((accData:any)=>(
                    <Accordion data={accData} />
                ))}
            </div>
            
            <div className=" px-[100px] justify-start items-start gap-10 inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                    <div className=" px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                        <div className=" text-black text-[40px] font-medium">Team</div>
                    </div>
                </div>
                <div className=" text-black text-[18px] font-normal text-start">Meet the skilled and experienced team behind our successful digital marketing strategies</div>
            </div>

            

            <div className=" px-[100px] justify-start items-start gap-10 inline-flex flex-wrap">
            {teamsData.map((teamData)=>(
                    <Team data={teamData}/>
                ))} 
            </div>

            <div className="w-[269px] h-[68px] px-[35px] py-5 bg-zinc-900 rounded-2xl justify-center self-end items-center gap-2.5 inline-flex mr-24">
                <div className="text-center text-white text-[20px] font-normal leading-7">See all team</div>
            </div>

            <div className="  px-[100px] justify-start items-start gap-10 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-black text-[40px] font-medium">Testimonials</div>
                    </div>
                </div>
                <div className=" text-black text-[18px] font-normal text-start">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>
            </div>
            

            <div className=" px-[100px] justify-start items-start gap-10 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-black text-[40px] font-medium">Contact Us</div>
                    </div>
                </div>
                <div className="w-[323px] text-black text-[18px] font-normal text-start">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>
            </div>

            <div className=" px-[100px] pt-[60px] ml-24 pb-20 bg-zinc-100 rounded-[45px] justify-start items-start gap-2.5 inline-flex">
                <div className="flex-col justify-start items-start gap-10 inline-flex">
                <div className="justify-start items-start gap-[45px] inline-flex">
                    <div className="justify-start items-start gap-[15px] inline-flex">
                        <div className="w-7 h-7 relative">
                            <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-[29px] border border border border border-black" />
                            <input type="checkbox" className="w-4 h-4 left-[6px] top-[6px] absolute bg-lime-300 rounded-full invisible" />
                        </div>
                        <div className="text-black text-[18px] font-normal">Say Hi</div>
                    </div>
                    <div className="justify-start items-start gap-[15px] inline-flex">
                        <div className="w-7 h-7 relative">
                            <div className="w-7 h-7 left-0 top-0 absolute bg-white rounded-[29px] border border border border border-black" />
                            <input type="checkbox" className="w-4 h-4 left-[6px] top-[6px] absolute bg-lime-300 rounded-full invisible" />
                        </div>
                        <div className="text-black text-[18px] font-normal">Get a Quote</div>
                    </div>
                </div>
                    
                    <div className="flex-col justify-start items-start gap-[25px] flex">
                    <div className="flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-black text-[16px] font-normal leading-7">Name</div>
                        <input type="text" className="text-zinc-500 text-[18px] font-normal w-[556px] px-[30px] py-[18px] bg-white rounded-2xl border border-black justify-start items-start gap-2.5 inline-flex" placeholder="Name"/>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-black text-[16px] font-normal leading-7">Email*</div>
                        <input type="text" className="text-zinc-500 text-[18px] font-normal w-[556px] px-[30px] py-[18px] bg-white rounded-2xl border border-black justify-start items-start gap-2.5 inline-flex" placeholder="Email"/>
                    </div>
                    <div className="w-[556px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-black text-[16px] font-normal leading-7">Message*</div>
                        <input type="text" className="w-[556px] h-[190px] px-[30px] py-[18px] bg-white rounded-2xl border border-black justify-start items-start gap-2.5" placeholder="Message"/>
                    </div>
                    </div>
                    <div className="w-[556px] px-[35px] py-5 bg-zinc-900 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-[20px] font-normal leading-7">Send Message</div>
                    </div>
                </div>
            </div>

            <div className=" h-[514px] px-[60px] pt-[55px] ml-24 pb-[50px] bg-zinc-900 rounded-tl-[45px] rounded-tr-[45px] flex-col justify-start items-start gap-[50px] inline-flex">
                <div className="flex-col justify-start items-start gap-[66px] flex">
                    <div className="w-[1121px] justify-start items-center gap-[155px] inline-flex">
                    <div className="w-[180px] h-[29px] justify-center items-center gap-[10.59px] flex">
                        <img src="./Logo.png" alt="" />
                    </div>
                    <div className="justify-start items-start gap-10 flex">
                        <div className="text-white text-[18px] font-normal underline">About us</div>
                        <div className="text-white text-[18px] font-normal underline">Services</div>
                        <div className="text-white text-[18px] font-normal underline">Use Cases</div>
                        <div className="text-white text-[18px] font-normal underline">Pricing</div>
                        <div className="text-white text-[18px] font-normal underline">Blog</div>
                    </div>
                    <div className="justify-start items-start gap-5 flex">
                        <div className="w-[30px] h-[30px] relative">
                            <img src="./Social icon 2.svg" alt="" />
                        </div>
                        <div className="w-[30px] h-[30px] relative">
                            <img src="./Social icon (1).svg" alt="" />
                        </div>
                        <div className="w-[30px] h-[30px] relative">
                            <img src="./Social icon (2).svg" alt="" />
                        </div>
                    </div>
                    </div>
                    <div className="justify-start items-start gap-[154px] inline-flex">
                    <div className="flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="flex-col justify-start items-start flex">
                        <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-black text-[20px] font-medium">Contact us:</div>
                        </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="text-white text-[18px] font-normal text-start">Email: info@positivus.com</div>
                        <div className="text-white text-[18px] font-normal text-start">Phone: 555-567-8901</div>
                        <div className="text-white text-[18px] font-normal text-start">Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</div>
                        </div>
                    </div>
                    <div className="px-10 py-[58px] bg-zinc-800 rounded-2xl justify-start items-start gap-5 flex">
                        <div className="h-[67px] px-[35px] py-[22px] rounded-2xl border border-white justify-start items-start gap-2.5 flex">
                        <div className="text-white w-[200px] text-[18px] font-normal text-start">Email</div>
                        </div>
                        <div className="px-[35px] py-5  bg-lime-300 rounded-2xl justify-start items-start gap-2.5 flex">
                        <div className="text-center text-black w-[200px] text-[20px] font-normal leading-7">Subscribe to news</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex-col justify-start items-start gap-[50px] flex">
                    <div className=" h-[0px] border border-white"></div>
                    <div className="justify-start items-start gap-10 inline-flex">
                    <div className="text-white text-[18px] font-normal leading-7">© 2023 Positivus. All Rights Reserved.</div>
                    <div className="text-white text-[18px] font-normal underline leading-7">Privacy Policy</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomePage;