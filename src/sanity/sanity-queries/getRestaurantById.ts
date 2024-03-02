import { sanityQueryURL } from "sanity/sanity-utils";

export default function getRestaurantById(id:string) {
  return sanityQueryURL(`*[_type == "restaurant" && _id == "${id}"]{
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
      "foodCategories":foodCategories[]{category,dishes[]->{
          ...,
          "image":image.asset->url
        }},
        dishes[]->{
          ...,
          "image":image.asset->url
        }
  }`);
}
