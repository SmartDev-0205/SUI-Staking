import './layout.scss'
import { Header } from './header'

export const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper flex flex-col gap-50 px-[8vw] pt-60 md:pt-80 lg:pt-90 pb-50">
      <div />
      <Header />
      {children}
    </div>
  )
}