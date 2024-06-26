import { Router } from "express";
import {
  createEvent,
  modifyEvent,
  removeEvent,
  fetchEventById,
  fetchEvents,
} from "../controllers/eventController";

const router = Router();

router.post("/events", createEvent);
router.put("/events/:id", modifyEvent);
router.delete("/events/:id", removeEvent);
router.get("/events/:id", fetchEventById);
router.get("/events", fetchEvents);

export default router;
