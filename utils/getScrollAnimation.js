export default function getScrollAnimation() {
  return {
    offscreen: {
      y: 40,
      opacity: 0,
    },
    onscreen: ({ duration = 1.2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
      },
    }),
  }
}
