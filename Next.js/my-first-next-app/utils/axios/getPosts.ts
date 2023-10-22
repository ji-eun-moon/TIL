import axios from 'axios'

export default async function getPosts() {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3001/posts'
    })
    return response.data
}