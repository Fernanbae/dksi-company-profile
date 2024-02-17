import OverviewLists from "./OverviewLists";

import { SECTION_OVERVIEW as SectionContent } from "../../../constants/AppContent.js";
import OverviewItem from "./OverviewItem";

function OverviewSection() {
    return (
        <section className="overflow-hidden bg-white py-16 rounded-t-[75px]">
            <div className="max-container">
                <OverviewLists>
                    {SectionContent.map((content) => (
                        <OverviewItem
                            key={content.index}
                            count={content.count}
                            indicator={content.indicator}
                            info={content.info}
                        />
                    ))}
                </OverviewLists>
            </div>
        </section>
    );
}

OverviewSection.propTypes = {};

export default OverviewSection;
