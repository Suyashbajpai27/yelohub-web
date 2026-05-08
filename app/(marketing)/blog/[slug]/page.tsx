import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-[#00A14E]">Blog</p>
      <h1 className="mt-2 text-2xl font-bold capitalize text-zinc-900 md:text-3xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600">
        Full article content can be wired to a CMS or MDX later. This page is a
        placeholder for the post you opened from the blog grid.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-flex text-sm font-semibold text-[#00A14E] !no-underline hover:underline"
      >
        ← Back to blog
      </Link>
    </div>
  );
}
