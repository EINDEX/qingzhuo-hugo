import { CollectionEntry, getCollection } from "astro:content";

export function sortViaUpdated(
  a: CollectionEntry<"posts"> | CollectionEntry<"thoughts"> | CollectionEntry<"newsletter">,
  b: CollectionEntry<"posts"> | CollectionEntry<"thoughts"> | CollectionEntry<"newsletter">,
  asc: boolean = false
) {
  return (
    (asc ? 1 : -1) *
    ((a.data.updated || a.data.date) - (b.data.updated || b.data.date))
  );
}

export async function getPosts(
  locale: string
): Promise<CollectionEntry<"posts">[]> {
  const posts = await (
    await getCollection("posts")
  )
    .filter((post) => post.slug.startsWith(locale))
    .filter((post) => {
      return post.data.draft !== true || import.meta.env.MODE === "development";
    });

  return posts.sort((a, b) => sortViaUpdated(a, b, false));
}

export async function getThoughts(
  locale: string
): Promise<CollectionEntry<"thoughts">[]> {
  const thoughts = await (
    await getCollection("thoughts")
  )
    .filter((thought) => thought.slug.startsWith(locale));
  return thoughts.sort((a, b) => sortViaUpdated(a, b, false));
}

type project = {
  name: string;
  logo: string;
  url: string;
  labels: string[];
  openSource: boolean;
};

export const getAllProjects = async (locale: string): Promise<project[]> => {
  return [
    {
      name: "Logseq Copilot",
      labels: ["Browser Extension", "Logseq", "Open Source"],
      url: "https://logseq-copilot.eindex.me",
      logo: "/images/logseq-copilot.png",
      openSource: true,
    },
    {
      name: "Logseq Memos Sync",
      labels: ["Logseq", "Logseq Plugin", "Memos", "Open Source"],
      url: "https://github.com/eindex/logseq-memos-sync",
      logo: "/images/logseq-memos-sync.webp",
      openSource: true,
    },
  ];
};
