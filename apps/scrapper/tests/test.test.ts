import { describe, expect, it } from 'vitest'

describe('Testing tests', () => {
  it('should be passing', () => {
    let sum = 1 + 2
    expect(sum).toEqual(3)
  })
})
