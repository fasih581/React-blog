import MainCss from "./MainLayouts.module.css";
import MainLayout from "./MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const MainLayoutList = () => {

  const [Blogdata, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/blog")
      .then((response) => {
        setData(response.data) 
      console.log(response.data);})
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <div className={MainCss.boxs}>
      {Blogdata.map((Blogdata) => (
        <MainLayout Blog={Blogdata}  /> 
      ))}
    </div>
  );
};

export default MainLayoutList;
