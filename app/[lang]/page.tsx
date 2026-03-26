import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import ScrollProgress from "./_components/scroll-progress";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import StatsCounters from "./_components/stats-counters";
import Services from "./_components/services";
import BeforeAfter from "./_components/before-after";
import Pricing from "./_components/pricing";
import About from "./_components/about";
import GalleryStrip from "./_components/gallery-strip";
import Reviews from "./_components/reviews";
import GoogleReviews from "./_components/google-reviews";
import Faq from "./_components/faq";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import QuoteBar from "./_components/quote-bar";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollProgress />
      <Navbar dict={dict.navbar} lang={lang} />
      <main id="main">
        <Hero dict={dict.hero} />
        <StatsCounters dict={dict.statsCounters} />
        <Services dict={dict.services} />
        <BeforeAfter dict={dict.beforeAfter} />
        <Pricing dict={dict.pricing} />
        <About dict={dict.about} />
        <GalleryStrip dict={dict.galleryStrip} />
        <Reviews dict={dict.reviews} />
        <GoogleReviews dict={dict.googleReviews} />
        <Faq dict={dict.faq} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
      <QuoteBar dict={dict.quoteBar} />
    </>
  );
}
