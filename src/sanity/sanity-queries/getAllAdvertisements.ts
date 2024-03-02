import { sanityQueryURL } from "sanity/sanity-utils";

export default function getAllAdvertisements() {
  return sanityQueryURL(`*[_type == "advertisement"]{
    title,"image":image.asset->url,_id
  }`);
}
