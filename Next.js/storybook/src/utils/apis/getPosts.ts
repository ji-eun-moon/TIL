import axios from 'axios';
import { useQuery } from 'react-query';

export async function getPosts() {
  try {
    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3001/posts',
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

getPosts();

export async function getPostDetail(postId: string) {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:3001/posts/${postId}`,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function usePosts() {
  return useQuery('posts', async () => {
    const response = await axios.get('http://localhost:3001/posts');
    return response.data;
  });
}

export function usePostDetail(postId: string) {
  return useQuery(['post', postId], async () => {
    const response = await axios.get(`http://localhost:3001/posts/${postId}`);
    return response.data;
  });
}
