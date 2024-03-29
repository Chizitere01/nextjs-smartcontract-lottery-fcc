// import '@/styles/globals.css'
import styles from "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializedOnMount={false}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}
