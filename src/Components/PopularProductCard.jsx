import {star} from "../assets/icons/index.js";

const PopularProductCard = ({imgURL, name, price}) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280x]"/>
            <div className="mt-8 justify-start gap-2.5">
                <img src={star} alt="Rating" width={24} height={24}/>
                <p className="font-montserrat leadiing-normal text-xl text-slate-gray">4.5</p>
                <h3 className="mt-2 text-lg leading-normal font-palanquin font-semibold">{name}</h3>
                <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">{price}</p>
            </div>
        </div>


    )
}
export default PopularProductCard
