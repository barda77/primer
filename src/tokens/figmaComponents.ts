/**
 * Figma component mapping
 * Maps @primer/react component names to their Figma component set node IDs.
 *
 * IMPORTANT: importComponentByKeyAsync does NOT work for components in the
 * same file. Instead use:
 *   const set = await figma.getNodeByIdAsync(figmaComponents.Button.nodeId)
 *   const variant = set.children.find(c => c.name.includes('variant=primary')
 *     && c.name.includes('size=medium') && c.name.includes('state=rest'))
 *   const instance = variant.createInstance()
 *
 * Source: Primer DS Figma file QqmlOo5qFjK9XYxNx4CZO0
 */
export const figmaComponents = {
  Button: {
    nodeId: '30258:5582',
    figmaName: 'Button',
    variants: {
      primaryMedium:   'variant=primary, size=medium, state=rest, alignContent=center',
      primarySmall:    'variant=primary, size=small, state=rest, alignContent=center',
      primaryLarge:    'variant=primary, size=large, state=rest, alignContent=center',
      secondaryMedium: 'variant=secondary, size=medium, state=rest, alignContent=center',
      dangerMedium:    'variant=danger, size=medium, state=rest, alignContent=center',
      invisibleMedium: 'variant=invisible, size=medium, state=rest, alignContent=center',
    }
  },
  TextInput: {
    nodeId: '15341:46435',
    figmaName: 'Text Input/placeholder',
    variants: {
      default: 'size=medium, state=rest',
    }
  },
  Select: {
    nodeId: '15341:46907',
    figmaName: 'Select',
  },
  Checkbox: {
    nodeId: '15341:46321',
    figmaName: 'Checkbox',
  },
  Radio: {
    nodeId: '15341:46367',
    figmaName: 'Radio',
  },
  Avatar: {
    nodeId: '3805:11',
    figmaName: 'Avatar',
  },
  Label: {
    nodeId: '18959:65008',
    figmaName: 'Label',
  },
  Link: {
    nodeId: '20953:78768',
    figmaName: 'Link',
  },
  Spinner: {
    nodeId: '11025:38126',
    figmaName: 'Spinner',
  },
  Dialog: {
    nodeId: '16593:65798',
    figmaName: 'Dialog',
  },
  Heading: {
    nodeId: '21069:78785',
    figmaName: 'Heading',
  },
} as const

export type FigmaComponentName = keyof typeof figmaComponents

/**
 * Usage in use_figma scripts:
 *
 * // Get the component set
 * const set = await figma.getNodeByIdAsync('30258:5582')
 *
 * // Find the right variant
 * const variant = set.children.find(c =>
 *   c.name === 'variant=primary, size=medium, state=rest, alignContent=center'
 * )
 *
 * // Create instance and place it
 * const instance = variant.createInstance()
 * parent.appendChild(instance)
 *
 * // Override button label text
 * const label = instance.findOne(n => n.name === 'Button' && n.type === 'TEXT')
 * if (label) { await figma.loadFontAsync(label.fontName); label.characters = 'Sign in' }
 */
