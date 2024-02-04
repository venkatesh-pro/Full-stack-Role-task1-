import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const ListOfMedicine = ({ prescriptionAllData, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingWhichIndex, setIsEditingWhichIndex] = useState(null);

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
      <div
        className={`inline-block min-w-full  rounded-lg overflow-hidden bg-white shadow-lg border-2 ${
          prescriptionAllData?.length < 1 ? "pb-7" : "pb-0"
        } pt-4`}
      >
        <table className="min-w-full leading-normal ">
          <thead>
            <tr>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Medicine Name
              </th>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Strength
              </th>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Dosage
              </th>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Frequency
              </th>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Before/After
              </th>
              <th className="px-5 py-3 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {prescriptionAllData?.length > 0 &&
              prescriptionAllData?.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {isEditing && i == isEditingWhichIndex ? (
                        <input
                          type="text"
                          value={data?.medicine}
                          className="border-2"
                          name="medicine"
                          onChange={(e) => {
                            handleEdit(e, i);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setIsEditing(false);
                            }
                          }}
                        />
                      ) : (
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data.medicine}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {isEditing && i == isEditingWhichIndex ? (
                        <input
                          type="text"
                          value={data.dosage}
                          className="border-2"
                          name="dosage"
                          onChange={(e) => {
                            handleEdit(e, i);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setIsEditing(false);
                            }
                          }}
                        />
                      ) : (
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data.dosage}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {isEditing && i == isEditingWhichIndex ? (
                        <input
                          type="text"
                          value={data.strength}
                          className="border-2"
                          name="strength"
                          onChange={(e) => {
                            handleEdit(e, i);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setIsEditing(false);
                            }
                          }}
                        />
                      ) : (
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data?.strength}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.frequency?.join(",")}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data?.duration?.timeInNumber}{" "}
                        {data?.duration?.timeInUnit}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data?.isBeforeFood ? "Before Food" : "After Food"}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        className="p-1 mr-2 border-2"
                        onClick={() => {
                          if (isEditing) {
                            setIsEditing(false);
                            setIsEditingWhichIndex(null);
                          } else {
                            setIsEditing(true);
                            setIsEditingWhichIndex(i);
                          }
                        }}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="p-1  border-2"
                        onClick={() => handleDelete(i)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {prescriptionAllData?.length < 1 && (
          <div className="bg-[#EDECEF] p-2 mx-5 ">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default ListOfMedicine;
