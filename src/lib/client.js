import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "7i9cpj5h",
  dataset: "production",
  apiVersion: "2022-09-15",
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN
})
