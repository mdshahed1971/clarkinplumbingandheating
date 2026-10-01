import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { Problems } from "@/components/site/Problems";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhyUs } from "@/components/site/WhyUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "C. Larkin Plumbing and Heating | Gas Safe Engineer, Washington";
const DESC =
  "Chris Larkin — Gas Safe registered heating engineer in Washington. Installations, services, repairs and CP12's across Newcastle, Durham, South Shields and Sunderland.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Problems />
        <BeforeAfter />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
