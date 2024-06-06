import { CardContent, Typography, Box, Card } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../context/context";

const CardBox = ({ id, title, body }) => {
  return (
    <CardContent key={id} sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Box sx={{height:'75px'}}>
      <Typography sx={{ fontSize: 14,textAlign:'center',borderBottom:'2px solid black',fontWeight:'bolder',color:'black' }} color="text.secondary" gutterBottom>
        Quote Of the Day
      </Typography>
      <Typography sx={{ mb: 1.5,fontWeight:'bold',fontSize:13 }} color="text.secondary">
        {title}
      </Typography>
      </Box>
      <Box>
      <Typography sx={{borderBottom:'1px solid black',width:'fit-content',mb:1 }}>
        Description
      </Typography>
      <Typography variant="body2">
        {body} 
      </Typography>
      </Box>
      
    </CardContent>
  );
};

const CardItem = () => {
  const [details, setDetails] = useState([]);

  // shows error message
  const [error, setError] = useState(null);
  const {value} = useContext(userContext)
  console.log(value)

  //search value passed here through context api


  useEffect(() => {
    // fetch response from api
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // check if response is ok
        if (!res.ok) {
          throw new Error("Response is not loading");
        }
        return res.json();
      })
      .then((data) => {
        const searchedItem = data.filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase()));
        if(searchedItem.length > 0){
          setDetails(searchedItem)
        }else{
          setDetails(data)
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch. Try again Later");
      });
  }, [value]);

  return (
    <main>
      <Box sx={{display:'flex',gap:'30px',flexWrap:'wrap',justifyContent:'center'}}>
        
        {error ? (
        // Displays error if error occurs
        <Card variant="outlined">
        <Typography>Error: {error}</Typography>
        </Card>
      ) : details.length === 0 ? (
        // shows loading if response is still not received
        <Card variant="outlined">
        <Typography>Loading....</Typography>
        </Card>
      ) : (
        // map through details and render each items
        details.map(({ id, title, body }) => {
          return           <Box sx={{width:'300px',height:'250px'}}>
          <Card sx={{height:'100%'}} variant="outlined">
            <CardBox  id={id} title={title} body={body}/>
            </Card>
          </Box>
        })
      )}
      </Box>
    </main>
  );
};

export default CardItem