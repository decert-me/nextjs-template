import { polygonMumbai, polygon } from 'viem/chains'
import { configureChains, createConfig } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { publicProvider } from 'wagmi/providers/public'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon, ...(process.env.NODE_ENV === 'development' ? [polygonMumbai] : [])],
  [publicProvider()],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    })
  ],
  publicClient,
  webSocketPublicClient,
})