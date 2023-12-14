import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
function Home() {
  const [Data, SetData] = useState("");
   //Get Product API 
   const  ApiResult =async () => {
    try {
      const ApiResult =await axios.get ('https://fakestoreapi.com/products')
      console.log("kritika@@", ApiResult);
      SetData(ApiResult?.data);
    } catch (error) {
      console.log("error Api call", error?.message);
      
    }
  };

  useEffect(() => {
  // Attem to call Get product APi
    ApiResult()
    console.log(Data);
  },[]);

  console.log(Data);
  return <Card Data={Data} />;
  console.log(Data);
}

export default Home;
