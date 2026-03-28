export const typography = {
  'text-display':              { cssVar: '--text-display-shorthand',       figmaStyleId: 'S:bc0330649598569e61696f092219cd42f5fc3c24,' },
  'text-title-large':          { cssVar: '--text-title-shorthand-large',   figmaStyleId: 'S:f45746b88c8eb347e7e6a960d8a58ca42e5a58af,' },
  'text-title-medium':         { cssVar: '--text-title-shorthand-medium',  figmaStyleId: 'S:7ee19cf80878f29f03cdc18a63f7e56f4b1b0a65,' },
  'text-title-small':          { cssVar: '--text-title-shorthand-small',   figmaStyleId: 'S:71a85b4e82694633c2ee36541e75030e978e01e4,' },
  'text-subtitle':             { cssVar: '--text-subtitle-shorthand',      figmaStyleId: 'S:907334086c613813f7121a791bb3ff3e8daec103,' },
  'text-body-large':           { cssVar: '--text-body-shorthand-large',    figmaStyleId: 'S:c14c57ce38be53be869a5ffb5e00d2c37150e992,' },
  'text-body-large-bold':      { cssVar: '--text-body-shorthand-large',    figmaStyleId: 'S:e57e8c9e74747abcef85ba839a67ae3bb9fd3127,' },
  'text-body-medium':          { cssVar: '--text-body-shorthand-medium',   figmaStyleId: 'S:5cd733d2bcbf2bc81ac82f5d89434da7af618bed,' },
  'text-body-medium-bold':     { cssVar: '--text-body-shorthand-medium',   figmaStyleId: 'S:c61194762f47e3c58f3456b22f38737a9e52c67e,' },
  'text-body-small':           { cssVar: '--text-body-shorthand-small',    figmaStyleId: 'S:64e1ebcc912a982e2e6aeb3e28074713c1dba1f9,' },
  'text-body-small-bold':      { cssVar: '--text-body-shorthand-small',    figmaStyleId: 'S:1e4fd38064c19520951155fe1f22f0930b3b90ca,' },
  'text-caption':              { cssVar: '--text-caption-shorthand',       figmaStyleId: 'S:74fedbcff001581e496299a5ee95a4417a401244,' },
  'text-link-large':           { cssVar: '--text-body-shorthand-large',    figmaStyleId: 'S:dcd930e3a6eb217dd2d8f2ea996b49ec31c1b522,' },
  'text-link-medium':          { cssVar: '--text-body-shorthand-medium',   figmaStyleId: 'S:48c3b33b6fc88d626c2a14cb6b60188f2645ac3f,' },
  'text-link-small':           { cssVar: '--text-body-shorthand-small',    figmaStyleId: 'S:48d689db3856f0f7cb1784cdd2befddcaf861d32,' },
} as const

export type TextStyleKey = keyof typeof typography

// Helper to apply in React components via sx prop
export const textStyle = (key: TextStyleKey) => ({
  font: `var(${typography[key].cssVar})`
})
