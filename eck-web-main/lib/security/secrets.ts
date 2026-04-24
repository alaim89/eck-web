import fs from 'node:fs'

const readFromFile = (path: string) => {
  try {
    return fs.readFileSync(path, 'utf8').trim()
  } catch {
    return ''
  }
}

export const getSecret = (name: string): string | undefined => {
  const direct = process.env[name]?.trim()
  if (direct) return direct

  const fromFile = process.env[`${name}_FILE`]?.trim()
  if (!fromFile) return undefined

  const value = readFromFile(fromFile)
  return value || undefined
}

export const getRequiredSecret = (name: string): string => {
  const value = getSecret(name)
  if (!value) {
    throw new Error(`Missing required secret: ${name}`)
  }
  return value
}
