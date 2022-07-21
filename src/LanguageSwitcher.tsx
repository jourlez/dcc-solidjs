import { JSX } from 'solid-js'
import { useI18nContext } from './i18n/i18n-solid'
import type { Locales } from './i18n/i18n-types'
import { locales } from './i18n/i18n-util'
import { loadLocaleAsync } from './i18n/i18n-util.async'

function LanguageSwitcher() {
	const { setLocale } = useI18nContext()
	const onLocaleSelected: JSX.DOMAttributes<HTMLSelectElement>['onChange'] = async ({ target }) => {
		const locale = (target as HTMLInputElement).value as Locales
		localStorage.setItem('lang', locale)
		await loadLocaleAsync(locale)
		setLocale(locale)
	}

	return (
        <select onChange={onLocaleSelected} 
            class="
                    text-white
                    bg-sky-500
                    dark:bg-sky-500
                    i-fa-language
                ">
                {locales.map((loc) => (
                    <option class="bg-neutral" value={loc}>
                        {loc}
                    </option>
                ))}
        </select>
	)
}

export default LanguageSwitcher
