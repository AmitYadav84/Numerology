import React, { useContext } from 'react'
import DriverBox from './DriverBox';
import { UserContext } from '../context/UserContext';
import { DriverData } from '../Data/DriverData';
import { DriveData } from '../Data/DriveData';
import NumerologyBox from './DriveBox';

const DriverPage = () => {
    const { DriverNum ,lang} = useContext(UserContext);
    return (
      <>
        {DriverData &&
          DriverData.map((driver, index) => {
            if (index === DriverNum - 1) {
              return (
                <div
                  className="p-4 bg-gray-100 min-h-screen"
                  key={driver.driverNumber || index}
                >
                  <h1 className="text-3xl font-bold text-center mb-6">
                    Driver Numbers
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DriverBox index={index} lang={lang} />
                  </div>
                </div>
              );
            }
            return null;
          })}
        {DriveData &&
          DriveData.map((driver, index) => {
            if (index === DriverNum - 1) {
              return (
                <div
                  className="p-4 bg-gray-100 min-h-screen"
                  key={driver.Number || index}
                >
                  <h1 className="text-3xl font-bold text-center mb-6">
                    Driver Numbers
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NumerologyBox index={index} lang={lang} />
                  </div>
                </div>
              );
            }
            return null;
          })}
      </>
    );
}

export default DriverPage
