import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* SECTION HEADING */}
      <SectionHeading heading="Exploring Popular Detination" />
      {/* SECTION CONTENT */}
      <div className="mt-14 w-[80%] mx-auto">
        {/* DESTINATION SLIDER */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
