import Button from "../Components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoe8} from "../assets/images/index.js";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col ">
                <h2 className='font-palanquin text-4xl capatalize font-bold lg:max-w-lg'>
                    We provide You
                    <span className='text-coral-red'> Super</span>
                    <span className='text-coral-red'> Quality</span> Shoes
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'
                >
                    Embark on a shopping journey that redefines your experience with unbeatable deals.
                    From premier selections to incredible savings, we offer unparalleled
                    value that sets us apart.
                </p>

                <p className="mt-6 lg:max-w-lg info-text">
                    Navigate a realm of possibilities designed to fulfil your unique desires,
                    surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                </p>
                <a href="http://www.google.com" className=" mt-11">
                    <Button label='View Details'/>
                </a>
            </div>

            <div className="flex flex1 justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    width={570}
                    height={522}
                    className="object-contain"
                />

            </div>
        </section>
    )
}
export default SuperQuality
