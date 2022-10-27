import { Application, Router } from 'express';
import fg from 'fast-glob';

export default (app: Application): void => {
  const router = Router();
  app.use('/api', router);
  fg.sync('**/src/main/routes/**routes.ts').map(async (file) =>
    (await import(`../../../${file}`)).default(router)
  );
};