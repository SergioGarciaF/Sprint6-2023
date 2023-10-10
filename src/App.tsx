
import { ChangeEvent } from "react"
import Routes from "./application/Routes"

function App() {

  

  return (
    <>
        <Routes seoChecked={false} adsChecked={false} webChecked={false} handleSeoChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.")
      } } handleAdsChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.")
      } } handleWebChange={function (e: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.")
      } } handleMinusPage={function (): void {
        throw new Error("Function not implemented.")
      } } handlePlusPage={function (): void {
        throw new Error("Function not implemented.")
      } } handleMinusLang={function (): void {
        throw new Error("Function not implemented.")
      } } handlePlusLang={function (): void {
        throw new Error("Function not implemented.")
      } } page={0} language={0} total={0} />
    </>
  )
}

export default App
