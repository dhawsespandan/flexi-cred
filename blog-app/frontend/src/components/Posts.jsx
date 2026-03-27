import { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      setPosts(res.data);
    })
    .catch(err => {
      console.error("Error fetching posts:", err);
    });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((p, i) => (
        <h3 key={i}>{p.title}</h3>
      ))}
    </div>
  );
}

export default Posts;