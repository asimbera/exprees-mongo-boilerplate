import anyTest, { TestFn } from 'ava';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../src/server';

const test = anyTest as TestFn<{ mongod: MongoMemoryServer }>;

test.before(async (t) => {
  t.context = { mongod: await MongoMemoryServer.create() };
  await mongoose.connect(t.context.mongod.getUri());
});

test.serial('GET /hello should return Hello World!', async (t) => {
  const res = await request(app).get('/hello');
  t.is(res.status, 200);
  t.deepEqual(res.body, { message: 'Hello World!' });
});

test.after.always(async (t) => {
  await mongoose.disconnect();
  await t.context.mongod.stop();
});
