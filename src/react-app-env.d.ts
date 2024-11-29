/// <reference types="react-scripts" />

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.webp";

declare const require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
      keys: () => string[];
      resolve: (id: string) => string;
      <T>(id: string): T;
    };
  };

/* declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): string[];
    (id: string): any;
    resolve(id: string): string;
  };
}; */

declare namespace NodeJS {
  interface Global {
    importAll: (context: __WebpackModuleApi.RequireContext) => any[];
  }
}
