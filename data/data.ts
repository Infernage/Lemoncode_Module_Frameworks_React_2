import { TPictureInfo } from "../src/core/PictureModel";
import kittenA from "./kitten A.png";
import kittenB from "./kitten B.png";
import kittenC from "./kitten C.png";
import kittenD from "./kitten D.png";
import puppyA from "./puppy A.png";
import puppyB from "./puppy B.png";
import puppyC from "./puppy C.png";
import puppyD from "./puppy D.png";

const kitties = [
  {
    picUrl: kittenA,
    title: "kitten A",
  },
  {
    picUrl: kittenB,
    title: "kitten B",
  },
  {
    picUrl: kittenC,
    title: "kitten C",
  },
  {
    picUrl: kittenD,
    title: "kitten D",
  },
].map((value, index) => ({ id: index, ...value }));

const puppies = [
  {
    picUrl: puppyA,
    title: "puppy A",
  },
  {
    picUrl: puppyB,
    title: "puppy B",
  },
  {
    picUrl: puppyC,
    title: "puppy C",
  },
  {
    picUrl: puppyD,
    title: "puppy D",
  },
].map((value, index) => ({ id: index + kitties.length, ...value }));

export const data = {
  kitties,
  puppies,
} as { [type: string]: TPictureInfo[] };
