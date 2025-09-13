import { classnames } from "@/utils/style";
import Hero from "./Hero/Hero";
import { fixedMargin } from "@/constants/style";
import Service from "./Service/Service";
import MyWork from "./MyWork/MyWork";

const LandingPage = ()=>{
    return(
        <div className={classnames(fixedMargin)}>
            <Hero/>
            <Service/>
            <MyWork/>
        </div>
    )
}

export default LandingPage;