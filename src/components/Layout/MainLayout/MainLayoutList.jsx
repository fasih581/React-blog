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

  // const blogs = [
  //   {
  //     id: 1,
  //     image: "https://www.w3schools.com/w3images/woods.jpg",
  //     heading: "TITLE HEADING",
  //     title: "Title description",
  //     date: "April 7, 2014",
  //     description: `Mauris neque quam, fermentum ut nisl vitae, convallis
  //     maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
  //     ultricies mi non congue ullam corper. Praesent tincidunt sed  tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
  //     ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non 
  //     congue ullam corper. Praesent tincidunt sed  tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.`,
  //     comments: 2,
  //   },
  //   {
  //     id: 2,
  //     image: "https://www.w3schools.com/w3images/woods.jpg",
  //     heading: "TITLE HEADING",
  //     title: "Title description",
  //     date: "April 7, 2014",
  //     description: `Mauris neque quam, fermentum ut nisl vitae, convallis
  //     maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
  //     ultricies mi non congue ullam corper. Praesent tincidunt sed  tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
  //     ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non 
  //     congue ullam corper. Praesent tincidunt sed  tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.`,
  //     comments: 2,
  //   },
  // ];

  return (
    <div className={MainCss.boxs}>
      
      {Blogdata.map((Blogdata) => (
       
        <MainLayout Blog={Blogdata}  />
        
      ))}
      
    </div>
  );
};

export default MainLayoutList;
