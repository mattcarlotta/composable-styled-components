export {};

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: Navigator;
    }
  }
}
