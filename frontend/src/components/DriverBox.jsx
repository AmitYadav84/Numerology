import React from "react";
import { DriverDataHin } from "../Data/DriverDataHin";
import { DriverData } from "../Data/DriverData";

const DriverBox = ({ index,lang }) => {
  const driver = DriverData[index];
  const driverhin = DriverDataHin[index];
  if (!driver) return null;

  return (
    <>
      <div className="flex flex-col gap-10">
     { (lang == "english")?(  <div className="w-[97vw] flex justify-center ">
          <div className="bg-gradient-to-br from-indigo-400 w-[80vw]  via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
            {/* Header */}
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Driver Number: {driver.driverNumber}
            </h2>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Traits
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driver.traits.map((trait, i) => (
                    <li key={`trait-${i}`} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Positive Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Positive Traits
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driver.positive.map((positiveTrait, i) => (
                    <li
                      key={`positive-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      {positiveTrait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Negative Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Negative Traits
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driver.negative.map((negativeTrait, i) => (
                    <li
                      key={`negative-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      {negativeTrait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Recommendations */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Career Recommendations
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driver.careerRecommendations.map((career, i) => (
                    <li key={`career-${i}`} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relationships */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Relationships
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driver.relationships.map((relation, i) => (
                    <li
                      key={`relation-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                      {relation}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Favorite & Bad Color */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Favorite & Bad Colors
                </h3>
                <p className="text-gray-600">
                  <strong>Favorite Color:</strong> {driver.favoriteColor}
                </p>
                <p className="text-gray-600">
                  <strong>Bad Color:</strong> {driver.badColor}
                </p>
              </div>

              {/* Friends and Enemies */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Friends & Enemies
                </h3>
                <p className="text-gray-600">
                  <strong>Friends:</strong> {driver.friends.join(", ")}
                </p>
                <p className="text-gray-600">
                  <strong>Enemy:</strong> {driver.enemy}
                </p>
              </div>
            </div>
          </div>
        </div>):
      (  <div className="w-[97vw] flex justify-center ">
          <div className="bg-gradient-to-br from-indigo-400 w-[80vw] via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
            {/* Header */}
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              ड्राइवर नंबर: {driverhin.driverNumber}
            </h2>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  गुण
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driverhin.traits.map((trait, i) => (
                    <li key={`trait-${i}`} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Positive Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  सकारात्मक गुण
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driverhin.positive.map((positiveTrait, i) => (
                    <li
                      key={`positive-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      {positiveTrait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Negative Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  नकारात्मक गुण
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driverhin.negative.map((negativeTrait, i) => (
                    <li
                      key={`negative-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      {negativeTrait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Recommendations */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  करियर सुझाव
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driverhin.careerRecommendations.map((career, i) => (
                    <li key={`career-${i}`} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relationships */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  रिश्ते
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {driverhin.relationships.map((relation, i) => (
                    <li
                      key={`relation-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                      {relation}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Favorite & Bad Color */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  पसंदीदा और बुरा रंग
                </h3>
                <p className="text-gray-600">
                  <strong>पसंदीदा रंग:</strong> {driverhin.favoriteColor}
                </p>
                <p className="text-gray-600">
                  <strong>बुरा रंग:</strong> {driverhin.badColor}
                </p>
              </div>

              {/* Friends and Enemies */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  दोस्त और दुश्मन
                </h3>
                <p className="text-gray-600">
                  <strong>दोस्त:</strong> {driverhin.friends.join(", ")}
                </p>
                <p className="text-gray-600">
                  <strong>दुश्मन:</strong> {driverhin.enemy}
                </p>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
};

export default DriverBox;
