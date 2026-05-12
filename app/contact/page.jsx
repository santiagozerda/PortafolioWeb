import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl mb-6">Contacto</h1>
        <ContactForm />
      </div>
    </div>
  );
}