import PropTypes from "prop-types";
import SignatureCanvas from "react-signature-canvas";

const InputBlock = ({
  textColor,
  bgColor,
  fontSize,
  backgroundImage,
  signatureRef,
  downloadRef,
}) => {
  const backgroundStyle = {
    height: 400,
    width: 400,
    border: "1px solid black",
    color: textColor,
    background: backgroundImage ? `url(${backgroundImage})` : bgColor,
    backgroundSize: "cover",
    fontSize: `${fontSize}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle} ref={downloadRef}>
      <SignatureCanvas
        ref={signatureRef}
        penColor={textColor}
        dotSize={2}
        canvasProps={{
          width: 400,
          height: 400,
          className: "sigCanvas",
        }}
      />
    </div>
  );
};

InputBlock.propTypes = {
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  backgroundImage: PropTypes.string,
  signatureRef: PropTypes.object.isRequired,
  downloadRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default InputBlock;
