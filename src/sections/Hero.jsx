import Button from "../Components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {statistics} from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";

const Hero = () => {
    return (
        <section
            id='Home'
            className='w-full flex xl:flex-row
            flex-col justify-center min-h-screen
            gap-10 max-container
            border-2 border-red-500 p-2'
        >
            <div className='relative xl:w-2/5 flex flex-col
            justify-center items-start w-full max-xl:padding-x pt-28'>

                <p className='font-montserrat text-xl text-coral-red'
                >Our Summer Collection</p>
                <h1 className='font-poppins text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>The New Arrival</span>
                    <br/>
                    <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'
                >
                    Discover stylish Nike arrivals, quality comfort and innovation for your active life.
                </p>
                <Button label='Shop Now' iconURL={arrowRight}/>

                <div className='flex justify-start items-start flex-wrap
            w-full mt-20 gap-16'
                >
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className='text-2xl font-poppins font-bold'>{stat.value}</p>
                            <p className='font-poppins leading-7 text-slate-gray'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={bigShoe1}
                    alt="shoe collection"
                    width={610} height={500}
                    className="object-contain z-10 relative"
                />
            </div>
        </section>
    )
}
export default Hero
