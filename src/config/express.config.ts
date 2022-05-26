import { json, urlencoded } from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import APP_CONFIG from './app.config';
import i18n from './i18n.config';
import { ErrorHandler } from '../libs/error';

export const expressConfig = (app: Application): void => {
  app.use(helmet());
  app.use(cors());
  app.use(compression());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(i18n.init);
  app.use(cookieParser(APP_CONFIG.ENV.SECURE.COOKIE_SECRET_KEY));

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorHandler) {
      return res.error(err);
    }
  });
};
