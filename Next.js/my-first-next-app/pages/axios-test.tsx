import { GetStaticProps, NextPage } from 'next'  
import getPosts from '../utils/axios/getPosts'
import IPost from '../types/post'

type SSGProps = {
    posts: IPost[]
}

const AxiosTest : NextPage<SSGProps>= ({ posts }) => {
    return (
        <div>
            <h1 className='font-bold text-lg'>게시물 목록</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
    const posts = await getPosts();
    return {
      props: { posts },
    };
  }


export default AxiosTest