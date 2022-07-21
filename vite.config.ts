import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Unocss from 'unocss/vite';
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  plugins: [
	solidPlugin(),
	Unocss({
		presets: [
			presetUno(),
			presetIcons({
			scale: 1.3,
			}),
		],
	}),
],
});