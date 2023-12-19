import { Layout } from "antd";
import Image from "next/image";
import "./index.scss";


const { Footer: AntdFooter } = Layout;


export default function Footer() {
    

    return (
        <AntdFooter id="Footer">
            {/* <h1>Footer</h1> */}
            <div className="footer-content">
                <div className="logo">
                    <div className="img">
                        <Image src="/images/img/logo-white.png" width={130} height={30} alt="footer logo" />
                    </div>
                    <p>You are what you build.</p>
                </div>
                <ul className="links">
                    <a href="https://dune.com/decertme/decert">Dune</a>
                    <a href="https://decert.notion.site/Decert-me-741858476c314063835abf9cdc4758d3">Notion</a>
                    <a href="https://twitter.com/decertme">Twitter</a>
                    <a href="https://discord.gg/kuSZHftTqe">Discord</a>
                    <a href="https://github.com/decert-me">Github</a>
                </ul>
            </div>
            <div className="footer-record">
                <span className="versions">© 2023 DeCert.me | </span>
                <a href="https://beian.miit.gov.cn/" target="_blank"><span className='versions' style={{color: "#fff"}}>粤ICP备17140514号-3</span></a>
            </div>
        </AntdFooter>
    )
}