function Cards(props: any) {
    return (
        <div className={`p-[50px] ${props.data.bgColor} rounded-[45px] shadow border border-zinc-900 justify-between items-center gap-[77px] flex`} style={{ flex: 1 }}>
            <div className=" flex-col justify-center items-start gap-[93px] inline-flex">
                <div className=" flex-col justify-start items-start flex">
                    <div className={`px-[6px] ${props.data.titleBgColor} rounded-md flex-col justify-start items-start gap-2.5 flex`}>
                        <div className=" text-black text-[30px] font-medium">{props.data.title}</div>
                    </div>
                    <div className={`px-[7px] ${props.data.titleBgColor} rounded-md flex-col justify-start items-start gap-2.5 flex`}>
                        <div className=" text-black text-[30px] font-medium">{props.data.subtitle}</div>
                    </div>
                </div>
                <div className=" justify-start items-center gap-[15px] inline-flex">
                    <div className=" w-[41px] h-[41px] relative">
                        <img src={props.data.arrowIconUrl} alt="" />
                    </div>
                    <div className={` ${props.data.textColor} text-[20px] font-normal leading-7`}>Learn more</div>
                </div>
            </div>
            <div className="pt-0.5 pb-[1.95px] justify-center items-center flex">
                <img className=" w-[210px] h-[166.05px]" src={props.data.imageUrl} />
            </div>
        </div>)
}
export default Cards;