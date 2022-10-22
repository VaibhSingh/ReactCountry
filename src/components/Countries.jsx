import React,{useState,useEffect} from 'react';
import '../App';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Button  from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  Typography  from '@mui/material/Typography';
const url =`https://restcountries.com/v3.1/region/africa`;
const Countries = ({clearSelectedRegionHandler,selectedRegion}) =>
{
  const [data,setData] =useState([]);
  const [loading,setLoading] =useState(false);
 
  
    useEffect(()=>
  {callUseEffect()
},[selectedRegion]);
const callUseEffect = async ()=>
{
    setLoading(true);
    let users = [];
    const response=await fetch(url);
    if(response.status>=200 && response.status<=299)
    {
      users= await response.json();
      setLoading(false);
      setData(users);
    
     } else {
          setLoading(true);
        
       
        }
      }
    return     (
      <Container fixed>
        {loading ? (
        <div className = "progress">
            <LinearProgress color = "primary"/>
          </div>
          ) :(
          <Grid container spacing ={3} columns ={12} sx ={{margin :"20px 0"}}>
<Grid item xs ={12} sm={12} md ={12} lg ={12}>
  <Button color="primary" variant ="container" onClick={()=>clearSelectedRegionHandler()}>
    Pick another region
  </Button>
</Grid>
        {data.map ((country)=>(
          <Grid item xs ={12} sm ={12} md ={6} lg ={6} key={country.name.common}>
             <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        image={country.flags.png}
        alt="country"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {`Population: ${country.population}`}
                </Typography>
             </CardContent>
          </Card>
        </Grid>
      ))}
        </Grid>
          )}
      </Container>
       );
    
};
export default Countries;