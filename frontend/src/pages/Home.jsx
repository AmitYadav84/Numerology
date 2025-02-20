import React, { useContext, useEffect} from 'react'
import { UserContext } from '../context/UserContext'
import Astropage from '../components/Astrology'
import YogBox from '../components/YogBox'

import FrendBox from '../components/FrendBox'

import { getLocalStorageUserData } from '../storage/UserLocalstorage'
import { useNavigate } from 'react-router-dom'





const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
 
  const ShortReportHandler = () => {
    navigate("/ShortReport");
  }
  const AdvanceReportHandler = () => {
    navigate("/AdvanceReport");
  }
  useEffect(() => {
    setUser(getLocalStorageUserData());

  },[])
 
  return (
    <>
      {user.dob != "" && <Astropage user={user} />}
      <YogBox />
      <FrendBox />
      <div className="w-[90vw] m-15 rounded-2xl bg-amber-200 p-10">
        <h1 className="text-3xl font-bold"> For More Details ... </h1>
        <button
          className="p-4 bg-blue-500 cursor-pointer hover:bg-blue-700 rounded-3xl m-4"
          onClick={ShortReportHandler}
        >
          Short Report
        </button>
        <button
          className="p-4 bg-green-400 cursor-pointer hover:bg-green-500 rounded-3xl m-4"
          onClick={AdvanceReportHandler}
        >
          Advance Report
        </button>
      </div>
    </>
  );
}

export default Home
