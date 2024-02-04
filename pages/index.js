import React, { useState } from "react";
import Functionality from "../components/Home/Functionality";
import ListOfMedicine from "../components/Home/ListOfMedicine";

const index = () => {
  const [prescriptionValue, setPrescriptionValue] = useState({
    medicine: "",
    dosage: "",
    strength: "",
    frequency: [],
    duration: {
      timeInNumber: "",
      timeInUnit: "Hours",
    },
    isBeforeFood: true,
  });

  const [prescriptionAllData, setPrescriptionAllData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    if (name === "frequency") {
      setPrescriptionValue((prevState) => {
        // Check if the value already exists in the array
        const updatedFrequency = prevState.frequency.includes(value)
          ? prevState.frequency.filter((item) => item !== value)
          : [...prevState.frequency, value];
        return { ...prevState, frequency: updatedFrequency };
      });
    } else if (name === "durationTimeInNumber") {
      setPrescriptionValue((prevState) => ({
        ...prevState,
        duration: { ...prevState.duration, timeInNumber: value },
      }));
    } else if (name === "durationTimeInUnit") {
      setPrescriptionValue((prevState) => ({
        ...prevState,
        duration: { ...prevState.duration, timeInUnit: value },
      }));
    } else if (name === "isBeforeFood") {
      setPrescriptionValue((prevState) => ({
        ...prevState,
        isBeforeFood: JSON.parse(value),
      }));
    } else {
      setPrescriptionValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const isAllValueFilled = () => {
    return (
      prescriptionValue.medicine.trim() !== "" &&
      prescriptionValue.dosage.trim() !== "" &&
      prescriptionValue.strength.trim() !== "" &&
      prescriptionValue.frequency.length > 0 &&
      prescriptionValue.duration.timeInNumber.trim() !== "" &&
      prescriptionValue.duration.timeInUnit.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (isAllValueFilled()) {
      setPrescriptionAllData([...prescriptionAllData, prescriptionValue]);
    } else {
      alert("Please fill all required fields");
    }
  };

  const handleDelete = (index) => {
    setPrescriptionAllData((prevData) =>
      prevData.filter((data, i) => i != index)
    );
  };
  const handleEdit = (e, index) => {
    const { name, value } = e.target;

    setPrescriptionAllData((prevState) => {
      const updatedData = [...prevState];
      updatedData[index] = { ...updatedData[index], [name]: value };
      return updatedData;
    });
  };

  return (
    <div className="min-h-[97vh] w-[98vw] m-auto  bg-[#FFFEFE] mt-[13px] rounded-2xl ">
      <div className="w-full">
        {/* <pre>{JSON.stringify(prescriptionValue, null, 4)}</pre>
      <pre>{JSON.stringify(prescriptionAllData, null, 4)}</pre> */}
        <div>
          {/* title */}
          <h1 className="font-bold text-xl ml-5 p-5">Add Prescription</h1>
          <hr />
          {/* functionality section */}
          <div className="w-full">
            <Functionality
              prescriptionValue={prescriptionValue}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end pr-10 ">
          <button className="bg-[#F4C03E] p-1 rounded" onClick={handleSubmit}>
            Add Medicine
          </button>
        </div>

        <div className="pl-10 pt-10 pb-5">
          <h2 className="font-bold">List of medicines added</h2>
        </div>
        {/* table */}
        <div className="pl-10 pr-10">
          <ListOfMedicine
            prescriptionAllData={prescriptionAllData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
