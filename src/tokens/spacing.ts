/**
 * Spacing mapping between Primer React props and Figma variables
 *
 * Primer React uses a numeric scale where 1 = 4px
 * These map to Primer's named spacing variables in Figma
 *
 * Usage in React: <Box padding={3}> = 12px = space/small in Figma
 * Usage in Figma: bind variable "space/small" to padding
 */
export const spacing = {
  // Primer React number → px value → Figma variable name
  0:  { px: 0,   figmaVar: null },
  1:  { px: 4,   figmaVar: 'base/size/4' },
  2:  { px: 8,   figmaVar: 'base/size/8' },
  3:  { px: 12,  figmaVar: 'base/size/12' },
  4:  { px: 16,  figmaVar: 'space/medium' },
  5:  { px: 20,  figmaVar: 'base/size/20' },
  6:  { px: 24,  figmaVar: 'space/large' },
  7:  { px: 28,  figmaVar: 'base/size/28' },
  8:  { px: 32,  figmaVar: 'base/size/32' },
  9:  { px: 36,  figmaVar: 'base/size/36' },
  10: { px: 40,  figmaVar: 'base/size/40' },
  12: { px: 48,  figmaVar: 'base/size/48' },
} as const

/**
 * Named spacing values for common patterns
 */
export const spacingNamed = {
  'space/xxsmall': 2,
  'space/small':   6,
  'space/medium':  16,
  'space/large':   24,
  'space/xlarge':  32,
} as const

/**
 * Border radius mapping
 */
export const borderRadius = {
  'borderRadius/small':  3,
  'borderRadius/medium': 6,
  'borderRadius/large':  12,
  'borderRadius/full':   9999,
} as const
