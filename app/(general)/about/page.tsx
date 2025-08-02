import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords:['about', 'pablo', 'info'],
};

export default function AboutPage() {
  return (
      <span className="text-5xl">About page</span>
  );
}