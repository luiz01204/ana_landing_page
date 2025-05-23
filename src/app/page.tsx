import AboutMe from '@/components/aboutMe';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Photos from '@/components/photos';
import Services from '@/components/services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
    return (
      <div>
        <Hero />
        <AboutMe />
        <Services />
        <Photos />
        <Testimonials />
        <Footer />
      </div>
    );
}
