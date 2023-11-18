import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['primary-color', 'text-amber-600'],
    ['primary-color-bg', 'bg-amber-600'],
    ['btn', 'px-4 py-1 rounded inline-block primary-color-bg text-white cursor-pointer !outline-none hover:bg-amber-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-300 ease-in-out hover:opacity-100 hover:primary-color'],
    ['flex-center', 'flex items-center justify-center'],
    ['flex-center-col', 'flex items-center justify-center flex-col'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
