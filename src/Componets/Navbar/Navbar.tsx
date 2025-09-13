import { fixedMargin } from "@/constants/style";
import { classnames } from "@/utils/style";
import Button from "../Button";
import './style/style.css'
import { bgPrimary, lightDarkText } from "@/constants/color";

const Navbar = () => {
    return (
        <div className={classnames("flixed text-white shadow py-2")} style={{ boxShadow: "0 2px 10px #26a0da" }}>
            <div className={classnames(fixedMargin, "flex justify-between  items-center")}>
                <h1 className={classnames("flex flex-col gradient-text font-serif font-bold text-lg text-white")}>
                    SAKSHI
                    <span className="gradient-subtext">- Crafting Digital Magic</span>
                </h1>
                <nav className="flex py-3 px-6 rounded-full gap-6 items-center text-sm shadow cursor-pointer transition-all
                 duration-500 ease-in-out hover:shadow-2xl hover:bg-[#212A37] hover:scale-105">
                    <p className="flex items-center hover:bg-[#171f29] py-1 px-4 rounded-full  hover:border-b-[#26a0da] hover:border-b-2 ">🏠 HOME</p>
                    <p className="flex items-center hover:bg-[#171f29] py-1 px-4 rounded-full  hover:border-b-[#26a0da] hover:border-b-2 ">📝 RESUME</p>
                    <p className="flex items-center hover:bg-[#171f29] py-1 px-4 rounded-full  hover:border-b-[#26a0da] hover:border-b-2 ">💻 PROJECT</p>
                    <p className="flex items-center hover:bg-[#171f29] py-1 px-4 rounded-full  hover:border-b-[#26a0da] hover:border-b-2 ">✉️ CONTACT</p>
                </nav>
            </div>

        </div>
    )
}

export default Navbar;