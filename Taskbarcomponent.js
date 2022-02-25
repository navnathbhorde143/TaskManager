import React, {useState} from "react";
import {TextField,Date, Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import  ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


export default function Taskbarcomponent(){
    const [textValue, setTextValue,Date] = useState("");
    const onTextChange = (e) => setTextValue(e.target.value);


  return(
    <div style={{background:'#E8F3FE',height:'50em'}}>
        <br/><br/>
      <div>
      <Container maxWidth="sm" style={{background:'white',marginTop:'10px',height:'400px',border:'1px solid black',borderRadius:'10px',boxShadow:'3px 3px 10px 5px gray'}}>
          <h4 style={{marginLeft:'35%',color:'#003979',fontWeight:"bold",}}>Task Manager</h4>
          <br/>
          <TextField label="Task Title" variant="outlined" InputLabelProps={{shrink: true,}} style={{width:'100%'}}>
          </TextField>
          <br/><br/>
          <TextField label="Task Description" variant="outlined" multiline  rows={4} style={{width:'100%'}}>
          </TextField>
          <br></br>
          <br></br>
          <TextField label="Date" variant="outlined" type="date"  InputLabelProps={{shrink: true,}} style={{width:'100%'}}></TextField>
      </Container>
      </div>
      <br/><br/>
      <div>
          <Container maxWidth="sm">
          <h4 style={{marginLeft:'40%',color:'#003979',fontWeight:"bold"}}>Your Task</h4>
          <div>
              <AppBar position="static" style={{background:'white',width:'100%',}}>
                  <Toolbar>
                  <Typography  style={{color:'#003979',}}>1. Completing Assignment on time...</Typography>
                <Button color="primary" variant="contained" style={{margin:10,marginLeft:15,}}>Completed</Button>
                <Button style={{background:'#D60707',color:'white',margin:2}} variant="contained">Delete</Button>
                  </Toolbar>
              </AppBar>
          </div>
          <br/><br/>
          <div>
              <AppBar position="static" style={{background:'white',width:'100%',}}>
                  <Toolbar>
                  <Typography  style={{color:'#003979',}}>2. Submitting assignment to Sir...</Typography>
                <Button color="primary" variant="contained" style={{margin:10,marginLeft:35,}}>Completed</Button>
                <Button style={{background:'#D60707',color:'white',margin:2,}} variant="contained">Delete</Button>
                  </Toolbar>
              </AppBar>
          </div>
          </Container>
      </div>
      </div>
  )  
}