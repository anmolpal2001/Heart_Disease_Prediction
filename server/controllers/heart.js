// import { spawn } from "child_process";
// import Heart from "../models/heart.js";
// import User from "../models/user.js";

// const predict = async (req, res) => {
//   try {
//     const formData = req.body;
//     const userId = req.user.id;
//     const user = await User.findById(userId);
//     const inputData = Object.values(formData);
//     const pythonProcess = spawn("python", ["predict.py"]);

//     // Send input data to the Python script
//     pythonProcess.stdin.write(JSON.stringify(inputData));
//     pythonProcess.stdin.end();

//     let pythonOutput = "";
//     let pythonError = "";

//     const errorMessage = "An error occurred while running the Python script";

//     pythonProcess.stdout.on("data", (data) => {
//       pythonOutput = data.toString();
//     });

//     pythonProcess.stderr.on("data", (data) => {
//       pythonError += data.toString();
//       console.error(errorMessage);
//     });

//     pythonProcess.on("exit", async (code) => {
//       console.log(`PythonProcess exited with code ${code}`);

//       if (code === 0) {
//         // Parse the output from the Python process if needed
//         const outputJson = JSON.parse(pythonOutput);

//         const heartData = await Heart.create({
//           age : formData.age,
//           sex : formData.sex,
//           cp : formData.cp,
//           trestbps : formData.trestbps,
//           cholesterol : formData.chol,
//           fbs : formData.fbs,
//           restecg : formData.restecg,
//           thalach : formData.thalach,
//           exang : formData.exang,
//           oldpeak : formData.oldpeak,
//           slope : formData.slope,
//           ca : formData.ca,
//           thal : formData.thal,
//           target : outputJson.messageCode,
//         })

//         user.previousResults.push(heartData._id);
//         await user.save();

//         // Return the output along with status 200
//         res.status(200).json({
//           success: true,
//           userId,
//           message: "Prediction done",
//           prediction: outputJson,
//         });
//       } else {
//         // Return status code and error message
//         res.status(code).json({
//           success: false,
//           error: pythonError,
//         });
//       }
//     });
//   } catch (error) {
//     console.error("Error:", errorMessage);
//     res.status(500).send({ error: "Internal server error" });
//   }
// };

// const getResults = async (req,res) => {
//   try {
//     const userId = req.user.id;
//     const results = await User.findById(userId).populate("previousResults").exec();
//     const resultData = results.previousResults;
//     return res.status(200).json({
//       success : true,
//       previousResults : resultData,
//       message : "Results fetched successfully",
//     });
//   }catch(error) {
//     console.error("Error:", errorMessage);
//     res.status(500).send({ error: "Internal server error" });
//   }
// }

// export { predict,getResults };

import { spawn } from "child_process";
import Heart from "../models/heart.js";
import User from "../models/user.js";

const predict = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const userId = req.user.id;
    const user = await User.findById(userId);
    const inputData = Object.values(formData);
    const pythonProcess = spawn("python", ["predict.py"]);

    // Send input data to the Python script
    pythonProcess.stdin.write(JSON.stringify(inputData));
    pythonProcess.stdin.end();

    let pythonOutput = "";
    let pythonError = "";

    const errorMessage = "An error occurred while running the Python script";

    pythonProcess.stdout.on("data", (data) => {
      pythonOutput = data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      pythonError += data.toString();
      console.error(errorMessage);
    });

    pythonProcess.on("exit", async (code) => {
      if (code === 0) {
        // Parse the output from the Python process if needed
        const outputJson = JSON.parse(pythonOutput);

        const heartData = await Heart.create({
          age: formData.age,
          sex: formData.sex,
          cp: formData.cp,
          trestbps: formData.trestbps,
          cholesterol: formData.chol,
          fbs: formData.fbs,
          restecg: formData.restecg,
          thalach: formData.thalach,
          exang: formData.exang,
          oldpeak: formData.oldpeak,
          slope: formData.slope,
          ca: formData.ca,
          thal: formData.thal,
          target: outputJson.messageCode,
        });

        user.previousResults.push(heartData._id);
        await user.save();

        // Return the output along with status 200
        res.status(200).json({
          success: true,
          userId,
          message: "Prediction done",
          prediction: outputJson,
        });
      } else {
        // Return status code and error message
        res.status(code).json({
          success: false,
          error: pythonError,
        });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal server error" });
  }
};

const getResults = async (req, res) => {
  try {
    const userId = req.user.id;
    const results = await User.findById(userId)
      .populate("previousResults")
      .exec();
    const resultData = results.previousResults;
    return res.status(200).json({
      success: true,
      previousResults: resultData,
      message: "Results fetched successfully",
    });
  } catch (error) {
    console.error("Error:", errorMessage);
    res.status(500).send({ error: "Internal server error" });
  }
};

export { predict, getResults };
