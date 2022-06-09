
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button,Carousel } from "react-bootstrap"



export const CardData = () => {
  const [news, SetNews] = useState([]);
  const GetNews = () => {
    axios.get('http://localhost:3004/articles')
      .then((res) => {
        SetNews(res.data);
      })
  }
  useEffect(() => {
    GetNews();
    
  })

  return (
    <div style={{ marginTop: "20px" }}>
       {
         news.map((items)=>{
          return(
            <Card style={{ width: '18rem',height:"32rem",float:"left",marginLeft:"10px" ,boxShadow:"0px 0px 4px black"}}>
          <Card.Img variant="top" src={items.urlToImage} />
          <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <Card.Text>
               {items.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          )
         })
       }
    </div>
  )
}