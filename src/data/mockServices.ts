import furryPawsImage from "../assets/images/service/furry-paws-grooming.jpg";
import happyTailsImage from "../assets/images/service/happy-tails-dog-walking.jpg";
import goteborgPetDaycareImage from "../assets/images/service/goteborg-pet-daycare.jpg";
import weCarePetsImage from "../assets/images/service/wecare-pets.jpg";
import type { Service } from "../types/service";

export const mockServices: Service[] = [
  {
    id: "1",
    name: "Furry Paws Grooming",
    category: "Grooming",
    animals: ["Dog", "Cat"],
    city: "Gothenburg",
    country: "Sweden",
    phone: "+467894227563",
    website: "https://www.furry-paws.com/shop/grooming",
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
    website: "https://www.happy-tails.co/",
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
    website:
      "https://www.rover.com/uk/?utm_medium=cpc&utm_source=google&utm_campaign=10684766544&utm_content=112212256984_729570031586_CjwKCAjw7vzOBhBxEiwAc7WNr2uMqsEkbDa8KGIaF5Mx4HRrsWJX7Eh69HgXZZPbaiH-qdP8UkiLLRoCTtkQAvD_BwE&utm_term=dog%20care%20preston_e&adwordslocation=1012228&gad_source=1&gad_campaignid=10684766544&gbraid=0AAAAADPp_a72fdcf20yP0-oWOfnG9oTcD&gclid=CjwKCAjw7vzOBhBxEiwAc7WNr2uMqsEkbDa8KGIaF5Mx4HRrsWJX7Eh69HgXZZPbaiH-qdP8UkiLLRoCTtkQAvD_BwE",
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
    website: "https://www.wecarepets.com/",
    image: weCarePetsImage,
  },
];