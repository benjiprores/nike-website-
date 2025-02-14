import {footerLogo} from "../assets/images/index.js";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap
            max-lg:flex-col"
            >
                <div className="flex flex-col items-start">
                    <a
                        href="/">
                        <img src={footerLogo}
                             alt="logo"
                             width={150}
                             height={46}
                        />
                    </a>
                    <p className="mt-6 font-montserrat leading-7 text-white-md
                    text-white-400 sm:max-w-sm"
                    >
                        Get shoes ready for the new term at your nearest nike sthose
                    </p>

                    <div className="flex items-center gap-5 mt-8">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
