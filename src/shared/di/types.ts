export type Constructor<T = {}> = new (...args: any[]) => T;
export type Factory<T = any> = () => T | Promise<T>;
export type AsyncFactory<T = any> = () => Promise<T>;

export interface ServiceRegistration<T = any> {
  factory: Factory<T>;
  singleton: boolean;
  instance?: T;
}

export type ServiceIdentifier<T = any> = string | symbol | Constructor<T>;