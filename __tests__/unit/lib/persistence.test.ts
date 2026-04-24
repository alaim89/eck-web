import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { readJsonFile, writeJsonFile } from '@/lib/ops/persistence'

describe('ops persistence', () => {
  const previousMode = process.env.OPS_PERSISTENCE_MODE
  const previousDir = process.env.OPS_DATA_DIR

  afterEach(() => {
    process.env.OPS_PERSISTENCE_MODE = previousMode
    process.env.OPS_DATA_DIR = previousDir
  })

  it('writes and reads json when file persistence is enabled', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ops-persistence-'))
    process.env.OPS_PERSISTENCE_MODE = 'file'
    process.env.OPS_DATA_DIR = tempDir

    writeJsonFile('test.json', { hello: 'world' })

    const result = readJsonFile('test.json', { hello: 'fallback' })
    expect(result).toEqual({ hello: 'world' })
  })

  it('returns fallback when persistence mode is memory', () => {
    process.env.OPS_PERSISTENCE_MODE = 'memory'
    const result = readJsonFile('anything.json', { ok: true })
    expect(result).toEqual({ ok: true })
  })
})
