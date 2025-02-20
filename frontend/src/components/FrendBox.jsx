import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/UserContext";
import { FriendAndEnemyData } from "../Data/Data";

const CombinationResult = () => {
  const { conductorNum, DriverNum ,friend,enemy,setFriend,setEnemy} = useContext(UserContext);
  const combinationKey = `${DriverNum}-${conductorNum}`;
  const combination = FriendAndEnemyData.find(
    (item) => item.combination === combinationKey
  );
  useEffect(() => {
    setFriend(combination?.friends_intersection);
    setEnemy(combination?.enemies_union);
 },[])
  return (
    <div className="p-6 bg-gray-100 ">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
       
        {combination ? (
          <>
            <div className="mb-2">
              <strong>Friends :</strong>{" "}
              {combination.friends_intersection.length > 0
                ? combination.friends_intersection.join(", ")
                : "None"}
            </div>
            <div>
              <strong>Enemies :</strong>{" "}
              {combination.enemies_union.length > 0
                ? combination.enemies_union.join(", ")
                : "None"}
            </div>
          </>
        ) : (
          <p className="text-red-500">No data found for this combination.</p>
        )}
      </div>
    </div>
  );
};

export default CombinationResult;
