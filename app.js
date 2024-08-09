import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dontenv from "dotenv";


import { testAndroid } from "./backend/controllers/controller.android.js";
import { testBin } from "./backend/controllers/controller.bin.js";
import { testBranch } from "./backend/controllers/controller.branch.js";
import { testData } from "./backend/controllers/controller.data.js";
import { testRom } from "./backend/controllers/controller.rom.js";
import { testTwrp } from "./backend/controllers/controller.twrp.js";


dontenv.config();
mongoose.connect(process.env.url_bd)
.then(() => {
    console.log('jallo')

})

.catch((err) => {
    console.log('no jalo', err)

})

const app=express();
app.use(cors())

app.listen(4000, () => {
console.log("Si esta jalando")

})

testAndroid()
testBin()
testBranch()
testData()
testRom()
testTwrp()