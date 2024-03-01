import { sanityClient } from "sanity/sanity-client";

const sanityQueryURL = (query: string) => {
  const queryURL = `https://${sanityClient.projectId}.api.sanity.io/v${sanityClient.apiVersion}/data/query/${sanityClient.dataset}?query=${encodeURIComponent(query)}`;
  return queryURL;
};

export default sanityQueryURL;
