type SocialId = "x" | "discord";

type SocialName = "X" | "Discord";

export interface Social {
  id: SocialId;
  name: SocialName;
  url: string;
  icon: {
    image: ImageMetadata;
  };
}
