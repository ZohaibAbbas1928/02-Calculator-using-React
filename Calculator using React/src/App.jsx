import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleBtnClk = (e) => {
    const input = e.target.innerText;

    if (input === "=") {
      try {
        setValue(eval(value));
      } catch {
        setValue("Error");
      }
    } else if (input === "AC") {
      setValue("");
    } else if (input === "DEL") {
      setValue(value.slice(0, -1));
    } else {
      setValue((prevValue) => prevValue + input);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700">
        <h1 className="text-3xl text-center font-bold mb-4 text-white shadow-2xl">
          Calculator using React!
        </h1>
        <div className="rounded-xl flex flex-col justify-center items-center h-96 w-1/4 bg-white shadow-2xl">
          <input
            type="text"
            value={value}
            className=" mt-2 w-72 rounded-xl h-10 text-white shadow-2xl text-xl bg-gray-500 p-2"
          />
          <div className="row-1 flex gap-2.5">
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-2xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              AC
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-2xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              DEL
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-2xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              .
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-2xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              /
            </button>
          </div>
          <div className="row-2 flex gap-2.5">
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              7
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              8
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              9
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              *
            </button>
          </div>
          <div className="row-3 flex gap-2.5">
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              4
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              5
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              6
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              +
            </button>
          </div>
          <div className="row-4 flex gap-2.5">
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              1
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              2
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              3
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-5xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              -
            </button>
          </div>
          <div className="row-5 flex gap-2.5">
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              00
            </button>
            <button
              className="bg-gray-500 w-16 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              0
            </button>
            <button
              className="bg-gray-500 w-36 h-12 text-white shadow-2xl text-3xl rounded-xl mt-4"
              onClick={handleBtnClk}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
