import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Hospital_Management_D2",
    })
    .then(() => {
      console.log("connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to database:${err}`);
    });
};
