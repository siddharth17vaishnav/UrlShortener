import { useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Button, Container ,TextField} from '@material-ui/core';

const App = () =>{

const [url,setUrl]=useState([]);
const [data,setData]=useState([]);



  const urlshort=`/api/api.php?key=d4b25bf4fc52d7571f816d2af67d2576ff265&short=${data}`;
 const api= axios.get(urlshort).then(res=>{
    const output= res.data.url.shortLink;
    setUrl(output);
    console.log(output);
  });






  return (
    <div className="App">
     
      <Container maxWidth="sm" className="AppContainer" >

      <TextField className="textfiled"
          id="outlined-number"
          label="Link"
          type="text"
          variant="outlined"
          onChange={e=>setData(e.target.value)}
        />
<div className="btn">
<Button variant="contained" color="primary" onClick={api}>
  Submit
</Button>
        </div>

      {url && <div> ShortLink:<a href={url}>click here</a></div>}
      
      </Container>
      </div>
     
  );
}

export default App;
