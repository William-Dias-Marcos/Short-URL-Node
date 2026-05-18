import { Router } from "express";
import { shortenUrl } from "../controller/urlController";

const router = Router();

router.post("/shorten", shortenUrl);

export default router;
