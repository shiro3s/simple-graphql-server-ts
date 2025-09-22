declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number
      }
    }
  }
}