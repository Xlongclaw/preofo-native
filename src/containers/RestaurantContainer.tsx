import { Text, View } from "react-native";
import React from "react";
import { RestaurantWrapper } from "@components/organisms";
import { useFetch } from "@hooks";
import { getAllRestaurantIds } from "sanity/sanity-queries";
import { TextHeading } from "@components/atoms";
import { RestaurantWrapperSkeleton } from "@components/skeletons";
import fetchAllRestaurantIds from "utils/fetchAllRestaurantIds";

/**
 * A container to display all the restaurants.
 * @returns a JSX element that displays all the restaurants.
 */
export default function RestaurantContainer() {
  const [restautantIds,setRestaurantIds] = React.useState<[{_id:string}]>()
  /**
   * Fetching Array of all restaurant IDs.
   */
  const { data, isLoading }: { data: Array<string>; isLoading: boolean } =
    useFetch({ method: "POST", type: "sanity", url: getAllRestaurantIds() });


    React.useEffect(()=>{
      fetchAllRestaurantIds().then((res)=>{
        setRestaurantIds(res.data)        
      })
    },[])



  /**
   * Render only after Data is fetched else displaying Loading Skeletons.
   */
  if(restautantIds)
  return (
    <View className="mr-2 mb-28">
      <TextHeading
        title="RESTAURANTS"
        subtitle="Top Quality food just one click away."
      />
      {!isLoading &&
        restautantIds.map((restaurantId) => (

          /**
           * Rendering all restaurants through sending restaurantIds to Restaurant Wrappers
           */
          <RestaurantWrapper key={restaurantId._id} restaurantId={restaurantId._id} />
        ))}
      {isLoading && (

        /**
         * Rendering the skeleton if the data is loading.
         */
        <>
          <RestaurantWrapperSkeleton />
          <RestaurantWrapperSkeleton />
        </>
      )}
    </View>
  );
  else return <Text>LOADING</Text>
}
