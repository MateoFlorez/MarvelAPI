import "../components.css"
import marvel from "../assets/marvel.png";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost, FaTumblr, FaPinterest } from "react-icons/fa";


export function Footer() {
  return (
    <div className="bg-stone-900 w-full flex flex-col 2xl:flex-row pt-16 gap-10 justify-between max-w-screen-md:px-28 lg:px-40 sm:px-10 py-28 h-fit">
      <div className="grid grid-cols-3 gap-3">
        <NavLink to="/" className="w-28 h-32">
          <img src={marvel} alt=""></img>
        </NavLink>
        <nav className="w-32">
            <ul className="font-bold text-white text-sm space-y-3">
                <li>ABOUT MARVEL</li>
                <li>HELP/FAQS</li>
                <li>CAREERS</li>
                <li>INTERNSHIPS</li>
            </ul>
        </nav>
        <nav className="w-32">
            <ul className="text-white text-sm space-y-3">
                <li>ADVERTISING</li>
                <li>DISNEY+</li>
                <li>MARVELHQ.COM</li>
                <li>REDEEM DIGITAL COMICS</li>
            </ul>
        </nav>
      </div>
      <hr></hr>
      <nav>
        <div className="md:space-y-7 flex">
            <a href="https://www.marvel.com/insider?cid=Dcom_navigation_20200929_insider_footer" className="flex gap-6 items-center">
                <div className="w-16">
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="" />
                </div>
                <div className="text-white text-sm">
                    <h4 className="font-bold">MARVEL INSIDER</h4>
                    <p className="text-sm text-gray-500">Get Rewarded for Being a Marvel Fan</p>
                </div>
            </a>
            <a href="https://www.marvel.com/unlimited?cid=dcom_navigation_20220712_unlimited_footer" className="flex gap-6 items-center">
                <div className="w-16">
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png" alt="" />
                </div>
                <div className="text-white text-sm">
                    <h4 className="font-bold">MARVEL UNLIMITED</h4>
                    <p className="text-sm text-gray-500">Access Over 30,000+ Digital Comics</p>
                </div>
            </a>
        </div>
      </nav>
      <hr></hr>
      <nav className="box-border space-y-6">
        <h4 className="text-white font-bold text-sm">FOLLOW MARVEL</h4>
        <ul className="flex justify-between 2xl:justify-start md:gap-x-8 md:gap-y-3 2xl:w-52 2xl:flex-wrap">
            <li><FaFacebookSquare className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500 transition-all ease-in duration-500"/></li>
            <li><FaTwitter className="text-gray-400 text-2xl cursor-pointer hover:text-cyan-500 transition-all ease-in duration-500"/></li>
            <li><FaInstagram className="text-gray-400 text-2xl cursor-pointer hover:text-orange-400 transition-all ease-in duration-500"/></li>
            <li><FaTumblr className="text-gray-400 text-2xl cursor-pointer hover:text-white transition-all ease-in duration-500"/></li>
            <li><FaYoutube className="text-gray-400 text-2xl cursor-pointer hover:text-red-600 transition-all ease-in duration-500"/></li>
            <li><FaSnapchatGhost className="text-gray-400 text-2xl cursor-pointer hover:text-yellow-300 transition-all ease-in duration-500"/></li>
            <li><FaPinterest className="text-gray-400 text-2xl cursor-pointer hover:text-red-600 transition-all ease-in duration-500"/></li>
        </ul>
      </nav>
      <hr></hr>
    </div>
  );
}
