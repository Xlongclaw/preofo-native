import { sanityQueryURL } from "sanity/sanity-utils";

export default function getRestaurantWrapperDataById(id:string) {
  return sanityQueryURL(`*[_type == "restaurant" && _id == "${id}"]{
      name,
      rating,
      reviews,
      minPrepTime,
      maxPrepTime,
      tags,
      "images":images[].asset->url
  }[0]`);
}
