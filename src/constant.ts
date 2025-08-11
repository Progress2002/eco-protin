import ENTOPACImg from "./assets/images/ENTOPAC-img.jpg";
import ENTOImg from "./assets/images/ENTO+-img.jpg";
import FISHFEEDImg from "./assets/images/FISH-FEED-img.jpg";
import GROWERFEEDImg from "./assets/images/Grower-Feed-img.png";
import BigFisgImg from "./assets/images/Big-fish-img.webp";
import PoultryFarmImg from "./assets/images/Poultry-farm.webp";
import ChikenImg from "./assets/images/Chiken.png";
import SoilImg from "./assets/images/Soil.webp";
import EquipmentImg from "./assets/images/Equipment.webp";

interface Route {
  name: string;
  path: string;
}

export const ROUTES: Route[] = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Our Products",
    path: "products",
  },
  {
    name: "Our Services",
    path: "services",
  },
  {
    name: "About",
    path: "about",
  },
];

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PRODUCTS: CardProps[] = [
  {
    title: "ENTOPAC",
    description:
      "An affordable bsf larvae meal (58% crude protein), fresh or dried. A powerful alternative to fishmeal, ideal for catfish, poultry, and pigs.It comes in 25 kg and 50 kg bags",
    imageUrl: ENTOPACImg,
  },
  {
    title: "ENTO+",
    description:
      "A fortified BSF-based protein concentrate tailored for broilers and layers. When combined with maize, it forms a complete, high-performance poultry feed. This also comes in a 50kg bag",
    imageUrl: ENTOImg,
  },
  {
    title: "FISH FEED",
    description: `Our high-performance black soldier fly (BSF)-based fish feed is scientifically formulated to support the full growth cycle of catfish and tilapia, from hatchling to harvest. Packed with sustainable, digestible protein and essential nutrients, our feed delivers optimal results in growth, feed conversion, and fish health. Starter Feed Designed for fingerlings and juvenile fish, our Starter Feed provides the high protein and micronutrient density essential for early development, immunity building, and survival rates. It promotes strong skeletal formation and prepares your fish for robust growth`,
    imageUrl: FISHFEEDImg,
  },
  {
    title: "Grower Feed",
    description:
      "Our Grower Feed supports mid-phase development, focusing on efficient feed conversion, lean muscle growth, and reduced feed waste. It's tailored to maximize weight gain while keeping water quality stable—ensuring healthier stock and lower production costs.",
    imageUrl: GROWERFEEDImg,
  },
  {
    title: "Finisher Feed",
    description:
      "Formulated for the final stage of fish rearing, the Finisher Feed enhances flesh quality, fat balance, and market readiness. It ensures your fish reach optimal size and taste profile while maintaining feed efficiency right up to harvest.",
    imageUrl: BigFisgImg,
  },
];

export const SERVICES: CardProps[] = [
  {
    title: "Products Animal Nutrition Advisory",
    description: `Our team offers tailored **nutrition guidance** for poultry, pigs, fish, and other livestock ensuring you get the best performance from your feed investment.`,
    imageUrl: PoultryFarmImg,
  },
  {
    title: "Trainings",
    description: `We provide hands-on training in **BSFL farming**, circular agriculture, and waste-to-feed systems. Whether you're a beginner or scaling up, we will equip you with the skills to succeed.`,
    imageUrl: ChikenImg,
  },
  {
    title: "Farm Diagnostic Services",
    description: `Facing poor growth, production losses, or unexplained livestock issues? Our **on-site farm assessments** help diagnose problems and recommend actionable, data-driven solutions.`,
    imageUrl: PoultryFarmImg,
  },
  {
    title: "Soil Testing & Advisory",
    description: `Healthy soil is the foundation of any successful farm. We offer **comprehensive soil testing** and follow-up advisory to improve fertility, crop yields, and long-term sustainability.`,
    imageUrl: SoilImg,
  },
  {
    title: "BSF Farming Equipment Supply",
    description: `We supply durable, efficient **black soldier fly farming equipment** to individuals and organizations looking to set up or scale BSF operations whether for waste management, feed production, or commercial farming`,
    imageUrl: EquipmentImg,
  },
];
