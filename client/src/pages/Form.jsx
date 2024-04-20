
import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
    console.log(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      console.log(data);
      const res = await fetch("http://localhost:4000/api/v1/auth/", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const pythonResponse=await res.json()
      // if(pythonResponse.success){

      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto " onSubmit={submitHandler}>
        <div>
          <label className="block mb-2 font-bold text-gray-700">Age</label>
          <input
            id="age"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your Age"
            // value={data.age}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">Gender</label>
          <select
            id="sex"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-bold text-gray-700 " htmlFor="cp">
            Chest Pain
          </label>
          <select
            id="cp"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">Typical angina</option>
            <option value="1">Atypical angina</option>
            <option value="3">Non-anginal pain</option>
            <option value="3">Asymptomatic</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-bold text-gray-700">Resting Blood Pressure</label>
          <input
            id="testbps"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="The persons resting blood pressure"
            // value={data.age}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">
            Cholesterol Level
          </label>
          <input
            id="Cholesterol"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="The persons resting blood pressure"
            // value={data.age}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">
            Fasting Blood Sugar
          </label>
          <select
            id="fbs"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-bold text-gray-700">
          Maximum Heart Rate
          </label>
          <select
            id="restecg"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">Normal</option>
            <option value="1">Having ST-T Wase Abnormality</option>
            <option value="2">showing Probable </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-bold text-gray-700">Resting Electrocardiographic Results</label>
          <input
            id="thalach"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="The persons maximum heart rate achieved"
            // value={data.age}
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <label className="block mb-2 font-bold text-gray-700">
            Exercise-Induced Angina
          </label>
          <select
            id="exang"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">Absence of Exercise-Induced Angina</option>
            <option value="1">Presence of Exercise-Induced Angina</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">ST Depression</label>
          <input
            id="oldpeak"
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="ST depression caused by activity in comparison to rest"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">ST Segment Slope</label>
          <select
            id="slope"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">upsloping</option>
            <option value="1">flat (horizontal)</option>
            <option value="2">downsloping</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">Number of Major Vessels</label>
          <select
            id="ca"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">0</option>
            <option value="1"> 1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">
            Thalassemia
          </label>
          <select
            id="thal"
            onChange={onChangeHandler}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          >
            <option value="0">0</option>
            <option value="1">1 </option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-[#2A8683]  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get Your Report
              </button>
            </div>
      </form>
    </div>
  );
}

export default Form;

