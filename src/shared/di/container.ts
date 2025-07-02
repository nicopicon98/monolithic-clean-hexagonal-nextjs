import { ServiceIdentifier, ServiceRegistration, Factory, Constructor } from "./types";

export class DIContainer {
  private services = new Map<ServiceIdentifier, ServiceRegistration>();

  // Registrar singleton
  registerSingleton<T>(
    identifier: ServiceIdentifier<T>,
    factory: Factory<T>
  ): void {
    this.services.set(identifier, {
      factory,
      singleton: true,
    });
  }

  // Registrar transient (nueva instancia cada vez)
  registerTransient<T>(
    identifier: ServiceIdentifier<T>,
    factory: Factory<T>
  ): void {
    this.services.set(identifier, {
      factory,
      singleton: false,
    });
  }

  // Resolver dependencia sincrona
  resolve<T>(identifier: ServiceIdentifier<T>): T {
    const registration = this.services.get(identifier);
    
    if (!registration) {
      throw new Error(`Service not registered: ${String(identifier)}`);
    }

    // Si es singleton y ya existe la instancia, devolverla
    if (registration.singleton && registration.instance) {
      return registration.instance as T;
    }

    // Crear nueva instancia
    const instance = registration.factory();
    
    // Si es async, lanzar error
    if (instance instanceof Promise) {
      throw new Error(`Use resolveAsync for async services: ${String(identifier)}`);
    }

    // Si es singleton, guardar la instancia
    if (registration.singleton) {
      registration.instance = instance;
    }

    return instance as T;
  }

  // Resolver dependencia asincrona
  async resolveAsync<T>(identifier: ServiceIdentifier<T>): Promise<T> {
    const registration = this.services.get(identifier);
    
    if (!registration) {
      throw new Error(`Service not registered: ${String(identifier)}`);
    }

    // Si es singleton y ya existe la instancia, devolverla
    if (registration.singleton && registration.instance) {
      return registration.instance as T;
    }

    // Crear nueva instancia (puede ser async)
    const instance = await registration.factory();

    // Si es singleton, guardar la instancia
    if (registration.singleton) {
      registration.instance = instance;
    }

    return instance as T;
  }

  // Verificar si un servicio está registrado
  isRegistered<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.services.has(identifier);
  }

  // Limpiar instancias singleton (útil para testing)
  clearSingletons(): void {
    this.services.forEach(registration => {
      if (registration.singleton) {
        registration.instance = undefined;
      }
    });
  }
}