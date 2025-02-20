import { createContext, useEffect, useState } from "react";




const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    doB: "",
    gender: "",
  });
  const [content, setContent] = useState("");
  const [friend, setFriend] = useState([]);
  const [enemy, setEnemy] = useState([]);
  const username = user.firstName + " " + user.lastName;
  const firstName = user.firstName;
  const gridItems = ["", "", "", "", "", "", "", "", ""];
  let Yog_Items = [];
  let dob = user.doB || "2000-01-01";
  const newdob = user.doB || "";
  let name = username || "Guest";
  let lang =  "english";
  let gender = user.gender || "Male";
  let conductorNum = 0;
  let Year_Num = 0;
  const Days = [["1st", "10th", "19th", "28th"], ["2nd", "11th", "20th", "29th"], ["3rd", "12th", "21th", "30th"], ["4th", "13th", "22th", "31th"], ["5th", "14th", "23th"], ["6th", "15th", "24th"], ["7th", "16th", "25th"], ["8th", "17th", "26th"], ["9th", "18th", "27th"]];
  
  let DriverNum = parseInt(dob[8] || 0) + parseInt(dob[9] || 0);
  let KuaNum =
    parseInt(dob[0] || 0) +
    parseInt(dob[1] || 0) +
    parseInt(dob[2] || 0) +
    parseInt(dob[3] || 0);
  let Nam_Num = 0;
  let firstNam_Num = 0;
const timestamp = Date.now();
const year = new Date(timestamp).getFullYear();
  Year_Num =
    year +
    parseInt(dob[8] || 0) +
    parseInt(dob[9] || 0) +
    parseInt(dob[5] || 0) +
    parseInt(dob[6] || 0);
  const DigitCount = (num) => {
    while (num > 9) {
      let sum = 0;
      while (num) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
      }
      num = sum;
    }
    return num;
  };
  if (dob.length >= 10) {
    for (let i = 0; i < 10; i++) {
      if (!isNaN(parseInt(dob[i]))) {
        conductorNum += parseInt(dob[i]);
      }
    }

    conductorNum = DigitCount(conductorNum);
    DriverNum = DigitCount(DriverNum);
    KuaNum = DigitCount(KuaNum);
    Year_Num = DigitCount(Year_Num);

    if (gender == "Male") KuaNum = 11 - KuaNum;
    else {
      KuaNum = 4 + KuaNum;
      KuaNum = DigitCount(KuaNum);
    }

   
    dob += `${conductorNum}`;
    dob += `${DriverNum}`;
    dob += `${KuaNum}`;

    for (let i = 0; i < 13; i++) {
      if (dob[i] === "4") gridItems[0] += dob[i];
      else if (dob[i] === "9") gridItems[1] += dob[i];
      else if (dob[i] === "2") gridItems[2] += dob[i];
      else if (dob[i] === "3") gridItems[3] += dob[i];
      else if (dob[i] === "5") gridItems[4] += dob[i];
      else if (dob[i] === "7") gridItems[5] += dob[i];
      else if (dob[i] === "8") gridItems[6] += dob[i];
      else if (dob[i] === "1") gridItems[7] += dob[i];
      else if (dob[i] === "6") gridItems[8] += dob[i];
    }
  } else {
    console.error("Invalid DOB format:", dob);
  }
  const letterToNum = {
    A: 1,
    I: 1,
    J: 1,
    Q: 1,
    Y: 1,
    a: 1,
    i: 1,
    j: 1,
    q: 1,
    y: 1,
    B: 2,
    K: 2,
    R: 2,
    b: 2,
    k: 2,
    r: 2,
    C: 3,
    G: 3,
    L: 3,
    S: 3,
    c: 3,
    g: 3,
    l: 3,
    s: 3,
    D: 4,
    M: 4,
    T: 4,
    d: 4,
    m: 4,
    t: 4,
    E: 5,
    H: 5,
    N: 5,
    X: 5,
    e: 5,
    h: 5,
    n: 5,
    x: 5,
    U: 6,
    V: 6,
    W: 6,
    u: 6,
    v: 6,
    w: 6,
    O: 7,
    Z: 7,
    o: 7,
    z: 7,
    F: 8,
    P: 8,
    f: 8,
    p: 8,
  };


  for (let i = 0; i < name.length; i++) {
    if (letterToNum[name[i]]) {
      Nam_Num += letterToNum[name[i]];
    }
  }
  for (let i = 0; i < firstName.length; i++) {
    if (letterToNum[firstName[i]]) {
      firstNam_Num += letterToNum[firstName[i]];
    }
  }

  Nam_Num = DigitCount(Nam_Num);
  firstNam_Num = DigitCount(firstNam_Num);

  

 const checkPlaneStatus = (indices, label) => {
   const [i1, i2, i3] = indices;
   if (gridItems[i1] && gridItems[i2] && gridItems[i3]) {
     Yog_Items.push(`${label} GOOD `);
   } else if (
     (gridItems[i1] && gridItems[i2]) ||
     (gridItems[i2] && gridItems[i3]) ||
     (gridItems[i1] && gridItems[i3])
   ) {
     Yog_Items.push(`${label} WEAK `);
   } else {
     Yog_Items.push(`${label}   BAD`);
   }
 };

 // Check each plane status
 checkPlaneStatus([0, 1, 2], "MIND PLANE");
 checkPlaneStatus([3, 4, 5], "SOUL PLANE");
 checkPlaneStatus([6, 7, 8], "PRACTICAL PLANE");
 checkPlaneStatus([0, 3, 6], "THOUGHT");
 checkPlaneStatus([1, 4, 7], "WILL");
 checkPlaneStatus([2, 5, 8], "ACTION");
 checkPlaneStatus([0, 4, 8], "GOLDEN");
 checkPlaneStatus([2, 4, 6], "SILVER");


    return (
      <UserContext.Provider
        value={{
          user,
          setUser,
          lang,
          name,
          conductorNum,
          KuaNum,
          DriverNum,
          friend,
          newdob,
          DigitCount,
          dob,
          Days,
          content,
          setContent,
          setFriend,
          enemy,
          firstNam_Num,
          setEnemy,
          Nam_Num,
          Year_Num,
          Yog_Items,
          gridItems,
        }}
      >
        {children}
      </UserContext.Provider>
    );
}
export { UserContext, UserProvider };