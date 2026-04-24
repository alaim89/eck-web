import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { getRequiredSecret, getSecret } from '@/lib/security/secrets'

describe('secrets helper', () => {
  const prevSecret = process.env.TEST_SECRET
  const prevSecretFile = process.env.TEST_SECRET_FILE

  afterEach(() => {
    process.env.TEST_SECRET = prevSecret
    process.env.TEST_SECRET_FILE = prevSecretFile
  })

  it('reads direct env secret first', () => {
    process.env.TEST_SECRET = 'direct-value'
    expect(getSecret('TEST_SECRET')).toBe('direct-value')
  })

  it('reads secret from *_FILE when env is not set', () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'secret-'))
    const file = path.join(tempDir, 'secret.txt')
    fs.writeFileSync(file, 'file-value\n')
    process.env.TEST_SECRET = ''
    process.env.TEST_SECRET_FILE = file

    expect(getSecret('TEST_SECRET')).toBe('file-value')
  })

  it('throws for missing required secret', () => {
    process.env.TEST_SECRET = ''
    process.env.TEST_SECRET_FILE = ''

    expect(() => getRequiredSecret('TEST_SECRET')).toThrow('Missing required secret')
  })
})
