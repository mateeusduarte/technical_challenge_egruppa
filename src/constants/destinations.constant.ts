import { TDestination } from "@/types/destinations.types";

const DESTINATIONS: TDestination[] = [
  {
    id: 1,

    title: "Barça Game Experience!",

    price: 500,

    length: 5,

    previousPrice: 800,

    imageUrl: "/barca-game.jpeg",

    description: "Immerse yourself in the thrill of a live Barcelona FC game.",
  },
  {
    id: 2,

    title: "Last Nadal Season!",

    price: 1500,

    length: 6,

    previousPrice: 2800,

    imageUrl: "/last-nadal-season.avif",

    description: "Witness the final season of Rafael Nadal's legendary career.",
  },
  {
    id: 3,

    title: "New Berbabeu Experience!",

    price: 880,

    length: 3,

    previousPrice: 1300,

    imageUrl: "/new-bernabeu-experience.jpeg",

    description: "Explore the newly renovated Bernabeu Stadium.",
  },
  {
    id: 4,

    title: "Snowboard at Sierra Nevada",

    price: 930,

    length: 9,

    previousPrice: 2000,

    imageUrl: "/sierra-nevada-snowboard.jpeg",

    description:
      "Conquer the slopes of Sierra Nevada in a 9-day snowboarding adventure.",
  },
  {
    id: 5,

    title: "Women Worldcup Adventure",

    price: 3000,

    length: 5,

    previousPrice: 4200,

    imageUrl: "/women-worldcup.jpeg",

    description: "Experience the excitement of the Women's World Cup.",
  },
];

export default DESTINATIONS;
