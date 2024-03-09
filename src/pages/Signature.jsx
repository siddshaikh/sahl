import { useRef, useState } from "react";
import Adjustment from "../components/Adjustment";
import InputBlock from "../components/InputBlock";
import Controls from "../components/Controls";

const Signature = () => {
  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#ffff");
  const [fontSize, setFontSize] = useState(10);
  const [backgroundImage, setBackgroundImage] = useState("");
  const signatureRef = useRef(null);
  const downloadRef = useRef(null);
  const [drawHistory, setDrawHistory] = useState([]);

  const handleClearPrev = () => {
    signatureRef.current.undo();
  };

  const handleClearNext = () => {
    signatureRef.current.redo();
  };

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  return (
    <div>
      <Adjustment
        textColor={textColor}
        setTextColor={setTextColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
        fontSize={fontSize}
        setFontSize={setFontSize}
        setBackgroundImage={setBackgroundImage}
      />
      <div>
        <button onClick={handleClearPrev}>↖</button>
        <button onClick={handleClearNext}>↗</button>
      </div>
      <InputBlock
        textColor={textColor}
        bgColor={bgColor}
        fontSize={fontSize}
        backgroundImage={backgroundImage}
        signatureRef={signatureRef}
        downloadRef={downloadRef}
      />
      <Controls
        clearSignature={clearSignature}
        signatureRef={signatureRef}
        downloadRef={downloadRef}
      />
    </div>
  );
};

export default Signature;
