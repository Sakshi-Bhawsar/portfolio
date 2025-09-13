import { classnames } from "@/utils/style";
import Hero from "./Hero/Hero";
import { fixedMargin } from "@/constants/style";
import Service from "./Service/Service";

const LandingPage = ()=>{
    return(
        <div className={classnames(fixedMargin)}>
            <Hero/>
            <Service/>
        </div>
    )
}

export default LandingPage;