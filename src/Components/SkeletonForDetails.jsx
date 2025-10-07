import React from 'react';

const SkeletonForDetails = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-20 pt-5">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-[500px] w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonForDetails;