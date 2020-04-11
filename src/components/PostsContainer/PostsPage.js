//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "D:/Git Projects/React-Components-Insta-Clone/src/dummy-data.js";

const PostsPage = () => {
  const [data] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {data.map(data => 
        <Post post={data} />
        )}
      
    
    </div>
  );
};

export default PostsPage;

