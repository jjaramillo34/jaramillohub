// sanityClient.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "9i3th449",
  dataset: "production",
  apiVersion: "2024-05-04",
  useCdn: true,
});
