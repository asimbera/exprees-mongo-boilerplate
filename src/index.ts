import mongoose from 'mongoose';
import app from './server';

const databaseUri = process.env.DATABASE_URI;
const port = process.env.PORT ?? 3000;

(async () => {
  if (databaseUri === undefined) {
    console.log(`databaseUri is not set.`);
    return process.exit(1);
  }
  await mongoose.connect(databaseUri);
  app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}`)
  );
})();
