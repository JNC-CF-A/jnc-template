import Layout from "../src/components/Layout";
import BasicMeta from "../src/components/meta/BasicMeta";
import OpenGraphMeta from "../src/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../src/components/meta/TwitterCardMeta";
import { SocialList } from "../src/components/SocialList";
import Link from "next/link";
import { GetStaticProps } from "next";
import { fetchPostContent, PostContent } from "../src/lib/posts";

type Props = {
  recentPosts: Pick<PostContent, "title" | "slug">[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = fetchPostContent();
  const recentPosts = allPosts.slice(0, 3).map(({ title, slug }) => ({ title, slug }));
  return {
    props: {
      recentPosts,
    },
  };
};

export default function Index({ recentPosts }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, We're Jemma's Nutritional Coaching<span className="fancy">.</span>
          </h1>
          <span className="handle">@jemmasnutritionalcoaching</span>
          <h2>Coaching for a healthy life.</h2>

          <nav className="nav">
            <Link href="/">Home</Link> | <Link href="/posts">Blog</Link>
          </nav>

          <section className="recent">
            <h3>Recent Posts</h3>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <SocialList />
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }
        .nav {
          margin: 1rem 0;
        }
        .recent h3 {
          margin-top: 1rem;
        }
        .recent ul {
          list-style: disc;
          padding-left: 1.5rem;
        }
        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
