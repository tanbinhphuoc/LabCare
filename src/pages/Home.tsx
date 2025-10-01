import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import QuickGuide from '../components/QuickGuide'
import Announcements from '../components/Announcements'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ChatbotButton from '../components/ChatbotButton'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <section id="features" className="section section--alt">
          <div className="container">
            <FeatureGrid />
          </div>
        </section>
        <section id="guide" className="section">
          <div className="container">
            <QuickGuide />
          </div>
        </section>
        <section id="announcements" className="section section--alt">
          <div className="container">
            <Announcements />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  )
}

export default Home



