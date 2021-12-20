export const sumTotal = (value) => (
  value.map(item => item.abv).reduce((a, b) => (a + b), 0)
)