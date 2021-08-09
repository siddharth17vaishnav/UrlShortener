import React from 'react';
import { Button ,TextField} from '@material-ui/core';

const Input = () => {
    return (
        <div>
        <TextField className="textfiled"
          id="outlined-number"
          label="Link"
          type="text"
          variant="outlined"
         
        />
<div className="btn">
<Button variant="contained" color="primary">
  Submit
</Button>
        </div>
        </div>
    )
}

export default Input
