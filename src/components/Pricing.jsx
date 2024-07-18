import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden" >
        <div className="container relative z-2" >
            <div className=" hidden relative justify-center mb-[6.2rem] lg:flex " >
                <img src={smallSphere}
                width={255} height={255} 
                className="relative z-1"
                alt="Spher" />
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 pointer-events-none" > 
                    <img
                    className="w-full"
                    src={stars} alt="stars" width={950} height={400} />
                </div>
            </div>
            <Heading
            tag="Get started with Brainwave"
            title="Play once, use forever"
            />
            <div className="relative" >
                <PricingList/>
                <LeftLine/>
                <RightLine/>
            </div>
            <div className="flex justify-center mt-10" >
                <a
                className=" text-xs font-code font-bold tracking-wider uppercase border-b "
                href="/Pricing"> See the full details </a>
            </div>
        </div>
        
    </Section>
  )
}

export default Pricing