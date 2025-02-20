import React from "react";
import { ConductorData } from "../Data/ConductorData";
import { ConductorDataHindi } from "../Data/ConductorDatahin";


const ConductorBox = ({ index, lang }) => {
  const conductor = ConductorData[index];
  const conductorHin = ConductorDataHindi[index];
  if (!conductor) return null;

  return (
    <>
      <div className="flex flex-col gap-10">
        {lang === "english" ? (
          <div className="w-[97vw] flex justify-center">
            <div className="bg-gradient-to-br from-pink-500 w-[80vw] via-purple-500 to-indigo-400 p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
              {/* Header */}
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Conductor Number: {conductor.conductorNumber}
              </h2>

              {/* Content Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traits */}
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Traits
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    {conductor.traits.map((trait, i) => (
                      <li
                        key={`trait-${i}`}
                        className="flex items-center gap-2"
                      >
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
                    {conductor.positive.map((positiveTrait, i) => (
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
                    {conductor.negative.map((negativeTrait, i) => (
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
                    {conductor.careerRecommendations.map((career, i) => (
                      <li
                        key={`career-${i}`}
                        className="flex items-center gap-2"
                      >
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
                    {conductor.relationships.map((relation, i) => (
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

                {/* Compatible and Challenging Numbers */}
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Compatibility
                  </h3>
                  <p className="text-gray-600">
                    <strong>Compatible Numbers:</strong>{" "}
                    {conductor.compatibleNumbers.join(", ")}
                  </p>
                  <p className="text-gray-600">
                    <strong>Challenging Numbers:</strong>{" "}
                    {conductor.challengingNumbers.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[97vw] flex justify-center">
            <div className="bg-gradient-to-br from-indigo-400 w-[80vw] via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
              {/* Header */}
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                कंडक्टर नंबर: {conductorHin.conductorNumber}
              </h2>

              {/* Content Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traits */}
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    गुण
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    {conductorHin.traits.map((trait, i) => (
                      <li
                        key={`trait-${i}`}
                        className="flex items-center gap-2"
                      >
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
                    {conductorHin.positive.map((positiveTrait, i) => (
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
                    {conductorHin.negative.map((negativeTrait, i) => (
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
                    {conductorHin.careerRecommendations.map((career, i) => (
                      <li
                        key={`career-${i}`}
                        className="flex items-center gap-2"
                      >
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compatibility */}
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    अनुकूलता
                  </h3>
                  <p className="text-gray-600">
                    <strong>अनुकूल संख्या:</strong>{" "}
                    {conductorHin.compatibleNumbers.join(", ")}
                  </p>
                  <p className="text-gray-600">
                    <strong>चुनौतीपूर्ण संख्या:</strong>{" "}
                    {conductorHin.challengingNumbers.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConductorBox;
