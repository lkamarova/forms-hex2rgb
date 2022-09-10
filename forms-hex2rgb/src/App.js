import React, { useMemo, useState } from "react";
import "./App.css";
import { ERROR_TEXT } from "./constants";
import FormColorHex from "./conponents/formColorHex/FormColorHex";
import { converterToRgb, getStyleBackground } from "./utils";

function App() {
  const [colorHex, setColorHex] = useState("#0f2027");

  const result = useMemo(
    () => (colorHex === ERROR_TEXT ? ERROR_TEXT : converterToRgb(colorHex)),
    [colorHex]
  );
  const backgroundColor = getStyleBackground(result);

  return (
    <div className="wrap" style={{ backgroundColor }}>
      <div className="form__group">
        <FormColorHex onColorChanged={setColorHex} />
        <div className="form__input result " style={{ backgroundColor }}>
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;
