import Button from "../Components/Button.jsx";
import {useState} from "react";
import {arrowRight} from "../assets/icons/index.js";
import {statistics, shoes} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../Components/ShoeCard.jsx";

const Hero = () => {

    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

    return (
        <section
            id='Home'
            className='w-full flex xl:flex-row
            flex-col justify-center min-h-screen
            gap-10 max-container'
        >
            <div className='relative xl:w-2/5 flex flex-col
            justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className='font-montserrat text-xl text-coral-red'>Our Summer Collection</p>

                <h1 className='font-palanquin text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>The New Arrival</span>
                    <br/>
                    <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'
                >
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>
                <Button label='Shop now' iconURL={arrowRight}/>

                <div className='flex justify-start items-start flex-wrap
            w-full mt-20 gap-16'
                >
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                            <p className='font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="flex-1 flex justify-center relative items-center
                            xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImage}
                    alt="shoe collection"
                    width={610} height={500}
                    className="object-contain relative z-10 "
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShowImage=
                                    {(shoe) => setBigShoeImage(shoe)}
                                bigShowImage={bigShoeImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Hero
