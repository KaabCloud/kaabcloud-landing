import { PrismaClient } from '../generated/prisma';

// Crear el cliente de Prisma
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declaración global para evitar crear múltiples instancias en desarrollo
declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

// Verificar si ya existe una instancia global en desarrollo (para evitar múltiples instancias)
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Asignar la instancia global solo en desarrollo
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
