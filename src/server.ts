import 'reflect-metadata';
import app from './app';
import { sequelize } from './models/index';
import env from './configs/env';

const PORT = env.PORT;


sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    sequelize.sync({ force: false })

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


