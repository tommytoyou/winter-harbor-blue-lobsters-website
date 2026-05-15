/**
 * CMS integration scaffold — swap static JSON for Sanity or Contentful.
 *
 * Sanity: use @sanity/client with NEXT_PUBLIC_SANITY_PROJECT_ID
 * Contentful: use contentful SDK with CONTENTFUL_SPACE_ID
 */

export type CmsProvider = "static" | "sanity" | "contentful";

export function getCmsProvider(): CmsProvider {
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return "sanity";
  if (process.env.CONTENTFUL_SPACE_ID) return "contentful";
  return "static";
}

export async function fetchLobstermen() {
  const { default: data } = await import("@/content/lobstermen.json");
  return data;
}

export async function fetchStories() {
  const { default: data } = await import("@/content/stories.json");
  return data;
}

// Example Sanity query (uncomment when configured):
// import { createClient } from '@sanity/client'
// const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
// export async function fetchLobstermen() {
//   return client.fetch(`*[_type == "lobsterman"]{ ... }`)
// }
