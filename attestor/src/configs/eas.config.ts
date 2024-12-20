import { registerAs } from '@nestjs/config';

export const easConfig = registerAs('eas', () => ({
  rpcUrl: process.env.EAS_RPC_URL,
  privateKey: process.env.EAS_PRIVATE_KEY,
  eas: process.env.EAS_ADDRESS,
  schemaRegistry: process.env.EAS_SCHEMA_REGISTRY
}));
