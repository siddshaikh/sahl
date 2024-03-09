import PropTypes from "prop-types";
import { bgColors, fontSizes, textColors } from "../static/data";

const Adjustment = ({
  textColor,
  setTextColor,
  bgColor,
  setBgColor,
  fontSize,
  setFontSize,
  setBackgroundImage,
}) => {
  const handleTextColorChange = (e) => {
    const { value } = e.target;
    if (value === bgColor) {
      return alert("Both Colors Cannot be the same.");
    }
    setTextColor(value);
  };

  const handleBgColorChange = (e) => {
    const { value } = e.target;
    if (value === textColor) {
      return alert("Both Colors Cannot be the same.");
    }
    setBgColor(value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setBackgroundImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      {/* Text Color */}
      <div className="md:w-1/3">
        <label htmlFor="textcolor" className="block text-gray-700">
          Text Color:
        </label>
        <select
          value={textColor}
          onChange={handleTextColorChange}
          id="textcolor"
          className="border border-gray-500 p-2 w-full md:w-auto"
        >
          <option value="">
            <em>Select the text color.</em>
          </option>
          {textColors.map((item) => (
            <option key={item.id} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Background Color */}
      <div className="md:w-1/3">
        <label htmlFor="bgcolor" className="block text-gray-700">
          Background Color or Image:
        </label>
        <select
          value={bgColor}
          onChange={handleBgColorChange}
          id="bgcolor"
          className="border border-gray-500 p-2 w-full md:w-auto"
        >
          <option value="">
            <em>Select the background color.</em>
          </option>
          {bgColors.map((item) => (
            <option key={item.id} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
        <span className="block mt-2">or</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />
      </div>

      {/* Font Size */}
      <div className="md:w-1/3">
        <label htmlFor="fontSize" className="block text-gray-700">
          Font Size:
        </label>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          id="fontSize"
          className="border border-gray-500 p-2 w-full md:w-auto"
        >
          <option value="">
            <em>Select the font size.</em>
          </option>
          {fontSizes.map((item) => (
            <option key={item.id} value={item.size}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Adjustment.propTypes = {
  textColor: PropTypes.string.isRequired,
  setTextColor: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  setBgColor: PropTypes.func.isRequired,
  fontSize: PropTypes.string.isRequired,
  setFontSize: PropTypes.func.isRequired,
  setBackgroundImage: PropTypes.func.isRequired,
};

export default Adjustment;
