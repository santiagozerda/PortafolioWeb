import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
 
export default function Home() {
  return (
    <div id="section">
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}
