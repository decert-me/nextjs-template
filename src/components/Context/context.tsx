'use client'
import { createContext } from "react";

const PublicContext = createContext<{ showConnectModal: () => void, isMobile: boolean } | null>(null);


export default PublicContext;