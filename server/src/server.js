import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import accountRoutes from './routes/accountRoutes'

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use("/users", authRoutes);
app.use(authRoutes)
app.use(accountRoutes);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chat-app', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => console.log("Database is connected!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
