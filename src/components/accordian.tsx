import { useState } from "react";

function Accordian(props:any){
  const [open, setOpen] = useState(false);
    const openAccordian = () => {
        setOpen(!open)
      }
    return (
        
        <div className={`px-[60px] py-[21px] ${open ?  "bg-lime-300":"bg-zinc-100"} rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5`}>
            <div className="  justify-between items-center gap-[352px] inline-flex">
                <div className=" justify-start items-center gap-[25px] flex">
                    <div className=" text-black text-[60px] font-medium">{props.data.sno}</div>
                    <div className=" w-[612px] text-black text-[30px] font-medium text-start">{props.data.title}</div>
                </div>
                <div className=" w-[58px] h-[58px] relative">
                    <img src=  {open ?  "./plus icon.svg":"./Plus icon (1).svg" } alt="" onClick={openAccordian}/>
                </div>
            </div>

            <div className={`w-[100%] h-[0px] border border-black ${open ?  "block":"hidden"}`}></div>
            <div className={` h-[60px] text-black text-[18px] font-normal text-start ${open ?  "block":"hidden"}`}>{props.data.content}</div>
        </div>
    )
}
export default Accordian;