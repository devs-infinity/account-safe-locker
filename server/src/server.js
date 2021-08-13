import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://localhost:3000", // This should be the domain where the client is  deployed on
    credentials: true,
  })
);

const secretCode = process.env.EXPRESS_SECRET || "secretcode";
app.use(
  session({
    secret: secretCode,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(secretCode));
app.use(passport.initialize());
app.use(passport.session());
// -- Will be adding passport config here for the strategies --

// Routes
import authRoutes from "./routes/authRoutes";
import accountRoutes from "./routes/accountRoutes";

app.use(authRoutes);
app.use(accountRoutes);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

// Database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chat-app",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

mongoose.connection.on("connected", () =>
  console.log("Database is connected!")
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
