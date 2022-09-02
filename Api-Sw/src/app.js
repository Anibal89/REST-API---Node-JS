import express from "express";
import morgan from "morgan";

//routes

import LanguageRoutes from "./routes/language.routes";

const app=express();

//configuraciones ----- :)

app.set("port",4000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());

//Routes del Api

app.use("/api/usuario",LanguageRoutes);

export default app;
