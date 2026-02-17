import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUrl = process.env.MONGO_URL as string;
    const dbName = process.env.MONGO_DB as string;

    await mongoose.connect(mongoUrl, {
      dbName,
    });

    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

export const closeDB = async (): Promise<void> => {
  await mongoose.connection.close();
};
