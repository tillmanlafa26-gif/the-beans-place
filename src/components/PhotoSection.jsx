import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import ScrollReveal from "./ui/ScrollReveal";
import bagColombia from "../assets/Colombian-Supremo-Bag.png";
import bagEthiopia from "../assets/Ethiopian-Harrar-Bag.png";
import bagsPhoto from "../assets/coffee_bags_sale.jpeg";
import baristaPhoto from "../assets/store_barista.jpeg";
const scenes = [{ title: "The kitchen table", caption: "Slow mornings start here.", image: bagsPhoto, bag: bagColombia }, { title: "Your coffee bar", caption: "A better ritual, within reach.", image: baristaPhoto, bag: bagEthiopia }, { title: "Fresh from the roaster", caption: "Roasted for the moment it matters.", image: bagsPhoto, bag: bagEthiopia }];
export default function PhotoSection() { return <section className="photo-section" aria-labelledby="photo-section-title"><div className="photo-section-heading"><ScrollReveal animation="fadeUp"><Badge variant="accent">Brewed Into Life</Badge></ScrollReveal><ScrollReveal animation="fadeUp" delay={0.1}><h2 id="photo-section-title">Good coffee <span>belongs everywhere.</span></h2></ScrollReveal><ScrollReveal animation="fadeUp" delay={0.15}><p>From the first pour at home to the last cup at the bar, bring the roastery feeling with you.</p></ScrollReveal></div><div className="photo-grid">{scenes.map((scene, index) => <motion.article className={`photo-scene photo-scene-${index + 1}`} key={scene.title} whileHover={{ y: -8 }}><img className="photo-scene-background" src={scene.image} alt="" /><div className="photo-scene-overlay" /><img className="photo-scene-bag" src={scene.bag} alt="Coffee bag" /><div className="photo-scene-copy"><p>0{index + 1}</p><h3>{scene.title}</h3><span>{scene.caption}</span></div></motion.article>)}</div></section>; }
