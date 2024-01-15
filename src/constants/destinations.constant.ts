import { TDestination } from "@/types/destinations.types";

const DESTINATIONS: TDestination[] = [
  {
    id: 1,
    title: "¡Experiencia de Juego del Barça!",
    price: 500,
    length: 5,
    previousPrice: 800,
    imageUrl: "/barca-game.jpeg",
    description:
      "Sumérgete en la emoción de un partido en vivo del Barcelona FC.",
  },
  {
    id: 2,
    title: "¡Última Temporada de Nadal!",
    price: 1500,
    length: 6,
    previousPrice: 2800,
    imageUrl: "/last-nadal-season.avif",
    description:
      "Presencia la última temporada de la legendaria carrera de Rafael Nadal.",
  },
  {
    id: 3,
    title: "¡Nueva Experiencia en el Bernabéu!",
    price: 880,
    length: 3,
    previousPrice: 1300,
    imageUrl: "/new-bernabeu-experience.jpeg",
    description: "Explora el recién renovado Estadio Bernabéu.",
  },
  {
    id: 4,
    title: "Snowboard en Sierra Nevada",
    price: 930,
    length: 9,
    previousPrice: 2000,
    imageUrl: "/sierra-nevada-snowboard.jpeg",
    description:
      "Conquista las pistas de Sierra Nevada en una aventura de snowboard de 9 días.",
  },
  {
    id: 5,
    title: "Aventura en la Copa Mundial Femenina",
    price: 3000,
    length: 5,
    previousPrice: 4200,
    imageUrl: "/women-worldcup.jpeg",
    description: "Vive la emoción de la Copa Mundial Femenina.",
  },
];

export default DESTINATIONS;
