import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Food World</Typography>
        <p>
        Food World Portal Provides the information related to food available in Food Portal, This is
         a food delivery web portal which takes order and process the order. If Some one 
         places order of any kind of food then portal listen and deliver the order at given address.
         Most people browse the internet to come across information and data 
         that can fulfill their demands. With the rapid growth of internet users, 
         every business started utilizing the internet to increase their productivity. 
         The same is happening for restaurant owners who are trying to make a strong 
         impact within their societies. People are understanding the benefits of internet 
         technologies and have started to merge their business with such technologies.
          The most important asset required while implementing the internet to a 
          business is the web portal or website. A portal is developed for businesses 
          that want to provide a premium service to a particular set of users. 
          
          
        </p>
        
      </Box>
    </Layout>
  );
};

export default About;
