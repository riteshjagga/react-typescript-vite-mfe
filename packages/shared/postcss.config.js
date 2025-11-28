import tailwindcss from '@tailwindcss/postcss'

export default {
  plugins: [
    tailwindcss({
      base: path.resolve(__dirname, '../../../'),
    }),
  ],
}
