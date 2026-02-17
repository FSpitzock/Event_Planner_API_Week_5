import mongoose, { Schema, Document, Model } from 'mongoose';

export type EventCategory =
  | 'Meeting'
  | 'Conference'
  | 'Personal'
  | 'Workshop'
  | 'Other';

export interface IEvent extends Document {
  title: string;
  description?: string;
  date: Date;
  location?: string;
  category: EventCategory;
  attendees: string[];
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      required: [true, 'Event date is required'],
    },
    location: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Meeting', 'Conference', 'Personal', 'Workshop', 'Other'],
      default: 'Other',
    },
    attendees: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // automatically handles createdAt & updatedAt
  }
);

// Extra validation
eventSchema.path('date').validate(function (value: Date) {
  return !isNaN(value.getTime());
}, 'Invalid date');

// Pre-save hook (redundant with timestamps but included per requirement)
eventSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export const Event: Model<IEvent> = mongoose.model<IEvent>(
  'Event',
  eventSchema
);
