import { Express, Router } from 'express';
import { readdirSync, existsSync } from 'fs';

export default (app: Express): void => {
  const routesPath = `${__dirname}/../routes`;
  const router = Router();
  app.use('/api', router);
  if (existsSync(routesPath)) {
    readdirSync(routesPath).map(async (file) => {
      (await import(`${routesPath}/${file}`)).default(router);
    });
  }
};
