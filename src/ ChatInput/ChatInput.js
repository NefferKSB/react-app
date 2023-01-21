import * as React from 'react'; 
import TextField from '@mui/material/TextField';
import styles from './ChatInput.module.css';

function ChatInputOutput() {
  return (
   /*added title and message*/
  <div> 

    <div className={styles.title}> 
      <h1>ChatGPT Plugin</h1>
    </div>
    
    <div className={styles.inputContainer}>
      <TextField 
        className={styles.inputStyling} 
        label="User Input Text Goes Here" 
        variant="filled"
      />
    </div>
    <div className={styles.outputContainer}>
      <TextField 
        className={styles.outputStyling} 
        label="ChatGPT Response Text Goes Here" 
        variant="filled" 
        multiline
        rows={4}
      />
    </div>
  </div>
  
  );
}
export default ChatInputOutput;
