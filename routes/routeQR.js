const route = require("express").Router();
const QRCode = require("qrcode");

route.post("/generate_qr", async (req, res) => {
  const { url, size = 700 } = req.body; 
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url, { width: size }); 
    res.status(200).json({ qrCode: qrCodeDataUrl });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = route;

