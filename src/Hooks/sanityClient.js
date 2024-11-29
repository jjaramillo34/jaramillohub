// sanityClient.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9i3th449",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-21",
});

export default client;
