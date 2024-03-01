import { sanityQueryURL } from "sanity/sanity-utils";

export default function getAllRestaurants() {
  return sanityQueryURL(`*[_type == "restaurant"]{
    _id,
      name,
      rating,
      reviews,
      address,
      minPrepTime,
      maxPrepTime,
      latitude,
      longitude,
      tags,
      "images":images[].asset->url,
        dishes->{
          ...,
          "image":image.asset->url
        }
  }`);
}
