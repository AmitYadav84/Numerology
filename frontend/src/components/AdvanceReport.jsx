import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { jsPDF } from "jspdf";
import { ColorData, DriverConductData, DriverNegData, DriverNewData, DriverNewDataDeficiency, Remedy, YearData } from "../Data/Data"
const AdvanceReport = () => {
  const {
    name,
    conductorNum,
    DigitCount,
    setContent,
    DriverNum,
    Nam_Num,
    firstNam_Num,
    KuaNum,
    Days,
    Yog_Items,
    Year_Num,
    gridItems,
    friend,
    content,
    newdob,
    enemy,
  } = useContext(UserContext);
  const timestamp = Date.now();
  const year = new Date(timestamp).getFullYear();
  const new_year = Yog_Items.filter((item) => !item.includes("❌"));
  useEffect(() => {
    const generateReportContent = () => {
      const nonMissingNumbers = [];
      const missingNumbers = [];

      gridItems.forEach((item, index) => {
        const number = ["4", "9", "2", "3", "5", "7", "8", "1", "6"][index];
        if (item === "") missingNumbers.push(number);
        else nonMissingNumbers.push(number);
      });

      const reportContent = `
**${name}**
                                


                                 DOB - ${newdob}
                                  Driver Number - ${DriverNum}
                                  Conductor Number - ${conductorNum}
                                  Kua Number - ${KuaNum}
                                  Name Number - ${Nam_Num}





**Your Characteristics**
${DriverNum ? DriverNewData[DriverNum - 1] : ""}
**Your Strengths**
 ${friend?.map((item) => `${DriverNewData[item - 1]}`).join("")}

**Your Weakness**
 ${enemy?.map((item) => `${DriverNewDataDeficiency[item - 1]}`).join("")}
**What does your Driver-Conductor Combination signify?**

*Driver ${DriverNum} Conductor ${conductorNum}*
 ${DriverNum ? DriverNewData[DriverNum - 1] : ""}
 ${conductorNum ? DriverNewData[conductorNum - 1] : ""}

**What the Yogas in your DOB say about you:**
${Yog_Items.map(
  (item) => `
*${item}*`
).join("\n")}

**IMPACT OF REPETITIVE NUMBERS IN YOUR DOB:**
${nonMissingNumbers
  ?.map(
    (num) =>
      `
*Number ${num}*
    Number ${num} comes ${gridItems
        .map((item) => (item !== "" && item[0] == num ? item.length : null))
        .filter((len) => len !== null)} times in your date of birth.\n
        ${DriverNewData[num - 1]}
        `
  )
  .join("\n")}

**IMPACT OF MISSING NUMBERS IN YOUR DOB:**
${missingNumbers
  .map(
    (num) => `
*Missing Number: ${num}*
 ${DriverNegData[num - 1]}
`
  )
  .join("\n")}
**REMEDIES FOR THE MISSING NUMBERS **
  ${missingNumbers
    .map((item) => {
      const itemNumber = Number(item); // Ensure item is a number
      const isEnemy = enemy?.map(Number).includes(itemNumber); // Convert enemy items to numbers for comparison

      return isEnemy
        ? `Remedy for number ${itemNumber}:\nSince your Driver number is ${DriverNum} and Conductor number is ${conductorNum}, you should not do the remedies of number ${itemNumber} as it can prove to be very harmful for you.`
        : `Remedy for number ${itemNumber}:\n 
            ${Remedy[itemNumber - 1]}`;
    })
    .join("\n")}
    General Remedies for Missing Numbers
--> Write the missing number daily on paper or in a notebook.
--> Meditate on the energy of the missing number.
--> Keep objects or symbols related to the number around you.
--> Use the missing number in your phone number, license plate, or email.
--> Recite mantras or affirmations related to the missing number.

**PREDICTION OF NEXT 5 YEARS :**
*Year : ${year}*
 Year Number : ${Year_Num}
 ${YearData[Year_Num - 1]}
*Year : ${year + 1}*
  Year Number : ${DigitCount(Year_Num + 1)}
   ${YearData[DigitCount(Year_Num + 1) - 1]}
*Year : ${year + 2}*
   Year Number : ${DigitCount(Year_Num + 2)}
    ${YearData[DigitCount(Year_Num + 2) - 1]}
*Year : ${year + 3}*
   Year Number : ${DigitCount(Year_Num + 3)}
    ${YearData[DigitCount(Year_Num + 3) - 1]}
*Year : ${year + 4}*
   Year Number : ${DigitCount(Year_Num + 4)}
    ${YearData[DigitCount(Year_Num + 4) - 1]}\n
    Why is the Personal Year Number Important?
--> Helps in making better decisions based on the years energy.
--> Guides you to align with lifes natural cycles.
--> Prepares you for opportunities and challenges in the coming year.

**SIGNATURE RULES**
*Step I (No Vacuum)*
    • Any alphabet of the name should not have any vacuum in between
    them
*Step II (Name & Fame)*
    • It should be in ascending descent. It represents that your name is
    touching new heights of name and fame
*Step III (Support)*
    • There should be a line below the signature. Please make sure it
    should not cut any of the alphabets in your name. It represent support
    to your name.
*Step IV (Authority)*
    • There should be two dots below the line which represents extra
    support to your name and authority

#Amit Yadav#
**Name Number Compatibility**
*First Name Compatibility*
 ${
   friend.includes(firstNam_Num)
     ? `
    Good
    Your Full name total is coming to ${firstNam_Num} which is compatible with your date
     of birth.
  `
     : `
     Bad
Your first name total is coming to ${firstNam_Num} which is not compatible with your
date of birth.
  
Your first name total should come on the following number(s) for
better alignment with your date of birth: ${friend?.map((item) => `${item}`)}

        `
 }
*Full Name Compatibility*
${
  friend.includes(Nam_Num)
    ? `
    Good
    Your Full name total is coming to ${Nam_Num} which is compatible with your date
     of birth.
  `
    : `
     Bad
Your first name total is coming to ${Nam_Num} which is not compatible with your
date of birth.

Your first name total should come on the following number(s) for
better alignment with your date of birth: ${friend?.map((item) => `${item}`)}

        `
}
You can use the below-mentioned numerical values to bring your
name to the desirable number.
 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 1 2 3 4 5 8 3 5 1 1 2 3 4 5 7 8 1 2 3 4 6 6 6 5 1 7

 You can also contact us for personalized name consultation

**Lucky Numbers, Bad Numbers, Neutral Numbers**
Lucky Numbers - ${friend?.map((item) => `${item}`)}
Bad Number - ${enemy?.map((item) => `${item}`)}
Neutral Number - Rest(1-9)

You should take your important decisions and execute them only on your lucky number dates like ${friend
        ?.map((item) => Days[Number(item) - 1].join(", "))
        .join(", ")}

You should not take important decisions and avoid dates like ${enemy
        ?.map((item) => Days[Number(item) - 1].join(", "))
        .join(", ")}


If the above dates are not available, then you can also take decisions
on Rest Days 
**Lucky Colors and Bad Colors**
Lucky Colors ---> ${friend?.map((item) => ColorData[Number(item) - 1])}
Bad Colors ---> ${enemy?.map((item) => ColorData[Number(item) - 1])}
    `.trim(); // Remove leading and trailing newlines

      setContent(reportContent);
    };

    generateReportContent();
  }, [name, conductorNum, DriverNum, Yog_Items, gridItems]);

  const createAndDownloadPDF = () => {
    const doc = new jsPDF();
    const marginLeft = 10;
    const marginTop = 20;
    const lineHeight = 10;
    const pageHeight = doc.internal.pageSize.height;
    let y = marginTop;

    const checkPageOverflow = (extraHeight = 0) => {
      if (y + extraHeight > pageHeight - 20) {
        doc.addPage();
        y = marginTop;
      }
    };

    // Title Section
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text(`${name} Advance Report`, marginLeft, y);
    y += 20;

    // 3x3 Birth Chart Grid
    const startX = marginLeft;
    const startY = y;
    const cellWidth = 50;
    const cellHeight = 30;

    for (let row = 0; row < 3; row++) {
      checkPageOverflow(cellHeight); // Check before drawing each row
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        doc.rect(
          startX + col * cellWidth,
          startY + row * cellHeight,
          cellWidth,
          cellHeight
        );
        if (gridItems[index]) {
          doc.setFontSize(12);
          doc.text(
            gridItems[index],
            startX + col * cellWidth + cellWidth / 2,
            startY + row * cellHeight + cellHeight / 2 + 5,
            { align: "center" }
          );
        }
      }
    }

    y += 3 * cellHeight + 20;

    // Main Content Rendering (Split by Paragraphs)
    const paragraphs = content.split("\n\n");

    paragraphs.forEach((paragraph) => {
      const lines = doc.splitTextToSize(paragraph, 180);

      lines.forEach((line) => {
        if (y + lineHeight > pageHeight - 20) {
          doc.addPage();
          y = marginTop;
        }

        doc.setFontSize(15);
        doc.setFont("times", "normal");
        doc.setTextColor(0, 0, 0);

        if (line.startsWith("**") && line.endsWith("**")) {
          doc.setFontSize(20);
          doc.setFont("times", "bold");
          doc.setTextColor(0, 0, 255);
          line = line.replace(/\*\*/g, "");
        } else if (line.startsWith("*") && line.endsWith("*")) {
          doc.setFontSize(18);
          doc.setTextColor(20, 50, 200);
          doc.setFont("times", "italic");
          line = line.replace(/\*/g, "");
        }
       else if (line.startsWith("#") && line.endsWith("#")) {
    line = line.replace(/\#/g, ""); // Remove '#' symbols

    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.setFont("courier", "italic"); // Signature-like font

    let x = 50; // X position for signature
    let sigY = y + 20; // Y position (adds space above for separation)

    doc.text(line, x, sigY, { angle: 30 }); // Rotate text for signature effect

    // Draw underline with extra margin below text
   
    y = sigY + 20; // Move Y down to add more space below the signature

    return; // 🔹 Prevents default doc.text(line, marginLeft, y) from running again
}


        doc.text(line, marginLeft, y);
        y += lineHeight;
      });

      y += 5; // Space between paragraphs
    });

    // Add watermark on all pages
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      addWatermarkAsBackground(doc);
    }

    doc.save("AdvanceReport.pdf");
  };

  // Watermark function
  const addWatermarkAsBackground = (doc) => {
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setGState(new doc.GState({ opacity: 0.2 }));
    doc.setFontSize(50);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(150, 150, 150);
    doc.text("Destiny of Life", pageWidth / 2, pageHeight / 2, {
      angle: 30,
      align: "center",
    });
    doc.setGState(new doc.GState({ opacity: 1 }));
    };
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Advance Report
        </h2>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Advance Report Sample
        </h2>
        <div className="max-h-60 overflow-y-auto mb-4">
          <p className="text-gray-600 mb-6">
            FOLLOWING ARE THE CONTENT AVAILABLE IN ADVANCE REPORT :
          </p>
          <ul className="list-disc pl-5">
            <li className="text-xl">Your Characteristics</li>
            <li className="text-xl">Your Strengths</li>
            <li className="text-xl">Your Weakness</li>
            <li className="text-xl">
              What does your Driver-Conductor Combination signify?
            </li>
            <li className="text-xl">
              What the Yogas in your DOB say about you
            </li>
            <li className="text-xl">
              IMPACT OF REPETITIVE NUMBERS IN YOUR DOB
            </li>
            <li className="text-xl">IMPACT OF MISSING NUMBERS IN YOUR DOB</li>
            <li className="text-xl">REMEDIES FOR THE MISSING NUMBERS</li>
            <li className="text-xl">PREDICTION OF NEXT 5 YEARS</li>
            <li className="text-xl">SIGNATURE RULES</li>
            <li className="text-xl">Name Number Compatibility</li>
            <li className="text-xl">
              Lucky Numbers, Bad Numbers, Neutral Numbers
            </li>
            <li className="text-xl">Lucky Colors and Bad Colors</li>
          </ul>
        </div>
        <button
          className="w-full bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-lg"
          onClick={createAndDownloadPDF}
        >
          Buy a Advance Report
        </button>
      </div>
    </div>
  );
};

export default AdvanceReport;
