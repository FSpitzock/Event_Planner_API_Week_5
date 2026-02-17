import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Event } from '../models';

// GET ALL EVENTS
export const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters: any = {};

    if (req.query.category) {
      filters.category = req.query.category;
    }

    if (req.query.date) {
      const date = new Date(req.query.date as string);

      if (isNaN(date.getTime())) {
        res.status(400).json({ message: 'Invalid date format' });
        return;
      }

      filters.date = { $gte: date };
    }

    const events = await Event.find(filters);

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET EVENT BY ID
export const getEventById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid event ID' });
      return;
    }

    const event = await Event.findById(id);

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// CREATE EVENT
export const createEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const event = new Event(req.body);
    await event.save();

    res.status(201).json(event);
  } catch (error: any) {
    res.status(400).json({
      message: 'Validation failed',
      error: error.message,
    });
  }
};

// UPDATE EVENT
export const updateEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid event ID' });
      return;
    }

    const event = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    res.status(200).json(event);
  } catch (error: any) {
    res.status(400).json({
      message: 'Update failed',
      error: error.message,
    });
  }
};

// DELETE EVENT
export const deleteEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid event ID' });
      return;
    }

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
