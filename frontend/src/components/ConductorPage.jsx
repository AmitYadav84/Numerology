import React, { useContext } from 'react'
import ConductorBox from './ConductorBox';
import { UserContext } from '../context/UserContext';
import { ConductorData } from '../Data/ConductorData';

const ConductorPage = () => {
  const { conductorNum ,lang} = useContext(UserContext);
  return (
    <>
      {ConductorData &&
        ConductorData.map((conductor, index) => {
          if (index === conductorNum - 1) {
            return (
              <div
                className="p-4 bg-gray-100 min-h-screen"
                key={conductor.conductorNum || index}
              >
                <h1 className="text-3xl font-bold text-center mb-6">
                  Conductor Numbers
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ConductorBox index={index} lang={lang} />
                </div>
              </div>
            );
          }
          return null;
        })}
    </>
  );
}

export default ConductorPage
