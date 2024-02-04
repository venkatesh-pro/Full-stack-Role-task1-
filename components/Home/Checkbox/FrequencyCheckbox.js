import React from "react";

const FrequencyCheckbox = ({ prescriptionValue, handleChange }) => {
  return (
    <div>
      <div className="border-2 border-[#D0D0D0] p-[8px] relative rounded-md">
        <div className="absolute -top-3 bg-white pl-2 pr-2">
          <span>Frequency*</span>
        </div>
        <div className="flex justify-between p-2 ml-0 mr-0 lg:ml-[20px] lg:mr-[20px]">
          <div>
            <input
              type="checkbox"
              id="Morning"
              value="Morning"
              name="frequency"
              onChange={handleChange}
            />
            <label htmlFor="Morning" className="ml-2">
              Morning
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Afternoon"
              value="Afternoon"
              name="frequency"
              onChange={handleChange}
            />
            <label htmlFor="Afternoon" className="ml-2">
              Afternoon
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Evening"
              value="Evening"
              name="frequency"
              onChange={handleChange}
            />
            <label htmlFor="Evening" className="ml-2">
              Evening
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyCheckbox;
