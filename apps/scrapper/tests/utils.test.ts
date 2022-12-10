import { describe, expect, it, vi } from 'vitest'
import { getEnv } from '../src/env.js'
import { retry, sleep, urlToCheery } from '../src/utils.js'

describe('testing utils', () => {
  it('test sleep function', async () => {
    const spy = vi.fn()
    vi.useFakeTimers()

    const sleepJob = sleep(100).then(spy)
    vi.advanceTimersByTime(90)
    await Promise.resolve()
    expect(spy).not.toHaveBeenCalled()

    vi.advanceTimersByTime(20)
    await sleepJob
    expect(spy).toHaveBeenCalled()
  })

  it('test retry function resolves', async () => {
    let current = 0

    const mockFunction = async () => {
      if (current < getEnv('MAX_RETRY_COUNT') - 1) {
        current++
        throw new Error()
      }
      return 1
    }
    expect(retry(mockFunction)).resolves.toEqual(1)
  })

  it('test retry function fails', async () => {
    let current = 0

    await expect(
      retry(async () => {
        if (current < getEnv('MAX_RETRY_COUNT')) {
          current++
          throw new Error()
        }
        return 1
      })
    ).rejects.toThrow()
  })
})
