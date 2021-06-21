import React from 'react';

const SectionTitle = ({title, subtitle = null}) => {

  return (
    <div className="w-full mb-6 pt-3">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="text-xs uppercase font-light text-grey-500">
            {title}
          </div>
          <div className="text-xl font-bold">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
