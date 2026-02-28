import express from "express";
import cors from "cors";
import widgetRoutes from "./modules/widget/widget.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "Dashboard Backend Running" });
});

app.use("/api/widgets", widgetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
