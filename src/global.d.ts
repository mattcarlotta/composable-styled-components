import { mount } from "enzyme";

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: any;
      navigator: Navigator;
      mount: typeof mount;
    }
  }
}
