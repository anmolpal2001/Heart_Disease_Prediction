import React, { useState } from "react";
import { useSelector } from "react-redux";

function Form() {
  const dummy = {
    age: "",
    gender: "",
    chestpain: "",
    testbps: "",
    Cholesterol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  };

  const [data, setData] = useState(dummy);
  const [remaining, setRemaining] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);
  const onChangeHandler = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
    console.log(data);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // if (
      //   !data.age ||
      //   !data.sex ||
      //   !data.cp ||
      //   !data.testbps ||
      //   !data.Cholesterol ||
      //   !data.fbs ||
      //   !data.restecg ||
      //   !data.thalach ||
      //   !data.exang ||
      //   !data.oldpeak ||
      //   !data.slope ||
      //   !data.ca ||
      //   !data.thal
      // ) {
      //   return;
      // }

      for (let key in data) {
        console.log("hello", data[key]);
        if (!data[key]) {
          console.log("nooo", key);
          setRemaining(`Missing field: ${key}`);
          return;
        }
      }
      setRemaining("");

      const formData = {
        age: Number(data.age),
        sex: Number(data.gender),
        cp: Number(data.chestpain),
        trestbps: Number(data.testbps),
        chol: Number(data.Cholesterol),
        fbs: Number(data.fbs),
        restecg: Number(data.restecg),
        thalach: Number(data.thalach),
        exang: Number(data.exang),
        oldpeak: Number(data.oldpeak),
        slope: Number(data.slope),
        ca: Number(data.ca),
        thal: Number(data.thal),
      };
      console.log(formData);
      const res = await fetch("http://localhost:4000/api/v1/heart/predict", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const pythonResponse = await res.json();
      console.log(pythonResponse);
      if (pythonResponse.success) {
        console.log(pythonResponse);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#f7f7f7] max-w-full max-h-full rounded-lg flex">
      <div className="w-5/6 bg-white m-auto  md:w-3/4 my-5">
        <div className="bg-[#2a8683] p-4 text-center text-2xl font-bold text-white rounded-t-lg">
          Form Details
        </div>

        <form onSubmit={submitHandler} className="my-5">
          <div className="flex-col justify-evenly items-start w-full px-4 md:flex md:flex-row md:px-0">
            <div className="m-3">
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700 ">
                  Age
                </label>
                <input
                  id="age"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Your Age"
                  type="number"
                  min="0"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700 ">
                  Gender
                </label>
                <select
                  id="gender"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected className="text-gray-700">
                    Select Gender
                  </option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>

              <div className="my-3">
                <label
                  className="block mb-1 font-bold text-gray-700 "
                  htmlFor="cp"
                >
                  Chest Pain
                </label>
                <select
                  id="chestpain"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select Chest Pain
                  </option>
                  <option value="0">Typical angina</option>
                  <option value="1">Atypical angina</option>
                  <option value="3">Non-anginal pain</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </div>

              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  TestBPS
                  <span className="text-sm text-gray-500">
                    {" "}
                    (90 - 180 mmHg)
                  </span>
                </label>
                <input
                  id="testbps"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="The persons resting blood pressure"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Cholesterol
                  <span className="text-sm text-gray-500">
                    {" "}
                    (e.g., 100 - 300 mg/dL)
                  </span>
                </label>

                <input
                  id="Cholesterol"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="The persons resting blood pressure"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Fasting Blood Sugar
                </label>
                <select
                  id="fbs"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select FBS
                  </option>
                  <option value="0">False</option>
                  <option value="1">True</option>
                </select>
              </div>

              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Resting Electrocardiographic Result
                </label>
                <select
                  id="restecg"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select RES
                  </option>
                  <option value="0">Normal</option>
                  <option value="1">Having ST-T Wase Abnormality</option>
                  <option value="2">showing Probable </option>
                </select>
              </div>
            </div>
            <div className="m-3">
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Thalach
                  <span className="text-sm text-gray-500">
                    {" "}
                    (e.g., 60 - 220 bpm)
                  </span>
                </label>
                <input
                  id="thalach"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="The persons maximum heart rate achieved"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Exercise-Induced Angina
                </label>
                <select
                  id="exang"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select Electrocardiographic
                  </option>
                  <option value="0">Absence of Exercise-Induced Angina</option>
                  <option value="1">Presence of Exercise-Induced Angina</option>
                </select>
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Oldpeak
                  <span className="text-sm text-gray-500">
                    {" "}
                    (e.g., 0.0 - 6.2 mm)
                  </span>
                </label>
                <input
                  id="oldpeak"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="ST depression caused by activity in comparison to rest"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Slope
                </label>
                <select
                  id="slope"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select Slope
                  </option>
                  <option value="0">upsloping</option>
                  <option value="1">flat (horizontal)</option>
                  <option value="2">downsloping</option>
                </select>
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  CA
                  <span className="text-sm text-gray-500">
                    {" "}
                    (Number of Major Vessels)
                  </span>
                </label>

                <select
                  id="ca"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select CA
                  </option>
                  <option value="0">0</option>
                  <option value="1"> 1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="my-3">
                <label className="block mb-1 font-bold text-gray-700">
                  Thalassemia
                </label>
                <select
                  id="thal"
                  onChange={onChangeHandler}
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select Thalassemia
                  </option>
                  <option value="1">Normal</option>
                  <option value="2">Fixed defect</option>
                  <option value="3">Reversible defect</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            {remaining && (
              <p className="text-red-500 text-center m-1 ">
                {remaining.toUpperCase()}
              </p>
            )}
          </div>
          <div className="justify-center flex w-full">
            <button
              type="submit"
              className="w-1/3 py-2 bg-[#2A8683] text-lg  text-white  transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg md:w-1/4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
