import { test, expect } from '@jest/globals'
import { getHoverPositionXy } from '../src/parts/GetHoverPositionXy/GetHoverPositionXy.ts'

test('getHoverPositionXy should return coordinates based on editor properties', () => {
  const editor = {
    height: 600,
    y: 50,
  }

  const result = getHoverPositionXy(editor, 10, 5)

  expect(result).toHaveProperty('x')
  expect(result).toHaveProperty('y')
  expect(typeof result.x).toBe('number')
  expect(typeof result.y).toBe('number')
})

test('getHoverPositionXy should calculate y coordinate correctly', () => {
  const editor = {
    height: 800,
    y: 100,
  }

  const result = getHoverPositionXy(editor, 5, 2)

  expect(result).toHaveProperty('x')
  expect(result).toHaveProperty('y')
  expect(typeof result.x).toBe('number')
  expect(typeof result.y).toBe('number')
})

test('getHoverPositionXy should handle different editor dimensions', () => {
  const editor = {
    height: 400,
    y: 0,
  }

  const result = getHoverPositionXy(editor, 15, 8)

  expect(result).toHaveProperty('x')
  expect(result).toHaveProperty('y')
  expect(typeof result.x).toBe('number')
  expect(typeof result.y).toBe('number')
})
