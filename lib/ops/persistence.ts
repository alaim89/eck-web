import fs from 'node:fs'
import path from 'node:path'

export const isFilePersistenceEnabled = () => process.env.OPS_PERSISTENCE_MODE === 'file'

const getDataDir = () => process.env.OPS_DATA_DIR || path.join(process.cwd(), '.ops-data')

const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

export const readJsonFile = <T>(fileName: string, fallback: T): T => {
  if (!isFilePersistenceEnabled()) return fallback

  const dir = getDataDir()
  const filePath = path.join(dir, fileName)

  try {
    if (!fs.existsSync(filePath)) return fallback
    const raw = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export const writeJsonFile = (fileName: string, data: unknown) => {
  if (!isFilePersistenceEnabled()) return

  const dir = getDataDir()
  ensureDir(dir)
  const filePath = path.join(dir, fileName)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
}
