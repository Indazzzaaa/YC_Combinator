import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // if true means cache the content for 60 sec and re-validate after 60sec.
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
