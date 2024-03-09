import { useState } from "react";
import { filTypes } from "../../static/data";

const InputComp = () => {
  const [selectedValue, setSelectedValue] = useState("video");
  const [link, setLink] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center mt-4">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center gap-1 w-[400px]"
      >
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="border border-black outline-none"
        >
          {filTypes.map((item) => (
            <option
              value={item.value}
              key={item.value}
              selected={item.value === selectedValue}
            >
              {item.label}
            </option>
          ))}
        </select>
        <input
          className="border border-black outline-none"
          type="text"
          placeholder="Paste You're Link Here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit" className="uppercase border border-black">
          Ready
        </button>
      </form>
    </div>
  );
};

export default InputComp;
