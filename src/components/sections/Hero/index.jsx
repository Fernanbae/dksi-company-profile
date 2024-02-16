import imgHero from "../../../assets/img/achieved.png";

function HeroSection() {
    return (
        <section className="relative flex h-full w-full bg-green-400">
            <div className="absolute top-0 h-[80%] w-full overflow-hidden rounded-b-[75px] bg-gradient-to-b from-metallic-sunburst to-satin-sheen-gold">
                <div className="bg-hero-abstract relative flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat"></div>
            </div>
            <div className="max-container relative mx-auto flex max-w-[52rem] flex-col items-center gap-8 pt-16 text-center text-white">
                <h1 className="font-title text-5xl font-extrabold leading-tight sm:text-6xl sm:leading-tight">
                    Empowering Possibilities{" "}
                    <span className="text-yellow-100">
                        Unleashing Solutions
                    </span>
                </h1>
                <p className="text-xl">
                    Harness the power of cutting-edge ICT solutions to propel
                    your business forward and stay ahead in today&apos;s
                    competitive landscape.
                </p>
                <a
                    href="#discover"
                    className="group mx-auto mt-2.5 w-fit text-xl font-bold uppercase text-white/90"
                >
                    <p className="tracking-wider">Discover more about us</p>
                    <div className="transition group-hover:translate-y-1">
                        <i className="ri-arrow-down-s-line text-2xl"></i>
                    </div>
                </a>
                <a
                    href="https://soloaja.co/read/muhammad-yasin-pengusaha-muda-semarang-raih-anugerah-mitra-terbaik-diktiristek"
                    target="_blank"
                    className="w-full"
                >
                    <img
                        src={`${imgHero}`}
                        alt=""
                        className="w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
                    />
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
