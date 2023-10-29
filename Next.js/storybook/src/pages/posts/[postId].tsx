import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { getPosts } from '@/utils/apis/getPosts';
import { IPostDetail } from '@/types/post';
import { useRouter } from 'next/router';

type SSGProps = {
  post: IPostDetail;
};

const PostDetail: NextPage<SSGProps> = ({ post }: SSGProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-lg">title: {post.title}</h1>
      <p>content: {post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post: IPostDetail) => ({ params: { postId: post.postId.toString() } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<SSGProps> = async ({ params }) => {
  const posts = await getPosts();
  const post = posts.find((item: IPostDetail) => item.postId === Number(params?.postId));

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export default PostDetail;
