import mongoose from "mongoose";

const heartSchema = mongoose.Schema({
    age : {
        type : String,
        required : true
    },
    sex : {
        type : String,
        required : true
    },
    cp : {
        type : String,
        required : true
    },
    trestbps : {
        type : String,
        required : true
    },
    cholesterol : {
        type : String,
        required : true
    },
    fbs : {
        type : String,
        required : true
    },
    thalach : {
        type : String,
        required : true
    },
    restecg : {
        type : String,
        required : true
    },
    exang : {
        type : String,
        required : true
    },
    oldpeak : {
        type : String,
        required : true
    },
    slope : {
        type : String,
        required : true
    },
    ca : {
        type : String,
        required : true
    },
    thal : {
        type : String,
        required : true
    },
    target : {
        type : Number,
    }
}, { timestamps : true });

const Heart = mongoose.model("heart", heartSchema);

export default Heart;