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

        <section id="about">
          <About />
        </section>

        {/* Featured Courses */}
        <section id="featured-courses">
          <Courses />
        </section>

        <section id="why-choose">
          <WhyChoose />
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <Testimonials />
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
