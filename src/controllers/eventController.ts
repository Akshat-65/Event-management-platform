import { Request, Response } from "express";
import { Event } from "../models/event";

let events: Event[] = [];

export const createEvent = (req: Request, res: Response) => {
  const newEvent: Event = {
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
};

export const modifyEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  const eventIndex = events.findIndex((event) => event.id === id);
  if (eventIndex === -1) {
    return res.status(404).json({ message: "Event not found" });
  }

  events[eventIndex] = { ...events[eventIndex], ...req.body, updatedAt: new Date() };
  res.json(events[eventIndex]);
};

export const removeEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  const initialLength = events.length;
  events = events.filter((event) => event.id !== id);
  if (events.length === initialLength) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.status(204).send();
};

export const fetchEventById = (req: Request, res: Response) => {
  const { id } = req.params;
  const event = events.find((event) => event.id === id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.json(event);
};

export const fetchEvents = (req: Request, res: Response) => {
  const { eventName, organizer, dateFrom, dateTo } = req.query;
  let filteredEvents = events;

  if (eventName) {
    filteredEvents = filteredEvents.filter((event) =>
      event.eventName.includes(eventName as string)
    );
  }
  if (organizer) {
    filteredEvents = filteredEvents.filter((event) =>
      event.organizer.includes(organizer as string)
    );
  }
  if (dateFrom) {
    filteredEvents = filteredEvents.filter(
      (event) => new Date(event.eventDate) >= new Date(dateFrom as string)
    );
  }
  if (dateTo) {
    filteredEvents = filteredEvents.filter(
      (event) => new Date(event.eventDate) <= new Date(dateTo as string)
    );
  }

  res.json(filteredEvents);
};
