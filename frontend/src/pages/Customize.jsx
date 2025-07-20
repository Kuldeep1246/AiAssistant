import React, { useContext, useRef, useState } from "react";
import Card from "../components/Card";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/authBg.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import { RiImageAddFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
function Customize() {
  const {selectedImage,frontendImage,handleLogout,backendImage,setSelectedImage,setBackendImage,setFrontendImage} = useContext(userDataContext)
  const inputImage = useRef()
  const navigate = useNavigate()
   
  const handleImage = (e)=>{
    const file = e.target.files[0]
    
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-black to-[#030342] flex flex-col justify-center items-center py-10">
      <button onClick={handleLogout}>Logout</button>
      <h1 className="text-white text-[30px] text-center pb-[20px]">
        Select your <span className="text-red-500">Assistant Image</span>
      </h1>
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
        <div
          onClick={() => {
            inputImage.current.click();
            setSelectedImage("input");
          }}
          className={`cursor-pointer hover:shadow-2xl flex justify-center items-center hover:shadow-blue-950 w-full max-w-[180px] aspect-[3/5] bg-blue-950 border-2 border-blue-800 rounded-2xl overflow-hidden shadow-md mx-auto ${
            selectedImage === "input"
              ? "border-4 border-white shadow-2xl shadow-blue-950"
              : null
          }`}
        >
          {!frontendImage ? (
            <RiImageAddFill className="text-white w-[35px] h-[35px]" />
          ) : (
            <img src={frontendImage} className="h-full object-cover" />
          )}
        </div>
        <input
          onChange={handleImage}
          type="file"
          accept="image/*"
          ref={inputImage}
          hidden
        />
      </div>
      {selectedImage && (
        <button className="w-[150px] h-[50px] cursor-pointer mt-[50px] bg-white rounded-full text-black font-semibold text-lg" onClick={()=>navigate('/customize2')}>
          Next
        </button>
      )}
    </div>
  );
}

export default Customize;
