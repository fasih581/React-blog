import React from 'react'
import Header from "./common/Header";
import MainLayoutList from "./MainLayout/MainLayoutList";
import AboutCard from "./SideMainLayout/AboutCard/AboutCard";
import PostCardList from "./SideMainLayout/PostCard/PostCardList";
import TagCard from "./SideMainLayout/Tag/TagCard";
import Footer from "./MainLayout/Footer/Footer";

import "./MainPage.css";

const Main = () => {
  return (
    <>
    <Header />
      <div className="box">
        <div className="main">
          <MainLayoutList />
          <div className="sub_main">
          <AboutCard />
          <PostCardList />
          <TagCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Main;