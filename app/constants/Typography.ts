const Typography = {
  heading: {
    fontSize: 24,
    fontWeight: 'bold' as const,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal' as const,
  },
  caption: {
    fontSize: 12,
  },
} as const;

export default Typography;