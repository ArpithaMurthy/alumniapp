declare namespace __WebpackModuleApi {
    interface RequireContext {
      keys(): string[];
      (id: string): any;
      resolve(id: string): string;
    }
  }
  
  declare var require: {
    context(
      directory: string,
      useSubdirectories: boolean,
      regExp: RegExp
    ): __WebpackModuleApi.RequireContext;
  };