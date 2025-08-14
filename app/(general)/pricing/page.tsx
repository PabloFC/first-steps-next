import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'princing page',
 description: 'Esta es la pagina de precios',

};


export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">Pricing page</span>
    </>
  );
}
