import About from '@/components/about';
import AboutMe from '@/components/aboutMe';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Photos from '@/components/photos';
import Services from '@/components/services';

export default function Home() {
    return (
      <div>
        <Hero />
        <About />
        <Services />
        <Photos />
        <AboutMe />
        <Footer />
      </div>
    );
}
