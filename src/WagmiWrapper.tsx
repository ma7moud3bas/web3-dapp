import { ReactNode } from 'react'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { mainnet, goerli, polygon } from "wagmi/chains"
import { publicProvider } from 'wagmi/providers/public'

const supportedChains = [mainnet, goerli, polygon]

const { chains, provider, webSocketProvider } = configureChains(
    [...supportedChains],
    [publicProvider()],
)

const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
})

type Props = {
    children: ReactNode
}

export default function WagmiWrapper({ children }: Props) {
    return (
        <WagmiConfig client={client}>
            {children}
        </WagmiConfig>
    )
}