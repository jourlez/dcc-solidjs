import {
    Signer
} from '@decentralchain/signer'
import {
    ProviderWeb
} from '@waves.exchange/provider-web'
import { createEffect, createResource, createSignal } from 'solid-js'
import { useI18nContext } from './i18n/i18n-solid'

let signer: Signer
let provider: ProviderWeb

signer = new Signer({
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
})//https://mainnet-node.decentralchain.io
//https://nodes-testnet.wavesnodes.com
provider = new ProviderWeb('https://testnet.waves.exchange/signer/')
signer.setProvider(provider)

function Login() {
    const { LL, locale } = useI18nContext()
    const [loginButtonText, setLoginButtonText] = createSignal(LL().login.login());
    const [userLocale, setUserLocale] = createSignal(locale);

    createResource(userLocale(), () => setLoginButtonText(LL().login.login()));

    let isAuthenticated = false
    
    async function callSigner() {
        if (isAuthenticated == false) {
            setLoginButtonText(LL().login.logging())
            try {
                const userData = await signer.login()
                setLoginButtonText(LL().login.logged({ address: userData.address }))
                isAuthenticated = true
            } catch (error) {
                setLoginButtonText(LL().login.login())
            }
        } 
    }
    
	return (
        <button onClick={callSigner}
        class="
            m-3
            px-4
            py-1
            rounded
            border-none
            bg-sky-500
            hover:bg-sky-600
            text-sm text-white
            ">
            {loginButtonText()}
        </button>
        
	)
}

export default Login