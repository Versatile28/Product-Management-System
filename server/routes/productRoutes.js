const { Router } = require("express");
const multer = require('multer');

const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single('image'), createProduct);
router.get("/", getAllProducts);


module.exports = router;
