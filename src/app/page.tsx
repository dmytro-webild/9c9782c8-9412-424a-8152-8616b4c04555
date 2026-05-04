"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Calendar, CheckCircle, DollarSign, ShieldCheck, Star, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Etris HVAC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="20+ Years of Expert HVAC Care for Your Gainesville Home"
      description="Stay Comfortable Year-Round — Fast, Reliable HVAC Service. From emergency repairs to full system installs, we deliver expert comfort solutions."
      buttons={[
        {
          text: "Call Now",          href: "tel:6787256501"},
        {
          text: "Book Service Online",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hvac-technician-servicing-outdoor-unit_482257-12345.jpg"
      imageAlt="Professional HVAC technician servicing unit"
    />
  </div>

  <div id="why-choose" data-section="why-choose">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: CheckCircle,
          title: "Same-Day Service",          description: "We provide rapid response times for all your urgent HVAC needs."},
        {
          icon: ShieldCheck,
          title: "Licensed & Insured",          description: "Rest easy knowing your property is in professional, capable hands."},
        {
          icon: DollarSign,
          title: "Upfront Pricing",          description: "Transparent quotes with no hidden fees or surprises."},
        {
          icon: Zap,
          title: "Energy-Efficient",          description: "Expert solutions to save you money and keep your home comfortable."},
        {
          icon: Star,
          title: "5-Star Experience",          description: "Consistently professional service backed by customer satisfaction."},
      ]}
      title="Built Different. Built Better."
      description="We don’t just fix HVAC systems — we deliver peace of mind. Here is why Gainesville trusts us."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Furnace Repair",          price: "Expert Service",          variant: "Heating",          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-feeling-unwell-coughing-while-working-factory-coronavirus-pandemic_637285-12055.jpg"},
        {
          id: "2",          name: "AC Replacement",          price: "High Efficiency",          variant: "Cooling",          imageSrc: "http://img.b2bpic.net/free-photo/technician-looking-freon-leaks_482257-92791.jpg"},
        {
          id: "3",          name: "Duct Cleaning",          price: "Breathe Better",          variant: "Air Quality",          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-man-holding-tablet-standing-looking-away-cropped-side-view-caucasian-courier-red-uniform-looking-required-address-selective-focus-delivery-service-post-concept_74855-12024.jpg"},
        {
          id: "4",          name: "Heat Pump Service",          price: "Professional",          variant: "Heating",          imageSrc: "http://img.b2bpic.net/free-photo/seasoned-mechanic-removing-layer-dirt-from-blower-fan-prevent-damaging-ventilation-system-adept-repairman-cleaning-hvac-system-parts-stop-risk-overheating-close-up_482257-67998.jpg"},
        {
          id: "5",          name: "Tune-Ups",          price: "Maintenance",          variant: "Cooling",          imageSrc: "http://img.b2bpic.net/free-photo/repairmen-taking-apart-hvac-system_482257-92028.jpg"},
        {
          id: "6",          name: "Humidity Control",          price: "Customized",          variant: "Air Quality",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-young-asian-woman-cooking-dinner-making-herself-sandwitch-smiling-while-standing_1258-191643.jpg"},
      ]}
      title="Comprehensive Comfort Services"
      description="Expert HVAC care from installations to maintenance."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Your Local Comfort Experts"
      metrics={[
        {
          icon: Calendar,
          label: "Years in Business",          value: "20+"},
        {
          icon: Users,
          label: "Happy Clients",          value: "500+"},
        {
          icon: Award,
          label: "Certified Techs",          value: "15+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cute-girl-looking-away_23-2148436134.jpg"},
        {
          id: "2",          name: "Mark D.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-caucasian-guy-dating-afro-american-girl_1262-19996.jpg"},
        {
          id: "3",          name: "Elena R.",          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2543.jpg"},
        {
          id: "4",          name: "David L.",          imageSrc: "http://img.b2bpic.net/free-photo/trendy-students-taking-photo_23-2147655789.jpg"},
        {
          id: "5",          name: "Jennifer K.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-pretty-caucasian-woman-sitting-armchair-designed-living-room-looking-showing-thumb-up-doing-money-gesture_141793-58035.jpg"},
      ]}
      cardTitle="Client Reviews"
      cardTag="5-Star Service"
      cardAnimation="slide-up"
    />
  </div>

  <div id="financing" data-section="financing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Flexible",          price: "Low Monthly",          subtitle: "Budget friendly",          features: [
            "Easy application",            "Low interest rates",            "Quick approval"],
        },
        {
          id: "pro",          badge: "Popular",          price: "Interest Free",          subtitle: "Top choice",          features: [
            "Zero down payment",            "Flexible terms",            "Approval in minutes"],
        },
      ]}
      title="Comfort Now. Pay Over Time."
      description="Flexible financing options available on new systems and major repairs."
    />
  </div>

  <div id="emergency" data-section="emergency">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal"}}
      text="HVAC emergency? We’re on the way. 24/7 emergency availability for urgent heating & cooling issues."
      buttons={[
        {
          text: "Call Now for Help",          href: "tel:6787256501"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="Ready to get comfortable? Request your service or free estimate today."
      buttons={[
        {
          text: "Request Service",          href: "mailto:corey.etris@hotmail.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/full-length-photo-thoughtful-entrepreneur-nightwear-makes-notes-working-plan-notepad-looks-pensively-aside-stands-spacious-room-near-window_273609-19062.jpg"
      logoText="Etris Heating & Air"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Heating",              href: "#services"},
            {
              label: "Cooling",              href: "#services"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "24/7 Emergency",              href: "tel:6787256501"},
            {
              label: "Financing",              href: "#financing"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
