import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import { fetchPostContent } from "../../lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "../../components/PostLayout";
import YouTube from "react-youtube";

// Instagram Embed component
const Instagram = ({ postId }: { postId: string }) => (
  <iframe
    src={`https://www.instagram.com/p/${postId}/embed`}
    width="400"
    height="480"
    frameBorder="0"
    scrolling="no"
    allowTransparency
  ></iframe>
);

// Twitter Embed component
const Twitter = ({ tweetId }: { tweetId: string }) => (
  <blockquote className="twitter-tweet">
    <a href={`https://twitter.com/twitter/status/${tweetId}`}></a>
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
  </blockquote>
);

const components = {
  YouTube,
  Instagram,
  Twitter,
};

type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MDXRemoteSerializeResult;
};

export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  source,
}: Props) {
  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
    >
      <MDXRemote {...source} components={components} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => "/posts/" + it.slug);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const allPosts = fetchPostContent();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  const source = fs.readFileSync(post.fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags,
      author: data.author,
      source: mdxSource,
    },
  };
};
