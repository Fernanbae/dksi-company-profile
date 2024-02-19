import CompanyTimeline from "./CompanyTimeline";
import CompanySubHeading from "./CompanySubHeading.jsx";
import SectionHeader from "../../ui/Section/SectionHeader";

import { SECTION_COMPANY as SectionContent } from "../../../constants/AppContent.js";

function CompanySection() {
    return (
        <section className="py-16 sm:py-32" id="company">
            <div className="max-container overflow-hidden">
                <SectionHeader
                    title={SectionContent.header.title}
                    heading={SectionContent.header.heading}
                    className="max-w-5xl"
                >
                    {SectionContent.header.description}
                </SectionHeader>
                <div className="relative flex flex-col items-center">
                    <CompanyTimeline
                        TimelineContent={SectionContent.timeline}
                    />
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-5 ">
                <div className="relative mt-16 flex flex-row-reverse justify-center gap-24 px-5 md:justify-end">
                    <img
                        src={SectionContent.illustration.src}
                        alt={SectionContent.illustration.alt}
                        className="absolute h-full opacity-5 sm:opacity-10 md:right-0 md:opacity-20 lg:opacity-100"
                    />
                    <div className="relative flex max-w-full flex-col justify-center gap-8 text-center md:max-w-md md:text-left">
                        <CompanySubHeading
                            text={SectionContent.about.content.heading}
                        />
                        <div className="flex flex-col gap-6 leading-loose opacity-75">
                            {SectionContent.about.content.item.map(
                                (content) => (
                                    <>
                                        <h2 className="text-xl font-medium">
                                            {content.title}
                                        </h2>
                                        <p>{content.description}</p>
                                    </>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

CompanySection.propTypes = {};

export default CompanySection;
