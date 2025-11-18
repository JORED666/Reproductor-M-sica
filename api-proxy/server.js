import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

// ✅ Permitir peticiones desde tu app Angular
app.use(cors({
  origin: [/^http:\/\/localhost:\d+$/], // permite cualquier puerto local
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


// ✅ Endpoint para generar el token de Spotify
app.get("/token", async (req, res) => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: "Faltan variables de entorno" });
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "grant_type=client_credentials"
    });

    const data = await response.json();

    if (data.access_token) {
      console.log("✅ Token generado correctamente");
      res.json({ access_token: data.access_token });
    } else {
      console.error("❌ Error al generar token:", data);
      res.status(500).json(data);
    }
  } catch (err) {
    console.error("🔥 Error en el servidor:", err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy activo en http://localhost:${PORT}`);
});
