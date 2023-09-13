import { SocialMedia } from "../models/social-media.model";

export const selectors = {
  stickyContainer: "div.post-title",
};

export const socialMedias: SocialMedia[] = [
  {
    href: "https://www.facebook.com/sharer/sharer.php?u=https://haletrailer.com/blog/pinwheel-pallet-loading/",
    v1Icon: "fab fa-facebook-f",
    v2Icon: "fab fa-facebook",
  },
  {
    href: "https://www.linkedin.com/shareArticle?url=https://haletrailer.com/blog/pinwheel-pallet-loading/",
    v1Icon: "fab fa-linkedin-in",
    v2Icon: "fab fa-linkedin",
  },
  {
    href: "https://twitter.com/share?url=https://haletrailer.com/blog/pinwheel-pallet-loading/",
    v1Icon: "fab fa-twitter",
    v2Icon: "fab fa-twitter-square",
  },
  {
    href: "mailto:?subject=Hale Trailers:%20What is Pinwheel Pallet Loading?&body=I%20recommend%20you%20visit%20haletrailer.com%20to%20read:%20What is Pinwheel Pallet Loading?%0D%0A%0D%0Ahttps://haletrailer.com/blog/pinwheel-pallet-loading/",
    v1Icon: "fas fa-envelope",
    v2Icon: "fas fa-envelope",
  },
];
