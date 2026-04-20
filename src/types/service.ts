export type Animal = "Dog" | "Cat" | "Horse" | "Pig" | "Bird";

export interface Service {
  id: string;
  name: string;
  category: string;
  animals: Animal[];
  city: string;
  country: string;
  phone: string;
  website: string;
  image: string;
}