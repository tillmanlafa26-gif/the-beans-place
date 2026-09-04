import { useState } from "react";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import NavBar from "./components/NavBar";
import RibbonTicker from "./components/RibbonTicker";
import FeaturesSection from "./components/FeaturesSection";
import ProductShowCase from "./components/ProductShowcase";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import ContactSection from "./components/ContactSection";
import CartSidebar from "./components/CartSidebar";
import PhotoSection from "./components/PhotoSection";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.name === product.name);
      return existingItem ? items.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };
  const updateQuantity = (name, change) => setCartItems((items) => items.map((item) => item.name === name ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0));
  return (
    <div className="app">
      <NavBar onCartOpen={() => setCartOpen(true)} cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <section className="hero bg-hero" id="home"><div className="hero-grid"><HeroSection /></div></section>
      <RibbonTicker />
      <FeaturesSection />
      <section className="bg-cta" id="shop"><ProductShowCase onAddToCart={addToCart} /></section>
      <PhotoSection />
      <section className="bg-cta"><CtaSection /></section>
      <section className="bg-cta" id="about"><AboutSection /></section>
      <section className="bg-cta" id="contact"><ContactSection /></section>
      <section className="bg-footer"><FooterSection /></section>
      <CartSidebar items={cartItems} open={cartOpen} onClose={() => setCartOpen(false)} onUpdateQuantity={updateQuantity} />
    </div>
  );
}
