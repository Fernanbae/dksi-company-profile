import HeroBackdrop from "./HeroBackdrop";
import ButtonDiscover from "./ButtonDiscover";
import HeroParagraph from "./HeroParagraph";
import HeroTagline from "./HeroTagline";
import HeroImage from "./HeroImage";

import imgHero from "../../../assets/img/achieved.png";

function HeroSection() {
    return (
        <section className="relative flex h-full w-full">
            <HeroBackdrop />
            <div className="max-container relative mx-auto flex max-w-[52rem] flex-col items-center gap-8 pt-16 text-center text-white">
                <HeroTagline
                    firstTagline="Empowering Possibilities"
                    secondTagline="Unleashing Solutions"
                />
                <HeroParagraph>
                    Harness the power of cutting-edge ICT solutions to propel
                    your business forward and stay ahead in today&apos;s
                    competitive landscape.
                </HeroParagraph>
                <ButtonDiscover>Discover more about us</ButtonDiscover>
                <HeroImage
                    href="https://soloaja.co/read/muhammad-yasin-pengusaha-muda-semarang-raih-anugerah-mitra-terbaik-diktiristek"
                    img={imgHero}
                />
            </div>
        </section>
    );
}

export default HeroSection;
