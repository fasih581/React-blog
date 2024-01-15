import PostCss from "./PostCard.module.css";
import PostCard from "../PostCard/PostCard"
import { useEffect, useState } from "react";
import axios from "axios";

const PostCardList = () => {
  const [Blogdata, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/blog")
      .then((response) => {
        setData(response.data.reverse().slice(0, 4)) 
      console.log(response.data);})
      
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div className={PostCss.postCard}>
      <div className={PostCss.postHead}>
        <h4 className={PostCss.postTittle}>Popular Posts</h4>
      </div>
      {Blogdata.map((Blogdata) => (
      <PostCard post={Blogdata}  />
      ))}
    </div>
  );
};

export default PostCardList;