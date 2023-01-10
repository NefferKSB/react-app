 import * as React from 'react';
 
 import TextField from '@mui/material/TextField';

import './ChatInput.css';
import { red } from '@mui/material/colors';

function App() {
  return (
  <div class="custom-text-field" id="filled-basic"> 
     
   <TextField sx={{backgroundColor: "coral"}} fullWidth label="fullWidth"  id="fullWidth" variant="filled" />
   <TextField sx={{backgroundColor: "aquamarine", height: "142px",}}  fullWidth label="fullWidth" id="fullWidthTwo" variant="filled"/>
    
  </div>
  
  );
}

export default App;
