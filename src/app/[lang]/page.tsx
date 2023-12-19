import LocaleSwitcher from '@/components/locale-switcher'
import { getDictionary } from '@/get-dictionary'
import { ConfigProvider } from 'antd'

export default async function Home({ params: { lang } }: { params: { lang: "en" | "zh-CN" } }) {

  const dict = await getDictionary(lang)

  return (
    <ConfigProvider>
      <div className="Home">
        <LocaleSwitcher />
        {dict.hello}
      </div>
    </ConfigProvider>
  )
}
