import type { PixivImage } from "@/types/pixivImages";
import hero from "@/assets/hero.webp";
import about from "@/assets/about.webp";
import opengraph from "@/assets/opengraph.webp";
import post01 from "@/assets/posts/post-01-c.jpg";
import post02 from "@/assets/posts/post-02-c.jpg";
import post03 from "@/assets/posts/post-03-c.jpg";
import post04 from "@/assets/posts/post-04-c.jpg";
import post05 from "@/assets/posts/post-05-c.jpg";
import post06 from "@/assets/posts/post-06-c.jpg";
import post07 from "@/assets/posts/post-07-c.jpg";

export const PIXIV_IMAGES: PixivImage[] = [
  {
    artistName: "NE2OP",
    artistId: "27282806",
    imageId: "106111831",
    image: hero.src,
  },
  {
    artistName: "INK",
    artistId: "9510470",
    imageId: "63139389",
    image: about.src,
  },
  {
    artistName: "七五三懸",
    artistId: "1867674",
    imageId: "121228537",
    image: post01.src,
  },
  {
    artistName: "碳酸",
    artistId: "89218870",
    imageId: "126373197",
    image: post02.src,
  },
  {
    artistName: "半节",
    artistId: "6179964",
    imageId: "123054190",
    image: post03.src,
  },
  {
    artistName: "Ekita玄",
    artistId: "14793912",
    imageId: "64600536",
    image: post04.src,
  },
  {
    artistName: "降旗原",
    artistId: "4158005",
    imageId: "85603133",
    image: post05.src,
  },
  {
    artistName: "キツネイロ",
    artistId: "126905",
    imageId: "6617167",
    image: post06.src,
  },
  {
    artistName: "萃",
    artistId: "3999381",
    imageId: "81845221",
    image: post07.src,
  },
  {
    artistName: "tojorin",
    artistId: "40314805",
    imageId: "113899565",
    image: opengraph.src,
  },
];
