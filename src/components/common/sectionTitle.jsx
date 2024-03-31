import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="relative w-full max-w-max">
      <h2 className="text-5xl max-sm:text-3xl font-bold text-neutral-700">
        {title}
      </h2>
      <div className="h-2 w-2/3 mt-2 bg-yellow-500" />
    </div>
  );
};

export default SectionTitle;
