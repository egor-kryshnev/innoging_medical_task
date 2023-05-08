import express from "express";
import cors from "cors";
import ApiRouter from "./routers/api.router.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3456;
const app = express();

app.use(cors())
app.use(express.json());

app.use("/api", ApiRouter);

app.listen(port, () => {
    console.log(`🚀 Server ready at port ${port}`)
});