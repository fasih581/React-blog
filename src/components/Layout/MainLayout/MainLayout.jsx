import { useState } from "react";
import MainCss from "./MainLayouts.module.css";

const MainLayout = ({ Blog }) => {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className={MainCss.card_box} key={Blog._id}>
      <img src={Blog.blogImg} alt="Norway" />
      <div className={MainCss.sub_Card}>
        <h3>{Blog.title}</h3>
        <h5>
          {Blog.subTitle}
          {/* <span className={MainCss.date}> April 7, 2014</span> */}
        </h5>
        <p>
          {showMore[Blog._id]
            ? Blog.description
            : `${Blog.description.substring(0, 250)}....`}
        </p>
        <div className={MainCss.btn}>
          <button
            className={MainCss.btnRead}
            onClick={() =>
              setShowMore({ ...showMore, [Blog._id]: !showMore[Blog._id] })
            }
          >
            {showMore[Blog._id] ? "Read Less" : "Read More"}
          </button>
          <div>
            <h5 className={MainCss.btnComment}>
              Comments<span className={MainCss.btnCount}></span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
