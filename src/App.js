import { useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Button, Container ,TextField} from '@material-ui/core';

const App = () =>{

const [url,setUrl]=useState([]);
const [query,setQuery]=useState('');



const getData=async() =>{
  const api= await axios.get(`/api/api.php?key=d4b25bf4fc52d7571f816d2af67d2576ff265&short=${query}`).then(res=>{
    const output= res.data.url.shortLink;
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
     

      <TextField className="textfiled"
          id="outlined-number"
          label="Link"
          type="text"
          variant="outlined"
          onChange={getsearch}
        />
        <div className="btn">
        <Button variant="contained" color="primary" onClick={getData}>
          Submit
        </Button>
                </div>

              {url && <div className="link"> ShortLink :  {url}</div>}

           
              
              </Container>
              </div>
            
          );
        }

export default App;
