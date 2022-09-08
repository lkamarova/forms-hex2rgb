import { useState } from "react";
import { ERROR_TEXT } from "../constants";

const FormColorHex = ({ onColorChanged }) => {
  const [colorInput, setColorInput] = useState("#0f2027");

  const handleChange = (value) => {
    setColorInput(value);

    if (value.length === 7) {
      handleSubmit(value);
    }
  };

  const handleSubmit = (value) => {
    const result = value.length === 7 && value[0] === "#" ? value : ERROR_TEXT;
    onColorChanged(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__label">
        Введите цвет в формате HEX
      </label>
      <input
        className="form__input"
        type="text"
        placeholder="#0f2027"
        value={colorInput}
        maxLength={7}
        onChange={(ev) => handleChange(ev.target.value)}
      />
    </form>
  );
};

export default FormColorHex;
