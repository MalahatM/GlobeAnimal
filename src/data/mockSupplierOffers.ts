import arkenZooImage from "../assets/images/supplier-offers/arken-zoo.jpg";
import furryPawsImage from "../assets/images/supplier-offers/furry-paws.jpg";
import folksamImage from "../assets/images/supplier-offers/folksam.png";
import HappywalkingImage from "../assets/images/supplier-offers/happy-walking.jpg";

export const mockSupplierOffers = [
  {
    id: 1,
    supplierName: "Arken Zoo",
    title: "Get 10% Discount",
    category: "Pet Shop",
    distance: "1.5 km",
    image: arkenZooImage,
	address: "Djurgatan 9, Stockholm",
	  price: {
      text: "Get 10% Discount",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem sed massa feugiat pretium.",
    website: "https://www.arkenzoo.se",
  },
  {
    id: 2,
    supplierName: "Fuirry Paws Grooming",
    title: "Get 20% Discount",
    category: "Grooming",
    distance: "13 km",
    image: furryPawsImage,
	address: "Djurgatan 9, Stockholm",
	  price: {
      text: "Get 20% Discount",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem sed massa feugiat pretium.",
    website: "https://example.com",
  },
  {
    id: 3,
    supplierName: "Folksam",
    title: "Get 50% Discount",
    category: "Insurance",
    distance: "5 km",
    image: folksamImage,
	address: "Djurgatan 9, Stockholm",
	  price: {
      text: "Get 50% Discount",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem sed massa feugiat pretium.",
    website: "https://www.folksam.se",
  },
   {
    id: 4,
    supplierName: "Happy Walking",
    title: "Get 60% Discount",
    category: "Insurance",
    distance: "7 km",
    image: HappywalkingImage,
	address: "Djurgatan 9, Stockholm",
	  price: {
      text: "Get 60% Discount",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lorem sed massa feugiat pretium.",
    website: "https://www.happy-tails.co/",
  },
];