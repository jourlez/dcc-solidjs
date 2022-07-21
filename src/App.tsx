import 'uno.css'
import Title from './Title'
import Footer from './Footer'
import LanguageSwitcher from './LanguageSwitcher'
import DarkToggle from './DarkToggle'
import Login from './Login'
import { HopeThemeConfig, HopeProvider } from '@hope-ui/solid'
import { createEffect, createSignal, Show } from 'solid-js'
import TypesafeI18n from './i18n/i18n-solid'
import { loadLocaleAsync } from './i18n/i18n-util.async'
//import { localStorageDetector } from 'typesafe-i18n/detectors'
//import { detectLocale } from './i18n/i18n-util'

const detectedLocale = 'en'//detectLocale(localStorageDetector)
const config: HopeThemeConfig = {
	initialColorMode: "system"
  }
  
function App() {
	const [wasLoaded, setWasLoaded] = createSignal(false)

	createEffect(() => {
		loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true))
	})
	
	return (
		<Show when={wasLoaded()}>
			<TypesafeI18n locale={detectedLocale}>
				<HopeProvider config={config}>
					<div class="App">
						<div class="m-1 flex gap-2 float-right">
							<LanguageSwitcher />
							<DarkToggle/>
							<a href="https://github.com/jourlez/dcc-solid" target="_blank" class="text-sky-500 i-carbon-logo-github"/>
						</div>
						<div
						class="
							flex flex-col
							items-center
							text-center
							justify-center
							w-full
							h-screen
							"
							>
							<Title />
							<Login />
							<Footer />
						</div>
					</div>
				</HopeProvider>
			</TypesafeI18n>
		</Show>
	)
}

export default App
