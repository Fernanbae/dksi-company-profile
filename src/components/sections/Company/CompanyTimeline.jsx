import PropTypes from "prop-types";
import { useState } from "react";

import TimelineLists from "../../ui/Timeline/TimelineLists";
import TimelineItem from "../../ui/Timeline/TimelineItem";
import TimelineButton from "../../ui/Timeline/TimelineButton";

import { cn } from "../../../lib/utils";
import clsx from "clsx";

function CompanyTimeline({ TimelineContent }) {
    const [activeTimeline, setActiveTimeline] = useState(0);

    function handleSelectTimeline(timelineIndex) {
        setActiveTimeline(timelineIndex);
    }

    return (
        <>
            <TimelineLists>
                {TimelineContent.map((content, index) => (
                    <TimelineItem
                        key={content.id}
                        indicator={clsx({
                            ["START"]: index === 0,
                            ["END"]: index === TimelineContent.length - 1,
                        })}
                        className={cn({
                            ["col-start-2"]: index === 4,
                            ["col-start-3"]: index === 5,
                        })}
                    >
                        <TimelineButton
                            icon={content.icon.src}
                            altIcon={content.icon.alt}
                            active={activeTimeline === index}
                            onSelect={() => handleSelectTimeline(index)}
                        />
                    </TimelineItem>
                ))}
            </TimelineLists>
        </>
    );
}

CompanyTimeline.propTypes = {
    TimelineContent: PropTypes.array,
};

export default CompanyTimeline;
