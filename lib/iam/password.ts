import bcryptjs from 'bcryptjs'

export const hashPassword = (password: string): Promise<string> =>
  bcryptjs.hash(password, 12)

export const verifyPassword = (password: string, hash: string): Promise<boolean> =>
  bcryptjs.compare(password, hash)
