import { test, expect } from '@jest/globals'
import { getKeyBindings } from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings should return an array of key bindings', () => {
  const result = getKeyBindings()
  expect(Array.isArray(result)).toBe(true)
})

test('getKeyBindings should return expected number of key bindings', () => {
  const result = getKeyBindings()
  expect(result).toHaveLength(7)
})

test('getKeyBindings should include navigation keys', () => {
  const result = getKeyBindings()
  const keys = result.map((binding) => binding.key)
  expect(keys).toContain(16) // DownArrow
  expect(keys).toContain(14) // UpArrow
  expect(keys).toContain(3) // Enter
  expect(keys).toContain(255) // End
  expect(keys).toContain(12) // Home
  expect(keys).toContain(8) // Escape
})

test('getKeyBindings should include Ctrl+Space for toggle details', () => {
  const result = getKeyBindings()
  const toggleBinding = result.find((binding) => binding.key === 2057) // CtrlCmd | Space
  expect(toggleBinding).toBeDefined()
  expect(toggleBinding.command).toBe('Editor.executeWidgetCommand')
  expect(toggleBinding.args).toEqual(['Hovers', 'Hovers.toggleDetails', 0, 6])
})

test('getKeyBindings should have consistent command structure', () => {
  const result = getKeyBindings()
  for (const binding of result) {
    expect(binding).toHaveProperty('key')
    expect(binding).toHaveProperty('command')
    expect(binding).toHaveProperty('args')
    expect(binding).toHaveProperty('when')
    expect(binding.command).toBe('Editor.executeWidgetCommand')
    expect(binding.args).toHaveLength(4)
    expect(binding.args[0]).toBe('Hovers')
    expect(binding.args[3]).toBe(6)
  }
})
