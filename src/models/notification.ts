import { model, Schema } from 'mongoose';

interface INotification {
  notification_id: string;
  userId: string;
  is_seen: boolean;
  msg_body: string;
}

const notificationSchema = new Schema<INotification>({
  notification_id: { type: String, required: true },
  userId: { type: String, required: true },
  is_seen: { type: Boolean, required: true, default: false },
  msg_body: { type: String, required: true },
});

export const Notification = model<INotification>(
  'Notification',
  notificationSchema
);
