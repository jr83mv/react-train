function Team(props: any) {
    return (
        <div className="w-[387px] px-[35px] h-[331px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-7 flex">
                    <div className="self-stretch justify-start items-end inline-flex gap-[20px]">
                        <div className="grow shrink-0 basis-0 h-[102.82px] pr-[76px] items-end gap-5 flex">
                        <div className="w-[102.82px] h-[102.82px] relative">
                            <div className="w-[97.82px] h-[97.82px] left-0 top-0 absolute">
                            <img src={props.data.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="w-[183px] h-[49px] relative">
                        <div className="left-0 top-0 absolute text-black text-[20px] font-medium">{props.data.name}</div>
                            <div className="left-0 top-[26px] absolute text-black text-[18px] font-normal">{props.data.position}</div>
                        </div>
                        <div className="w-[34px] h-[34px] left-0 top-0 relative">
                        <img src="./Social icon.svg" className="absolute -left-[40px] -top-[70px]" alt="" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="w-[317px] h-[0px] border border-black"></div>
                    <div className="w-[317px] text-black text-[18px] font-normal text-start">{props.data.about}</div>                    </div>
        </div>
        
    )
}
export default Team;