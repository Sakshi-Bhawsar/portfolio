import { classnames } from "@/utils/style";
import Hero from "./Hero/Hero";
import { fixedMargin } from "@/constants/style";
import Service from "./Service/Service";
import MyWork from "./MyWork/MyWork";
import EducationExperience from "./EducationExperience/EducationExperience";
import Footer from "./Footer/Footer";
import ReadyToStart from "./ReadyToStart/ReadyToStart";

const LandingPage = () => {
    return (
        <div>
            <div className={classnames(fixedMargin)}>
                <Hero />
                <Service />
                <MyWork />
                <EducationExperience />
                 <ReadyToStart/>
            </div>
             
            <Footer />
        </div>

    )
}

export default LandingPage;