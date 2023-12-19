"use client";
import ModalConnect from "@/components/Modal/connect";
import { useEffect, useState } from "react";
import PublicContext from "./context";


export default function ContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isShowConnectModal, setIsShowConnectModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    function showConnectModal() {
        setIsShowConnectModal(true);
    }

    // 移动端样式检测
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // 初始化时执行一次

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <PublicContext.Provider value={{ showConnectModal, isMobile }}>
            <ModalConnect
                isModalOpen={isShowConnectModal}
                handleCancel={() => setIsShowConnectModal(false)}
            />
                {children}
        </PublicContext.Provider>
    );
}
