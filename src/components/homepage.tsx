import { logos } from "../data/logo";
import Navbar from "./navbar";
import Cards from './cards';
import { cardsData } from "../data/cardsData";

function HomePage(){
    return(
        <div className="w-[1440px] flex-col justify-start items-start gap-[70px] inline-flex" id="outer-container">
            <Navbar/>
            <div className="w-[1440px] h-[515px] px-[100px] justify-between items-start gap-[106px] inline-flex">
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
                <img src="./illustration.png" className="w-[600.46px] h-[515px] relative" alt="mike" />
            </div>
            <div className="w-[1440px] px-[100px] justify-between items-start gap-[106px] inline-flex">
                {logos.map((logo:any) =>(
                        <img src={logo.url} alt={logo.name}  className="w-[104.11px] h-12 relative"/>)
                    )}
            </div>

            <div className="w-[1440px] bg-white flex-col flex justify-start items-start gap-[70px]">
                <div className="w-[1440px] px-[100px] left-0  justify-start items-start gap-10 inline-flex">
                    <div className="flex-col justify-start items-start flex">
                        <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-black text-[30px] font-medium">Services</div>
                        </div>
                    </div>
                    <div className="w-[580px] text-black text-[18px] font-normal text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</div>
                </div>


                <div className="CardsSection w-[1440px] px-[100px] justify-start items-start gap-10 inline-flex flex-wrap">

                    {cardsData.map((cardData:any)=>(
                        <Cards data={ cardData }/>
                    ))}
                
                    
                </div>

            </div>

            <div className="Cta w-[1440px] h-[454px] px-[100px] justify-start items-center inline-flex">
                <div className=" w-[1240px] h-[347px] px-[60px] bg-zinc-100 rounded-[45px] justify-start items-center gap-[175px] flex">
                    <div className=" flex-col justify-start items-start gap-[26px] inline-flex">
                        <div className=" w-[500px] text-black text-[30px] font-medium text-start">Let’s make things happen</div>
                        <div className="w-[500px] text-black text-[18px] font-normal text-start">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
                        <div className=" px-[35px] py-5 bg-zinc-900 rounded-2xl justify-start items-start gap-2.5 inline-flex">
                            <div className=" text-center text-white text-[20px] font-normal leading-7 text-start">Get your free proposal</div>
                        </div>
                    </div>
                    <div className=" w-[499px] justify-start items-center inline-flex h-[394.27px]">
                        <img src="./Frame 19.png" className="h-[394.27px]" alt="" />
                    </div>
                </div>
            </div>

            <div className=" w-[1440px] h-[51px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                    <div className=" px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className=" text-black text-[40px] font-medium">Case Studies</div>
                    </div>
                </div>
                <div className="w-[580px] text-black text-[18px] font-normal text-start">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</div>
            </div>

            <div className=" w-[1434px] h-[326px] px-[100px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className=" px-[60px] py-[70px] bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex">
                    <div className=" flex-col justify-start items-start gap-5 inline-flex">
                    <div className="w-[286px] text-white text-[18px] font-normal text-start">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</div>
                    <div className=" justify-start items-center gap-[15px] inline-flex">
                        <div className=" text-lime-300 text-[20px] font-normal leading-7">Learn more</div>
                    </div>
                    </div>
                    <div className=" w-[1px] h-[186px] origin-top-left border border-white"></div>
                    <div className=" flex-col justify-start items-start gap-5 inline-flex">
                    <div className="w-[286px] text-white text-[18px] font-normal text-start">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</div>
                    <div className=" justify-start items-center gap-[15px] inline-flex">
                        <div className=" text-lime-300 text-[20px] font-normal leading-7">Learn more</div>
                    </div>
                    </div>
                    <div className=" w-[1px] h-[186px] origin-top-left border border-white"></div>
                    <div className=" flex-col justify-start items-start gap-5 inline-flex">
                    <div className="w-[286px] text-white text-[18px] font-normal text-start">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</div>
                    <div className=" justify-start items-center gap-[15px] inline-flex">
                        <div className=" text-lime-300 text-[20px] font-normal leading-7">Learn more</div>
                    </div>
                    </div>
                </div>
            </div>

            <div className=" w-[1440px] h-[51px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                    <div className=" px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className=" text-black text-[40px] font-medium">Our Working Process </div>
                    </div>
                </div>
                <div className=" w-[292px] text-black text-[18px] font-normal text-start">Step-by-Step Guide to Achieving Your Business Goals</div>
            </div>

            <div className=" w-[1434px] h-[1224px] px-[100px] flex-col justify-start items-start gap-[30px] inline-flex">
                <div className=" h-[279px] px-[60px] py-[41px] bg-lime-300 rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-[30px] flex">
                    <div className=" w-[1117px] justify-between items-center gap-[352px] inline-flex">
                    <div className=" justify-start items-center gap-[25px] flex">
                        <div className=" text-black text-[60px] font-medium">01</div>
                        <div className=" w-[612px] text-black text-[30px] font-medium text-start">Consultation</div>
                    </div>
                    <div className=" w-[58px] h-[58px] relative">
                    <img src="./Plus icon.svg" alt="" />
                    </div>
                    </div>
                    <div className="Line25 w-[1114px] h-[0px] border border-black"></div>
                    <div className=" w-[1114px] h-[60px] text-black text-[18px] font-normal text-start">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</div>
                </div>
                <div className="Card h-[159px] px-[60px] py-[41px] bg-zinc-100 rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 flex">
                    <div className=" w-[1117px] justify-between items-center gap-[352px] inline-flex">
                    <div className=" justify-start items-center gap-[25px] flex">
                        <div className=" text-black text-[60px] font-medium">02</div>
                        <div className=" w-[612px] text-black text-[30px] font-medium text-start">Research and Strategy Development</div>
                    </div>
                    <div className=" w-[58px] h-[58px] relative">
                        <img src="./Plus icon (1).svg" alt="" />
                    </div>
                    </div>
                </div>
                <div className=" h-[159px] px-[60px] py-[41px] bg-zinc-100 rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 flex">
                    <div className=" w-[1117px] justify-between items-center gap-[352px] inline-flex">
                    <div className=" justify-start items-center gap-[25px] flex">
                        <div className=" text-black text-[60px] font-medium">03</div>
                        <div className=" w-[612px] text-black text-[30px] font-medium text-start">Implementation</div>
                    </div>
                    <div className=" w-[58px] h-[58px] relative">
                        <img src="./Plus icon (1).svg" alt="" />
                    </div>
                    </div>
                </div>
                <div className=" h-[159px] px-[60px] py-[41px] bg-zinc-100 rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 flex">
                    <div className=" w-[1117px] justify-between items-center gap-[352px] inline-flex">
                    <div className=" justify-start items-center gap-[25px] flex">
                        <div className=" text-black text-[60px] font-medium">04</div>
                        <div className=" w-[612px] text-black text-[30px] font-medium text-start">Monitoring and Optimization</div>
                    </div>
                    <div className=" w-[58px] h-[58px] relative">
                        <img src="./Plus icon (1).svg" alt="" />
                    </div>
                    </div>
                </div>
                <div className=" h-[159px] px-[60px] py-[41px] bg-zinc-100 rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 flex">
                    <div className=" w-[1117px] justify-between items-center gap-[352px] inline-flex">
                    <div className=" justify-start items-center gap-[25px] flex">
                        <div className=" text-black text-[60px] font-medium">05</div>
                        <div className=" w-[612px] text-black text-[30px] font-medium text-start">Reporting and Communication</div>
                    </div>
                    <div className=" w-[58px] h-[58px] relative">
                        <img src="./Plus icon (1).svg" alt="" />                    
                    </div>
                    </div>
                </div>
                <div className=" h-[159px] px-[60px] py-[41px] bg-zinc-100 rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 flex">
                    <div className=" w-[1117px] justify-between items-center gap-[352px] inline-flex">
                    <div className=" justify-start items-center gap-[25px] flex">
                        <div className=" text-black text-[60px] font-medium">06</div>
                        <div className=" w-[612px] text-zinc-900 text-[30px] font-medium text-start">Continual Improvement</div>
                    </div>
                    <div className=" w-[58px] h-[58px] relative">
                        <img src="./Plus icon (1).svg" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            
            <div className=" w-[1440px] h-[51px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className=" flex-col justify-start items-start inline-flex">
                    <div className=" px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                        <div className=" text-black text-[40px] font-medium">Team</div>
                    </div>
                </div>
                <div className=" w-[473px] text-black text-[18px] font-normal text-start">Meet the skilled and experienced team behind our successful digital marketing strategies</div>
            </div>

            <div className="w-[1441px] h-[331px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className="w-[387px] h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow  border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-[102.82px] pr-[76px] justify-start items-end gap-5 flex">
                        <div className="w-[105.65px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src="./alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[148px] h-[49px] relative">
                            <div className="left-0 top-0 absolute text-black text-[20px] font-medium">John Smith</div>
                            <div className="left-0 top-[26px] absolute text-black text-[18px] font-normal">CEO and Founder</div>
                        </div>
                        <div className="w-[34px] h-[34px] relative">
                        <img src="./Social icon.svg" className="absolute -left-[10px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</div>
                    </div>
                </div>
                <div className="w-[387px] px-[35px] h-[331px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-[102.82px] pr-[76px] justify-start items-end gap-5 flex">
                        <div className="w-[102.82px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src="./alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[194.18px] h-[49.18px] relative">
                            <div className="left-0 top-0 absolute text-black text-[20px] font-medium text-start">Jane Doe</div>
                            <div className="w-[194px] left-[0.18px] top-[26.18px] absolute text-black text-[18px] font-normal text-start">Director of Operations</div>
                        </div>
                        <div className="w-[34px] h-[34px] relative">
                        <img src="./Social icon.svg" className="absolute -left-[40px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">7+ years of experience in project management and team leadership. Strong organizational and communication skills</div>
                    </div>
                </div>
                <div className="w-[387px] px-[35px] h-[331px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-end inline-flex gap-[20px]">
                        <div className="grow shrink-0 basis-0 h-[102.82px] pr-[76px] items-end gap-5 flex">
                        <div className="w-[102.82px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src="./alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[183px] h-[49px] relative">
                            <div className="left-0 top-0 absolute text-black text-[20px] font-medium text-start">Michael Brown</div>
                            <div className="left-0 top-[26px] absolute text-black text-[18px] font-normal text-start">Senior SEO Specialist</div>
                        </div>
                        <div className="w-[34px] h-[34px] left-0 top-0 relative">
                        <img src="./Social icon.svg" className="absolute -left-[40px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</div>
                    </div>
                </div>
            </div>

            <div className="w-[1441px] h-[331px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className="w-[387px] h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow  border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-[102.82px] pr-[76px] justify-start items-end gap-5 flex">
                        <div className="w-[105.65px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src="./alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[148px] h-[49px] relative">
                            <div className="left-0 top-0 absolute text-black text-[20px] font-medium">Emily Johnson</div>
                            <div className="left-0 top-[26px] absolute text-black text-[18px] font-normal">PPC Manager</div>
                        </div>
                        <div className="w-[34px] h-[34px] relative">
                        <img src="./Social icon.svg" className="absolute -left-[10px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</div>
                    </div>
                </div>
                <div className="w-[387px] px-[35px] h-[331px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-[102.82px] pr-[76px] justify-start items-end gap-5 flex">
                        <div className="w-[102.82px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src="./alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[194.18px] h-[49.18px] relative">
                            <div className="left-0 top-0 absolute text-black text-[20px] font-medium text-start">Brian Williams</div>
                            <div className="w-[194px] left-[0.18px] top-[26.18px] absolute text-black text-[18px] font-normal text-start">Social Media Specialist</div>
                        </div>
                        <div className="w-[34px] h-[34px] relative">
                        <img src="./Social icon.svg" className="absolute -left-[40px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</div>
                    </div>
                </div>
                <div className="w-[387px] px-[35px] h-[331px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-end inline-flex gap-[20px]">
                        <div className="grow shrink-0 basis-0 h-[102.82px] pr-[76px] items-end gap-5 flex">
                        <div className="w-[102.82px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src="./alexandra-gorn-smuS_jUZa9I-unsplash 1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[183px] h-[49px] relative">
                            <div className="left-0 top-0 absolute text-black text-[20px] font-medium">Sarah Kim</div>
                            <div className="left-0 top-[26px] absolute text-black text-[18px] font-normal">Content Creator</div>
                        </div>
                        <div className="w-[34px] h-[34px] left-0 top-0 relative">
                        <img src="./Social icon.svg" className="absolute -left-[40px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries</div>
                    </div>
                </div>
            </div>

            <div className="w-[269px] h-[68px] px-[35px] py-5 bg-zinc-900 rounded-2xl justify-center self-end items-center gap-2.5 inline-flex mr-24">
                <div className="text-center text-white text-[20px] font-normal leading-7">See all team</div>
            </div>

            <div className="w-[1440px] h-[51px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-black text-[40px] font-medium">Testimonials</div>
                    </div>
                </div>
                <div className="w-[473px] text-black text-[18px] font-normal text-start">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</div>
            </div>
            

            <div className="w-[1440px] h-[51px] px-[100px] justify-start items-start gap-10 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="px-[7px] bg-lime-300 rounded-md flex-col justify-start items-start gap-2.5 flex">
                    <div className="text-black text-[40px] font-medium">Contact Us</div>
                    </div>
                </div>
                <div className="w-[323px] text-black text-[18px] font-normal text-start">Connect with Us: Let's Discuss Your Digital Marketing Needs</div>
            </div>

            <div className="w-[1240px] h-[773px] px-[100px] pt-[60px] ml-24 pb-20 bg-zinc-100 rounded-[45px] justify-start items-start gap-2.5 inline-flex">
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

            <div className="w-[1241px] h-[514px] px-[60px] pt-[55px] ml-24 pb-[50px] bg-zinc-900 rounded-tl-[45px] rounded-tr-[45px] flex-col justify-start items-start gap-[50px] inline-flex">
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
                    <div className="w-[1120px] h-[0px] border border-white"></div>
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