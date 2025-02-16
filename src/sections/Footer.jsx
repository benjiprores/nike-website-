import {footerLogo} from "../assets/images/index.js";
import {footerLinks, socialMedia} from "../constants/index.js";
import {copyrightSign} from "../assets/icons/index.js";

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
                    <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
                        Get shoes ready for the new term at your nearest nike sthose
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((social) => (
                            <a href="/" key={social.src}
                               className="flex justify-center items-center w-10 h-10 rounded-full bg-white cursor-pointer">

                                <img src={social.src}
                                     alt={social.alt}/>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className="text-white font-montserrat leading-normal text-2xl font-medium mb-6">{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name}
                                        className="mt-3 font-montserrat text-white-400 text-base leading-normal hover:text-slate-gray">
                                        <a href="">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between text-white-400 max-sm:flex-col max-sm:items-center mt-24">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign}
                         alt="Copyright"
                         width={20}
                         height={20}
                         className="rounded-full m-0"
                    />

                    <p>Copyright. All rights reserved</p>
                </div>

                <p className="font-montserrat cursor-pointer">Terms and Condition</p>
            </div>
        </footer>
    )
}
export default Footer
