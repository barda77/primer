# Project: Primer DS

## Stack
- React + TypeScript
- @primer/react for all UI components
- Primer design tokens for all spacing, colour, typography and radius values

## Figma file
https://www.figma.com/design/QqmlOo5qFjK9XYxNx4CZO0/Primer-DS

## Rules for generating screens
1. Always use @primer/react components — never plain HTML elements for UI (buttons, inputs, links, cards)
2. Never use arbitrary CSS values — only Primer tokens
3. When pushing to Figma via MCP, always read the Figma file first to discover existing components and text styles
4. Map every interactive element to its exact Primer Figma component instance by name
5. Map all text to existing Primer text styles found in the Figma file
6. Map all colours to existing Primer variable names found in the Figma file

## Typography
- Font: Albert Sans (Google Fonts)
- Loaded in index.html via Google Fonts link tag
- Applied via customTheme in ThemeProvider — do not use system fonts
- Weights used: 300, 400, 500, 600

## Typography — two-way mapping

All typography is defined in src/tokens/typography.ts.
Each entry maps a Primer CSS variable (for code) to a Figma text style ID (for Figma writes).

The CSS variable names come directly from Primer's own typography scale
(@primer/primitives/dist/css/functional/typography/typography.css).
The Figma style IDs match the text styles in our Primer DS Figma file.

### In React components — use the textStyle() helper via sx prop:
import { textStyle } from '../tokens/typography'
<Text sx={textStyle('text-body-medium')}>Hello</Text>
<Text sx={textStyle('text-title-large')}>Page title</Text>

### When writing to Figma via use_figma scripts:
Read src/tokens/typography.ts to get the figmaStyleId for each style.
Apply with: textNode.textStyleId = typography['text-body-medium'].figmaStyleId

### Available styles and their mapping:
| Key                   | Primer CSS var                    | Figma style      |
|-----------------------|-----------------------------------|------------------|
| text-display          | --text-display-shorthand          | Display          |
| text-title-large      | --text-title-shorthand-large      | Title/Large      |
| text-title-medium     | --text-title-shorthand-medium     | Title/Medium     |
| text-title-small      | --text-title-shorthand-small      | Title/Small      |
| text-subtitle         | --text-subtitle-shorthand         | Subtitle         |
| text-body-large       | --text-body-shorthand-large       | Body/Large       |
| text-body-large-bold  | --text-body-shorthand-large       | Body/Large Bold  |
| text-body-medium      | --text-body-shorthand-medium      | Body/Medium      |
| text-body-medium-bold | --text-body-shorthand-medium      | Body/Medium Bold |
| text-body-small       | --text-body-shorthand-small       | Body/Small       |
| text-body-small-bold  | --text-body-shorthand-small       | Body/Small Bold  |
| text-caption          | --text-caption-shorthand          | Caption          |
| text-link-large       | --text-body-shorthand-large       | Link/Body Large  |
| text-link-medium      | --text-body-shorthand-medium      | Link/Body Medium |
| text-link-small       | --text-body-shorthand-small       | Link/Body Small  |

### Rule
- Never hardcode fontSize, fontWeight or lineHeight anywhere in the codebase
- Never set font properties manually in use_figma scripts
- Always go through typography.ts — it is the single source of truth for both sides

## Figma Component Mapping

When pushing screens to Figma, always import and use these exact component symbols
instead of creating raw shapes.

### Button
Page ID: 136:1805
- Primary / Medium / Rest: 30258:5709
- Primary / Large / Rest: 30258:5723
- Primary / Small / Rest: 30258:5716
- Secondary / Medium / Rest: 30258:5583
- Secondary / Large / Rest: 30258:5597
- Secondary / Small / Rest: 30258:5590

### Text Input
Page ID: 27986:142917
Component Set ID: 15341:46504 | Set Key: b41f978e13eb618df1a53950cf3e76ad46b3d7cf
- Medium / Rest / No validation: key `5e8918f821498aea2445c196d343831729e53153` (id 15341:46505)
- Small / Rest / No validation:  key `90cc87850593cfb28d6e657c0dc6e68298a5940c` (id 15341:46519)
- Large / Rest / No validation:  key `6b7f715ab6d636f22b9dfad0f3644fa1966ced48` (id 15341:46533)

### Usage in use_figma scripts
To place a Button instance:
```js
const buttonComp = await figma.importComponentByKeyAsync('30258:5709')
const buttonInstance = buttonComp.createInstance()
```

To place a TextInput instance:
```js
const inputComp = await figma.importComponentByKeyAsync('5e8918f821498aea2445c196d343831729e53153')
const inputInstance = inputComp.createInstance()
```

When building a screen that has a primary button, always use importComponentByKeyAsync
with the correct key above, then createInstance(). Never draw a raw rectangle
for a button.

## Component mapping
- React <Button> → Figma "Button" component
- React <TextInput> → Figma "TextInput" component
- React <Text> → Figma text styles (match by size and weight)
- React <Box> → Figma auto-layout frame with Primer spacing tokens
