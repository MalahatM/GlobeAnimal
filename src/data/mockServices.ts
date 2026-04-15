import furryPawsImage from "../assets/images/service/furry-paws-grooming.jpg";
import happyTailsImage from "../assets/images/service/happy-tails-dog-walking.jpg";
import goteborgPetDaycareImage from "../assets/images/service/goteborg-pet-daycare.jpg";
import weCarePetsImage from "../assets/images/service/wecare-pets.jpg";

export const mockServices = [
  {
    id: "1",
    name: "Furry Paws Grooming",
    category: "Grooming",
    animals: ["Dog", "Cat"],
    city: "Gothenburg",
    country: "Sweden",
    phone: "+467894227563",
    website: "#",
    image: furryPawsImage,
  },
  {
    id: "2",
    name: "Happy Tails Dog Walking",
    category: "Dog Walking",
    animals: ["Dog"],
    city: "Gothenburg",
    country: "Sweden",
    phone: "+46324524524",
    website: "#",
    image: happyTailsImage,
  },
  {
    id: "3",
    name: "Göteborg Pet Daycare",
    category: "Day Care",
    animals: ["Dog"],
    city: "Gothenburg",
    country: "Sweden",
    phone: "+4609090909",
    website: "#",
    image: goteborgPetDaycareImage,
  },
  {
    id: "4",
    name: "WeCare Pets",
    category: "Pet Sitting",
    animals: ["Dog", "Cat"],
    city: "Gothenburg",
    country: "Sweden",
    phone: "+46722446312",
    website: "#",
    image: weCarePetsImage,
  },
];