export interface AppConfig {
  readonly host: string;
  readonly port: number;
  readonly nodeEnv: string;
}

export const APP_VERSION = "0.1.0";

export const appConfig: AppConfig = Object.freeze({
  host: "0.0.0.0",
  port: 3000,
  nodeEnv: "development",
});
