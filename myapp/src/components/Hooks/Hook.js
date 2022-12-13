import React, { useState } from "react";


function Change() {
  const [change, setChange] = useState(" ");
 

  return (
    <>
      <h1>My favorite color is {change}!</h1>
      <button
        type="button"
        onClick={() => {setChange("i am state 1 ")}}
      >1</button>
      <button
        type="button"
        onClick={() => setChange("i am state 2 ")}
      >2</button>
      <button
        type="button"
        onClick={() => setChange("i am state 3 ")}
      >3</button>
      <button
        type="button"
        onClick={() => setChange("i am state 4 ")}
      >4</button>
    </>
  );
}

export default Change;