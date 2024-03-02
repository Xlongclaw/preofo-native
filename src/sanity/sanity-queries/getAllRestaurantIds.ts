import { sanityQueryURL } from "sanity/sanity-utils";

export default function getAllRestaurantIds() {
  return sanityQueryURL(`*[_type == "restaurant"]._id`);
}
