import { useState} from 'react';
import axios from 'axios';
import './App.css';
import { Button, Container ,TextField} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const App = () =>{

const [url,setUrl]=useState([]);
const [query,setQuery]=useState('');



const getData=async() =>{
  const api= await axios.get(`/api/api.php?key=d4b25bf4fc52d7571f816d2af67d2576ff265&short=${query}`).then(res=>{
    const output= res.data.url;
    setUrl(output);

    
})
}


const getsearch=(e)=> {
e.preventDefault();
setQuery(e.target.value);
}
  return (
    <div className="App">
     
      <Container maxWidth="sm" className="AppContainer" >
     
<div className="text">
      <TextField className="textfiled"
          id="outlined-number"
          label="Link"
          type="text"
          variant="outlined"
          onChange={getsearch}
        />
        </div>
        <div className="btn">
        <Button variant="contained" color="primary" onClick={getData}>
          Submit
        </Button>
        <div className="card">
        <Card >
      <CardContent>
              <span>Title :  {url.title} </span>
              <br></br>
              <span>ShortLink : <a href={url.shortLink} target="_blank"> {url.shortLink}</a></span>
              <br></br>
              <span>FullLink :  {url.fullLink}</span>
        
      </CardContent>
    </Card>
    </div>
                </div>

               
           
              </Container>
              </div>
            
          );
        }

export default App;
