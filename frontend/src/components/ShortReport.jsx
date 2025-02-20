import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { jsPDF } from "jspdf";
import {

  DriverNegData,
  DriverNewData,
  DriverNewDataDeficiency,
 
} from "../Data/Data";

const ShortReport = () => {
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
    doc.text(`${name} Short Report`, marginLeft, y);
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

    doc.save("ShortReport.pdf");
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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Short Report
        </h2>
        <div className="max-h-60 overflow-y-auto mb-4">
          <div className="text-gray-600 mb-6">
            <p>FOLLOWING ARE THE CONTENT AVAILABLE IN SHORT REPORT:</p>
            <p className="text-xl">1. Your Characteristics</p>
            <p className="text-xl">2. Your Strengths</p>
            <p className="text-xl">3. Your Weakness</p>
            <p className="text-xl">
              4. What does your Driver-Conductor Combination signify?
            </p>
            <p className="text-xl">
              5. What the Yogas in your DOB say about you
            </p>
            <p className="text-xl">
              6. IMPACT OF REPETITIVE NUMBERS IN YOUR DOB
            </p>
            <p className="text-xl">7. IMPACT OF MISSING NUMBERS IN YOUR DOB</p>
          </div>
        </div>
        <button
          className="w-full bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-lg"
          onClick={createAndDownloadPDF}
        >
          Buy a Short Report
        </button>
      </div>
    </div>
  );
};

export default ShortReport;
