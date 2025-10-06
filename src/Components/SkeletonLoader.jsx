import React from "react";

const SkeletonLoader = ({ count = 6 }) => {
  // default to 6 skeletons
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-8 mt-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="skeleton h-40 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
