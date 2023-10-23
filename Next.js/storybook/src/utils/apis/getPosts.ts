import axios from 'axios';

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
