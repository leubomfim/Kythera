import * as argon2 from 'argon2';

const ARGON2_CONFIG = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16, 
  timeCost: 3,  
  parallelism: 1,
} as const;

export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await argon2.hash(password, ARGON2_CONFIG);
  } catch (error) {
    console.error('Erro ao fazer hash da senha:', error);
    throw new Error('Falha ao processar senha');
  }
};

export const verifyPassword = async (
  hash: string, 
  password: string
): Promise<boolean> => {
  try {
    return await argon2.verify(hash, password);
  } catch (error) {
    console.error('Erro ao verificar senha:', error);
    return false;
  }
};

export const needsRehash = (hash: string): boolean => {
  try {
    return argon2.needsRehash(hash, ARGON2_CONFIG);
  } catch (error) {
    return true; 
  }
};