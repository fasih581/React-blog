import PostCss from "./PostCard.module.css";

const PostCard = ({ post }) => {
  
  return (
    <div className={PostCss.postSubHead} key={post._id}>
      <img src={post.blogImg} alt="Image" className={PostCss.postImg} />
      <div className={PostCss.postsubTittle}>
        {post.title}
        <span>{post.subTitle}</span>
      </div>
    </div>
  );
};

export default PostCard;
