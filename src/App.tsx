import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Properties from './components/sections/Properties';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <Navbar />
        <main>
          <Hero />
          <Properties />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
