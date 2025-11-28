// types.ts
import { ICoreEngineConfig } from './config';

type CoreEngineConfig = ICoreEngineConfig;

type CoreEngineLogger = {
  debug: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};

type CoreEngineHandler = {
  (event: string, payload: any): void;
};

type CoreEngineEvent = {
  type: string;
  payload: any;
};

type CoreEngineResult = {
  success: boolean;
  data: any;
  error?: string;
};