import Header from '../components/Header'
import Hero from '../components/Hero'
import ResultsLookup from '../components/ResultsLookup'
import PricingSection from '../components/PricingSection'
import ProcessSteps from '../components/ProcessSteps'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <section id="results" className="section">
          <ResultsLookup />
        </section>
        <section id="pricing" className="section section--dark">
          <PricingSection />
        </section>
        <section id="process" className="section section--dark">
          <ProcessSteps />
        </section>
        <section id="contact" className="section">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home



