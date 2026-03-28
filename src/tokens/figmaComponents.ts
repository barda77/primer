/**
 * Figma component key mapping
 * Maps @primer/react component names to their Figma component keys.
 * Use importComponentByKeyAsync(key) to place real instances in Figma.
 *
 * Source: Primer DS Figma file QqmlOo5qFjK9XYxNx4CZO0
 */
export const figmaComponents = {
  // Core interactive components
  Button:       { key: '22a5dbedb887f978845b9796011c3c1a7bea76e0', figmaName: 'Button' },
  TextInput:    { key: 'fa2311308be7af265aaaf75283deeaa072ac20bb', figmaName: 'Text Input/value' },
  Select:       { key: 'e4f4f03ede88645a8325e6ccdc88a2a607b9dddc', figmaName: 'Select' },
  Checkbox:     { key: '823232211d8f7aeae968692fd322158c6fe5a79e', figmaName: 'Checkbox' },
  Radio:        { key: '4f120e70aeecbe2d54177556439c64b377482796', figmaName: 'Radio' },
  Avatar:       { key: '4d6b895ad1a17578dfd5caff8034f76ea9794d84', figmaName: 'Avatar' },
  Label:        { key: '0d64f95cb9f960ab9836b5aa337dffdb8e807c5e', figmaName: 'Label' },
  Link:         { key: '0d13483808e0fa5f48739833eb8fb469cebddad4', figmaName: 'Link' },
  Spinner:      { key: '7299bc2da99c6827cff8998d064dd1eced08dbba', figmaName: 'Spinner' },
  Dialog:       { key: 'ada40f037b4aea42c95610f0bfec35997d707556', figmaName: 'Dialog' },
  Heading:      { key: '3b141a1fda6962a36b53d480eeb641e31e2f1b9e', figmaName: 'Heading' },
} as const

export type FigmaComponentName = keyof typeof figmaComponents

/**
 * Usage in use_figma scripts:
 *
 * import { figmaComponents } from '../tokens/figmaComponents'
 *
 * const comp = await figma.importComponentByKeyAsync(figmaComponents.Button.key)
 * const instance = comp.createInstance()
 */
