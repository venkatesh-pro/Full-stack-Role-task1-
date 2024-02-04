import React from "react";

const DurationCheckbox = ({ prescriptionValue, handleChange }) => {
  return (
    <div>
      <div className="border-2 border-[#D0D0D0] p-[14px] relative rounded-md w-full">
        <div className="absolute -top-3 bg-white pl-2 pr-2">
          <span>Duration*</span>
        </div>
        <div className="flex justify-between ml-0 mr-0  lg:ml-[30px] lg:mr-[30px]">
          <input
            name="durationTimeInNumber"
            onChange={handleChange}
            type="number"
            value={prescriptionValue?.duration?.timeInNumber}
            className="border-2 border-[#D0D0D0] pl-2 rounded-xl  w-[100px] "
          />
          <div className="">
            <select
              name="durationTimeInUnit"
              onChange={handleChange}
              value={prescriptionValue?.duration?.timeInUnit}
              className="border-2 mr-[100px] border-[#D0D0D0] rounded-xl w-[100%] "
            >
              <option value="Hours">Hours</option>
              <option value="Minutes">Minutes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationCheckbox;
