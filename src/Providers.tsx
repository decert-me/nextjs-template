'use client'

import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from "./utils/wagmi";




export default function Providers({ children }: { children: React.ReactNode }) {
    
    return (
        <WagmiConfig config={wagmiConfig}>
            {children}
        </WagmiConfig>
    )
}