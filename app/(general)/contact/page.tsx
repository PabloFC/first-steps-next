import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Esta es la página de contacto",
 
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl">Contact page</span>
    </>
  );
}
