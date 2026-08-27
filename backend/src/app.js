import cors from "cors";
import express from "express";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

import barcodeRoutes from "./routes/barcodeRoutes.js";
import excelRoutes from "./routes/excelRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import announcementBarRoutes from "./routes/announcementBarRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import storeHoursRoutes from "./routes/storeHoursRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import geocodingRoutes from "./routes/geocodingRoutes.js";
import closureDateRoutes from "./routes/closureDateRoutes.js";
import fontRoutes from "./routes/fontRoutes.js";
import cartRoutes from "./routes/cart.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    // Permitir envío de cookies y credenciales
    credentials: true,
  })
);

app.use(express.json());

// Health check
app.get("/ping", (req, res) => {
  res.json({ status: "OK", message: "Pong" });
});

app.use("/api/auth", authRoutes); // Listo
app.use("/api/categories", categoryRoutes); // Listo

app.use("/api/products", productRoutes); 

app.use("/api/barcodes", barcodeRoutes); // Listo
app.use("/api/excel", excelRoutes); // Listo

app.use("/api/images", imageRoutes); //Listo

app.use("/api/settings", settingsRoutes); // listo
app.use("/api/banners", bannerRoutes);// Listo

app.use("/api/announcement-bar", announcementBarRoutes);

app.use("/api/orders", orderRoutes); // Listo
app.use("/api/store-hours", storeHoursRoutes); //Listo
app.use("/api/notifications", notificationRoutes); //Listo

app.use("/api/users", userRoutes); // Listo

app.use("/api/geocoding", geocodingRoutes); // Listo
app.use("/api/closure-dates", closureDateRoutes); //Listo

app.use("/api/fonts", fontRoutes); // Listo


//Documentacion
import swaggerUI from "swagger-ui-express"
import swaggerDocument from "./utils/actividadevaluada-Cuarta-actividad-evaluada-1.0-resolved.json" with {type: "json"}

app.use ("/api/documentation", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(notFound);
app.use(errorHandler);

export default app;
