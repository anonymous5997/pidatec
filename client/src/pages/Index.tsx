import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
      <About />
      <Courses />
      <WhyChoose />
      <Testimonials />
      <CTA />
        <Footer />
      </main>
    </>
  );
}
