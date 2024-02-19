import PropTypes from "prop-types";
import SectionHeader from "../../ui/Section/SectionHeader";
import CompanyTimeline from "./CompanyTimeline";

import { SECTION_COMPANY as SectionContent } from "../../../constants/AppContent.js";

function CompanySection() {
    const loop = new Array(5);
    console.info(loop.length);
    return (
        <section className="py-16 sm:py-32" id="company">
            <div className="max-container overflow-hidden">
                <SectionHeader
                    title="Empowering %Growth Together%"
                    heading="From Humble Beginnings to Shared Success Stories"
                    className="max-w-5xl"
                >
                    At &apos;Empowering Growth Together&apos;, we take pride in
                    our journey as a company. Starting from humble beginnings,
                    we have grown steadily, building strong partnerships and
                    achieving remarkable milestones along the way.
                </SectionHeader>
                <div className="relative flex flex-col items-center">
                    <CompanyTimeline
                        TimelineContent={SectionContent.timeline}
                    />
                </div>
                {/* <div className="py-8">
                    <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-2">
                        <ul className="relative flex flex-col gap-8 px-0 sm:px-8">
                            <li className="flex flex-col gap-6">
                                <div className="card-corporate">
                                    <img
                                        src="./img/about/coorporate-brief/step-1.svg"
                                        alt="House"
                                        className="h-16 lg:h-12"
                                    />
                                    <div className="text-primary-blue flex flex-col gap-2.5 leading-relaxed">
                                        <h4 className="font-medium">
                                            Established in 2019, we embarked on
                                            our journey.
                                        </h4>
                                        <p className="leading-loose opacity-75">
                                            Our journey started in 2019 with
                                            aspirations for industry success.
                                            Committed to excellence and growth
                                            for our valued clients.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-primary-blue group flex h-0.5 w-64 items-center justify-between opacity-10">
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                        <span className="flex aspect-square w-14 items-center justify-center bg-white p-2 text-xl font-bold">
                                            <span>01</span>
                                        </span>
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col gap-6">
                                <div className="card-corporate">
                                    <img
                                        src="./img/about/coorporate-brief/step-2.svg"
                                        alt="House"
                                        className="h-16 lg:h-12"
                                    />
                                    <div className="text-primary-blue flex flex-col gap-2.5 leading-relaxed">
                                        <h4 className="font-medium">
                                            Providing PC Notebooks through
                                            E-Katalog LKPP.
                                        </h4>
                                        <p className="leading-loose opacity-75">
                                            We started by offering PC notebooks
                                            through
                                            <a
                                                href="#"
                                                className="text-blue-800 underline"
                                            >
                                                E-Katalog LKPP
                                            </a>
                                            , marking the first step towards
                                            providing innovative solutions to
                                            our customers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-primary-blue group flex h-0.5 w-64 items-center justify-between opacity-10">
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                        <span className="flex aspect-square w-14 items-center justify-center bg-white p-2 text-xl font-bold">
                                            <span>02</span>
                                        </span>
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col gap-6">
                                <div className="card-corporate">
                                    <img
                                        src="./img/about/coorporate-brief/step-3.svg"
                                        alt="House"
                                        className="h-16 lg:h-12"
                                    />
                                    <div className="text-primary-blue flex flex-col gap-2.5 leading-relaxed">
                                        <h4 className="font-medium">
                                            Expanded our services to include
                                            cutting-edge CCTV Security Systems.
                                        </h4>
                                        <p className="leading-loose opacity-75">
                                            As we evolved, our commitment to
                                            safety and security led us to offer
                                            state-of-the-art CCTV Security
                                            Systems..
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-primary-blue group flex h-0.5 w-64 items-center justify-between opacity-10">
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                        <span className="flex aspect-square w-14 items-center justify-center bg-white p-2 text-xl font-bold">
                                            <span>03</span>
                                        </span>
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="relative mt-8 flex flex-col gap-8 px-0 sm:mt-0 sm:px-8">
                            <li className="flex flex-col gap-6">
                                <div className="card-corporate">
                                    <img
                                        src="./img/about/coorporate-brief/step-4.svg"
                                        alt="House"
                                        className="h-16 lg:h-12"
                                    />
                                    <div className="text-primary-blue flex flex-col gap-2.5 leading-relaxed">
                                        <h4 className="font-medium">
                                            Our expertise extends to designing
                                            and building innovative
                                            applications.
                                        </h4>
                                        <p className="leading-loose opacity-75">
                                            Our expertise goes beyond
                                            boundaries, empowering businesses
                                            with futuristic solutions for the
                                            digital landscape.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-primary-blue group flex h-0.5 w-64 items-center justify-between opacity-10">
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                        <span className="flex aspect-square w-14 items-center justify-center bg-white p-2 text-xl font-bold">
                                            <span>04</span>
                                        </span>
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col gap-6">
                                <div className="card-corporate">
                                    <img
                                        src="./img/about/coorporate-brief/step-5.svg"
                                        alt="House"
                                        className="h-16 lg:h-12"
                                    />
                                    <div className="text-primary-blue flex flex-col gap-2.5 leading-relaxed">
                                        <h4 className="font-medium">
                                            Providing high-quality audiovisual
                                            solutions.
                                        </h4>
                                        <p className="leading-loose opacity-75">
                                            We enhance experiences and
                                            communication through advanced
                                            technology, elevating interactions
                                            and engagements.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-primary-blue group flex h-0.5 w-64 items-center justify-between opacity-10">
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                        <span className="flex aspect-square w-14 items-center justify-center bg-white p-2 text-xl font-bold">
                                            <span>05</span>
                                        </span>
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col gap-6">
                                <div className="card-corporate">
                                    <img
                                        src="./img/about/coorporate-brief/step-6.svg"
                                        alt="House"
                                        className="h-16 lg:h-12"
                                    />
                                    <div className="text-primary-blue flex flex-col gap-2.5 leading-relaxed">
                                        <h4 className="font-medium">
                                            Encompass structured Cabling Systems
                                            (SCS) for seamless connectivity.
                                        </h4>
                                        <p className="leading-loose opacity-75">
                                            We offer efficient Structured
                                            Cabling Systems (SCS) for seamless
                                            connectivity, ensuring uninterrupted
                                            data flow and smooth operations.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="bg-primary-blue group flex h-0.5 w-64 items-center justify-between opacity-10">
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                        <span className="flex aspect-square w-14 items-center justify-center bg-white p-2 text-xl font-bold">
                                            <span>06</span>
                                        </span>
                                        <div className="bg-primary-blue aspect-square rounded-full p-1"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div className="mx-auto max-w-5xl px-5 ">
                <div className="relative mt-16 flex flex-row-reverse justify-center gap-24 px-5 md:justify-end">
                    <img
                        src="./img/illustration/overview.svg"
                        alt="About"
                        className="absolute h-full opacity-5 sm:opacity-10 md:right-0 md:opacity-20 lg:opacity-100"
                    />
                    <div className="relative flex max-w-full flex-col justify-center gap-8 text-center md:max-w-md md:text-left">
                        <h1 className="text-primary-blue text-4xl font-semibold leading-tight">
                            Why{" "}
                            <span className="text-primary-gold font-bold">
                                should you{" "}
                            </span>
                            choose us for your{" "}
                            <span className="text-primary-gold font-bold">
                                Business
                            </span>
                            ?
                        </h1>
                        <div className="flex flex-col gap-6 leading-loose opacity-75">
                            <h2 className="text-xl font-medium">
                                Always as Professional Partner
                            </h2>
                            <p className="">
                                We excel in delivering innovative, tailored
                                solutions for your business, ensuring success in
                                the dynamic world of technology.
                            </p>
                            <h2 className="text-xl font-medium">
                                Proper steps for solutions
                            </h2>
                            <p>
                                We deliver efficient problem-solving with
                                effective steps for optimal business solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

CompanySection.propTypes = {};

export default CompanySection;
