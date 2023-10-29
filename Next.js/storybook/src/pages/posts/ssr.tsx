import { GetServerSideProps, NextPage } from 'next';
import { getPosts } from '@/utils/apis/getPosts';
import { IPost } from '@/types/post';
import Link from 'next/link';

type SSRProps = {
  posts: IPost[];
};

const SSRPostList: NextPage<SSRProps> = ({ posts }: SSRProps) => (
  
  <div>
    <h1 className="font-bold text-lg">게시물 목록</h1>
    <ul>
      {posts.map((post) => (
        <Link href={`/posts/${post.postId}`}>
          <li key={post.postId}>{post.title}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

export default SSRPostList;
