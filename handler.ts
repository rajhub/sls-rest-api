import * as sls from 'serverless-http';
import { build } from './app';

export const run = sls(build);
