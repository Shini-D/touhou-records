import type { Social } from "@/types/social";
import x from "@/assets/x_twitter.svg";
import discord from "@/assets/discord.svg";

export const SOCIAL: Social[] = [
  {
    id: "x",
    name: "X",
    url: "https://x.com",
    icon: { image: x },
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.com",
    icon: { image: discord },
  },
];
