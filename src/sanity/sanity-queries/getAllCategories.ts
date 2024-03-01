import { sanityQueryURL } from "sanity/sanity-utils";

export default function getAllCategories() {
  return sanityQueryURL(`*[_type == "category"]{...}`);
}
