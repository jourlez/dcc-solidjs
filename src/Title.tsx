import { useI18nContext } from './i18n/i18n-solid'

function Title() {
	const { LL } = useI18nContext()

	return (
        <main>
            <h1 class="text-4xl font-bold">{LL().messages.title()}</h1>
            <p class="mt-2 text-lg">
            {LL().messages.description()}
            </p>
        </main>
        
	)
}

export default Title