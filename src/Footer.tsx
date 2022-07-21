import { useI18nContext } from './i18n/i18n-solid'

function Footer() {
	const { LL } = useI18nContext()

	return (
        <footer
            class="fixed bottom-8 w-full h-6 flex items-center justify-center gap-2"
        >
                {LL().footer.poweredby()}
            <a
            class="
                flex
                items-center
                gap-2
                no-underline
                font-semibold
            "
            href="https://decentralchain.io/"
            target="_blank"
            >
            <img
                alt="DCC"
                src="https://raw.githubusercontent.com/jourlez/ride/master/examples/03/public/favicon.ico"
                class="w-5"
            />
                {LL().footer.decentralchain()}
            </a>
        </footer>
	)
}

export default Footer