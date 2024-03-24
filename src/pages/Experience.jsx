import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#ffffff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2021"
          iconStyle={{ background: "#686868", color: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lewisville High School, Lewisville, TX
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-Present"
          iconStyle={{ background: "#686868", color: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Houston, Houston, TX
          </h3>
          <p>Bachelor's in Computer Science, Minor in Mathematics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024-Present"
          iconStyle={{ background: "#686868", color: "fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ColorStack, Houston, TX
          </h3>
          <p>ColorStack Member</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
