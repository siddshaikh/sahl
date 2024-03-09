import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PropTypes from "prop-types";

import { useState } from "react";

const Controls = ({ clearSignature, downloadRef }) => {
  const [isShowDownload, setIsShowDownload] = useState(false);
  const handleClear = () => {
    clearSignature();
  };
  const handleSave = () => {
    setIsShowDownload(!isShowDownload);
  };
  const handleRetrieve = () => {};

  const handleDownloadImage = () => {
    html2canvas(downloadRef.current).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "div_image.png";
      link.click();
    });
  };
  const handleDownloadPDF = () => {
    html2canvas(downloadRef.current).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(
        imageData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save("div_pdf.pdf");
    });
  };
  return (
    <div className="relative">
      <button
        style={{ background: "red", color: "white" }}
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        style={{ background: "green", color: "white" }}
        onClick={handleSave}
      >
        Save & Download
      </button>
      <div className="absolute flex flex-col gap-2 px-2 py-2 border border-gray-500">
        <button
          onClick={handleDownloadImage}
          className="px-4 text-white bg-gray-500"
        >
          Image{" "}
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-4 text-white bg-gray-500"
        >
          PDF{" "}
        </button>
      </div>
      <button
        style={{ background: "yellow", color: "white" }}
        onClick={handleRetrieve}
      >
        Retrieve Saved
      </button>
    </div>
  );
};
Controls.propTypes = {
  clearSignature: PropTypes.func.isRequired,
  signatureRef: PropTypes.object.isRequired,
  downloadRef: PropTypes.object.isRequired,
};
export default Controls;
