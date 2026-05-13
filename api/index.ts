import express from "express";
import path from "path";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import QRCode from "qrcode";

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Mock QRIS Generation Endpoint
app.post("/api/checkout", async (req, res) => {
  const { amount, items } = req.body;

  // In a real app, this would be a dynamic QRIS from a payment gateway.
  // For this demo, we generate a fake QRIS string (often starts with 000201...)
  const mockPayload = `00020101021226590016ID.CO.QRIS.WWW0215ID12345678901230303UMI51440014ID.CO.QRIS.WWW0215ID10203040506070303UMI5204541153033605802ID5920Bale Apung Sidoarjo6008Sidoarjo61056127162440118ORDER-${Date.now()}0703***6304`;

  try {
    const qrDataUrl = await QRCode.toDataURL(mockPayload);
    res.json({
      success: true,
      qrCode: qrDataUrl,
      amount,
      orderId: `ORD-${Date.now()}`,
      message: "Silakan scan QRIS untuk membayar."
    });
  } catch (err) {
    res.status(500).json({ error: "Gagal membuat QRIS" });
  }
});

// Vite middleware for development
if (process.env.NODE_ENV !== "production") {
  (async () => {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  })();
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

export default app;
