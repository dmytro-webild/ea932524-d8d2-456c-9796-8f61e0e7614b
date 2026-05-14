"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Angelica's Veracruz"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "plain",
      }}
      title="Authentic Flavors of Veracruz"
      description="Experience the traditional culinary heritage of Veracruz right in your neighborhood. Fresh ingredients and time-honored recipes."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-mexican-food-ready-be-served_23-2148614398.jpg",
          imageAlt: "authentic mexican seafood cuisine",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-room-inside-bran-castle-romania_1268-20824.jpg",
          imageAlt: "mexican restaurant atmosphere",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-colorful-candies-blue-background-with-copy-space_23-2148617435.jpg",
          imageAlt: "mexican food platter gourmet",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-fillet-placed-avocado-slices-sauce-topped-with-tomato-olive-fish-skin_141793-2237.jpg",
          imageAlt: "authentic mexican seafood cuisine",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/home-interior-decorated-brown-shades_23-2151934914.jpg",
          imageAlt: "mexican restaurant atmosphere",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="A Legacy of Tradition"
      description="Angelica's Veracruz Cuisine brings authentic coastal recipes passed down through generations. We use the freshest local seafood and traditional spices to create an unforgettable dining experience."
      metrics={[
        {
          value: "20+",
          title: "Years of Tradition",
        },
        {
          value: "50+",
          title: "Secret Recipes",
        },
        {
          value: "100%",
          title: "Fresh Ingredients",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-cooking-guacamole_23-2148471902.jpg"
      imageAlt="chef preparing mexican dish"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Seafood",
          description: "Caught locally, cooked authentically.",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-cup-garnish-with-nacho-near-mexican-food_23-2148181569.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "Authentic Drinks",
          description: "Refreshing house-made agua frescas.",
          imageSrc: "http://img.b2bpic.net/free-photo/spicy-michelada-beverage-composition_23-2149027803.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "Traditional Recipes",
          description: "Classic flavors of the Veracruz coast.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-fish-wooden-bottom_23-2148290495.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "Quality Spices",
          description: "Hand-picked herbs and authentic chilies.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chopped-red-cabbage-wood-board-cut-pupmkin-cut-green-tomatoes-cut-yellow-bell-peppers-bowls-white-surface_140725-63175.jpg",
          buttonIcon: "Zap",
        },
      ]}
      title="Why Choose Us"
      description="We take pride in every detail, ensuring your experience at Angelica's is truly special."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Signature",
          name: "Huachinango Veracruzano",
          price: "$28.00",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-meat-asparagus-with-mashed-potatoes-herbs-plate_141793-6108.jpg",
        },
        {
          id: "p2",
          brand: "Dessert",
          name: "Flan de Coco",
          price: "$9.00",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/topped-holiday-cake-from_23-2147760616.jpg",
        },
        {
          id: "p3",
          brand: "Entree",
          name: "Tacos de Camarón",
          price: "$18.00",
          rating: 4,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tacos-with-vegetables-meat_23-2148750434.jpg",
        },
        {
          id: "p4",
          brand: "Specialty",
          name: "Pescado al Mojo de Ajo",
          price: "$24.00",
          rating: 5,
          reviewCount: "110",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smoked-salmon-with-cucumber-onion-herbs-blue-plate_141793-6111.jpg",
        },
        {
          id: "p5",
          brand: "Appetizer",
          name: "Ensalada de Nopales",
          price: "$12.00",
          rating: 4,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-prune-carrot-tomato-walnut-garnished-with-beets-slices_140725-206.jpg",
        },
        {
          id: "p6",
          brand: "Side",
          name: "Arroz con Frijoles",
          price: "$6.00",
          rating: 5,
          reviewCount: "50",
          imageSrc: "http://img.b2bpic.net/free-photo/view-bowl-with-vegetables_23-2148751906.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Explore our curated selection of Veracruz specialties."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "100%",
          title: "Happy Guests",
          items: [
            "Dining experience",
            "Authentic service",
          ],
        },
        {
          id: "m2",
          value: "5k+",
          title: "Meals Served",
          items: [
            "Annual average",
            "Authentic Veracruz",
          ],
        },
        {
          id: "m3",
          value: "15+",
          title: "Staff Members",
          items: [
            "Dedicated team",
            "Expert knowledge",
          ],
        },
      ]}
      title="Culinary Excellence"
      description="Our passion for food shows in every detail."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Maria Garcia",
          handle: "@mariag",
          testimonial: "Authentic and fresh! Truly the best Veracruz cuisine I have ever tasted.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-having-lunch-restaurant_23-2150491815.jpg",
        },
        {
          id: "t2",
          name: "James Smith",
          handle: "@jamess",
          testimonial: "The atmosphere is incredible. It feels like eating at home in Mexico.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-enjoying-cafe-while-talking-waiter_637285-579.jpg",
        },
        {
          id: "t3",
          name: "Sofia Lopez",
          handle: "@sofial",
          testimonial: "My favorite neighborhood gem. Every bite is packed with tradition.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg",
        },
        {
          id: "t4",
          name: "David Wilson",
          handle: "@davidw",
          testimonial: "Fresh ingredients and exceptional service. Cannot recommend enough!",
          imageSrc: "http://img.b2bpic.net/free-photo/carefree-couple-enjoying-lunch-time-restaurant_637285-9035.jpg",
        },
        {
          id: "t5",
          name: "Elena Rodriguez",
          handle: "@elenar",
          testimonial: "The Huachinango Veracruzano is perfection. A must-try!",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-showing-thumb-up_1262-3024.jpg",
        },
      ]}
      title="Voices of Veracruz"
      description="See what our cherished guests have to say about their dining experience at Angelica's."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you accept reservations?",
          content: "Yes, we highly recommend booking in advance through our website.",
        },
        {
          id: "q2",
          title: "Are your ingredients locally sourced?",
          content: "We focus on local seafood and farm-to-table vegetables whenever possible.",
        },
        {
          id: "q3",
          title: "Do you offer catering services?",
          content: "Absolutely! We cater for all types of events and private parties.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-working-together-professional-kitchen_23-2149728004.jpg"
      title="Frequently Asked Questions"
      description="Have questions about our restaurant, reservations, or catering options?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Ready for a Culinary Journey?"
      description="Visit us at Angelica's Veracruz Cuisine for an authentic, traditional dining experience. Book your table today."
      buttons={[
        {
          text: "Book a Table",
          href: "#",
        },
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Reservations",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Angelica's Veracruz"
      copyrightText="© 2025 Angelica's Veracruz Cuisine"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
