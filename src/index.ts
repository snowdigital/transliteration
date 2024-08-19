import { dictionaryRUtoEN } from "./dictionaries/ru-en";

//transliterates latin text to russian
export const transliterateRU = (text: string): string => {
  return text
    .split("")
    .map((char) => dictionaryRUtoEN[char] || char)
    .join("");
};
