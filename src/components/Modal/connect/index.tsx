import React from "react";
import { Button, Modal } from "antd";
import { useAccount, useConnect } from "wagmi";
import { useIsMounted } from "@/hooks";
import Image from "next/image";



export default function ModalConnect({isModalOpen, handleCancel}:
{
    isModalOpen: boolean,
    handleCancel: Function
}    
) {
    const isMounted = useIsMounted();
    const { connector, isReconnecting } = useAccount({
        onConnect() {
            handleCancel()
        }
    })
    const { connect, connectors } = useConnect({
        chainId: 80001
    });

    function goConnect(x: any) {
        if (x.name === "WalletConnect") {
            handleCancel()
        }
        connect({ connector: x })
    }

    return (
        <Modal
            className="ModalConnect" 
            open={isModalOpen}
            onCancel={() => handleCancel()}
            footer={null}
            width={500}
            centered
            title="Connect your wallet."
        >
            {
                connectors.map((x,i) => (
                    // Wallet(x, i)
                    // i === 1 ? 
                    // <React.Fragment key={i}>
                    //     <WalletMultiButton>
                    //         <div className="wallet-item">
                    //             <div className="item">
                    //                 <div className="img">
                    //                     <img src={(require("@/assets/images/img/Solana.png"))} alt="" />
                    //                 </div>
                    //                 <p className="name">
                    //                     Solana Wallet
                    //                 </p>
                    //             </div>
                    //         </div>
                    //     </WalletMultiButton>
                    //     <div
                    //         key={x.name}
                    //         className="wallet-item"
                    //         disabled={!x.ready || isReconnecting || connector?.id === x.id}
                    //         onClick={() => goConnect(x)}
                    //     >
                    //         <div className="item">
                    //             <div className="img">
                    //                 {
                    //                     x.name === 'MetaMask' ? 
                    //                         <img src={require("@/assets/images/img/MetaMask.png")} alt="" />
                    //                         :
                    //                         <img src={require("@/assets/images/img/WalletConnect.png")} alt="" />
                    //                 }
                    //             </div>
                    //             <p className="name">
                    //                 {x.id === 'injected' ? (isMounted ? x.name : x.id) : x.name}
                    //             </p>
                    //         </div>
                    //     </div>
                    // </React.Fragment>
                    // :
                    <Button
                        key={x.name}
                        className="wallet-item"
                        disabled={!x.ready || isReconnecting || connector?.id === x.id}
                        onClick={() => goConnect(x)}
                    >
                        <div className="item">
                            <div className="img">
                                {
                                    x.name === 'MetaMask' ? 
                                        <Image width={40} height={37.26} src="/images/img/wallet-MetaMask.png" alt="MetaMask" />
                                        :
                                        <Image width={40} height={26.14} src="/images/img/wallet-WalletConnect.png" alt="WalletConnect" />
                                }
                            </div>
                            <p className="name">
                                {x.id === 'injected' ? (isMounted ? x.name : x.id) : x.name}
                            </p>
                        </div>
                    </Button>
                ))
            }
        </Modal>
    )
}