import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


import { useEffect, useState } from "react";
//import "./App.css";

function Menu() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

<Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {jsonData.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>

            
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={'http://localhost:3000/images/'+menu.item_image}
                alt={menu.item_name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                Category: {menu.category}
                </Typography>
                <Typography variant="body2">Price:{menu.item_name}</Typography>
                <Typography variant="body2">Price:{menu.price}</Typography>
                <Typography variant="body2">Quantity:{menu.quantity}</Typography>
                <Typography variant="body2">Rating:{menu.rating}</Typography>
                <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Add to Cart</strong></button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>









    
  );
}

export default Menu;








































































