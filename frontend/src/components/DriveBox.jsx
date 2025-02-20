import React from "react";

import { DriveData } from "../Data/DriveData";
import { DriveDataHin } from "../Data/DriveDataHin";
const NumerologyBox = ({ index, lang }) => {
 
    const numerology = DriveData[index];
    const numerologyhin = DriveDataHin[index];
  if (!numerology) return null;

  return (
    <div className="flex flex-col gap-10">
      {lang === "english" ? (
        <div className="w-[97vw] flex justify-center">
          <div className="bg-gradient-to-br from-indigo-400 w-[80vw] via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
            {/* Header */}
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Numerology Number: {numerology.Number} - {numerology.Name}
            </h2>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Traits
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {numerology.Traits.map((trait, i) => (
                    <li key={`trait-${i}`} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strengths */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Strengths
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {numerology.Strengths.map((strength, i) => (
                    <li
                      key={`strength-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Weaknesses
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {numerology.Weaknesses.map((weakness, i) => (
                    <li
                      key={`weakness-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[97vw] flex justify-center">
          <div className="bg-gradient-to-br from-indigo-400 w-[80vw] via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
            {/* Header */}
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              अंकशास्त्र नंबर: {numerologyhin.Number} - {numerologyhin.Name}
            </h2>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traits */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  गुण
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {numerologyhin.Traits.map((trait, i) => (
                    <li key={`trait-${i}`} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strengths */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  सकारात्मक गुण
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {numerologyhin.Strengths.map((strength, i) => (
                    <li
                      key={`strength-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  नकारात्मक गुण
                </h3>
                <ul className="text-gray-600 space-y-1">
                  {numerologyhin.Weaknesses.map((weakness, i) => (
                    <li
                      key={`weakness-${i}`}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NumerologyBox;
