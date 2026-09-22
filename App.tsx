import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
import { Problem } from "./Problem"
import { HowItHelps } from "./HowItHelps"
import { ProductPreview } from "./ProductPreview"
import { Audience } from "./Audience"
import { Benefits } from "./Benefits"
import { FinalCTA } from "./FinalCTA"
import { FAQ } from "./FAQ"
import { Footer } from "./Footer"
import { MobileStickyCTA } from "./MobileStickyCTA"

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 text-sm font-medium text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Problem />
        <HowItHelps />
        <ProductPreview />
        <Audience />
        <Benefits />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}
