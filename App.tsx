import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from '@/contexts/ThemeContext'
import {Header} from '@/components/layout/Header'
import {Footer} from '@/components/layout/Footer'
import {HomePage} from '@/pages/HomePage'
import {CalculatorPage} from '@/pages/CalculatorPage'
import {SearchPage} from '@/pages/SearchPage'
import {AboutPage} from '@/pages/AboutPage'
import {ContactPage} from '@/pages/ContactPage'
import {PrivacyPage} from '@/pages/PrivacyPage'

export default function App() {
 return (
  <ThemeProvider>
   <Router>
    <div className="min-h-screen bg-background text-foreground">
     <Header />
     <main className="flex-1">
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/calc/:id" element={<CalculatorPage />} />
       <Route path="/search" element={<SearchPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
     </main>
     <Footer />
    </div>
   </Router>
  </ThemeProvider>
 )
}