import React from "react";
import FrequencyCheckbox from "./Checkbox/FrequencyCheckbox";
import DurationCheckbox from "./Checkbox/DurationCheckbox";

// const HOWMANYTEXTINPUTBOX = 3
const Functionality = ({ prescriptionValue, handleChange }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-10 md:grid-cols-2  lg:grid-cols-3 w-[100vw]">
      <div className="relative w-full ">
        <input
          type="text"
          className="border-2 border-[#D0D0D0] p-[14px] w-full rounded-md "
          value={prescriptionValue.medicine}
          name="medicine"
          onChange={handleChange}
        />
        <div className="absolute -top-3 bg-white ml-3 pl-2 pr-2">
          <span>Medicine*</span>
        </div>
      </div>

      <div className="relative w-full ">
        <input
          type="text"
          className="border-2 border-[#D0D0D0] p-[14px] w-full rounded-md"
          value={prescriptionValue.dosage}
          name="dosage"
          onChange={handleChange}
        />
        <div className="absolute -top-3 bg-white ml-3 pl-2 pr-2">
          <span>Dosage*</span>
        </div>
      </div>
      <div className="relative w-full ">
        <input
          type="text"
          className="border-2 border-[#D0D0D0] p-[14px] w-full rounded-md "
          value={prescriptionValue.strength}
          name="strength"
          onChange={handleChange}
        />
        <div className="absolute -top-3 bg-white ml-3 pl-2 pr-2">
          <span>Strength*</span>
        </div>
      </div>

      <FrequencyCheckbox
        prescriptionValue={prescriptionValue}
        handleChange={handleChange}
      />
      <DurationCheckbox
        prescriptionValue={prescriptionValue}
        handleChange={handleChange}
      />
      <div>
        <div className="border-2 border-[#D0D0D0] p-[7px] relative bg-[#D8D9D8] rounded-md flex justify-between">
          <button
            name="isBeforeFood"
            className={`${
              prescriptionValue.isBeforeFood == true && "bg-white"
            } pl-7 pr-7 pt-[10px] pb-[10px] md:text-sm text-xs rounded-md`}
            onClick={handleChange}
            value={"true"}
          >
            Before food
          </button>
          <button
            name="isBeforeFood"
            className={`${
              prescriptionValue.isBeforeFood == false && "bg-white"
            } pl-7 pr-7 pt-[10px] pb-[10px] rounded-md md:text-sm text-xs`}
            onClick={handleChange}
            value={"false"}
          >
            After food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
