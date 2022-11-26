import {
    Typography, Box, //Link,
    Button, Slide, Grid, 
    Card, CardMedia, CardContent, 
    TextField, shadows,
  } from "@mui/material";
  import React from "react";
  // pictures
  import hdb2 from "../../assets/hdb2.jpg";
  // icons
  import LooksOneIcon from '@mui/icons-material/LooksOne';
  import LooksTwoIcon from '@mui/icons-material/LooksTwo';
  import Looks3Icon from '@mui/icons-material/Looks3';
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  export default function CreateListing() {
  
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };

    return (
      <div className="App"> 
      <Typography gutterBottom variant="h3" align="center" style={{padding: "15px", margin: "auto" }}>
        Create a New Listing
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 1200, margin: "auto", 
                      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                    }}>
          <CardContent>
            <CardMedia
              component="img"
              height="300"
              src={hdb2}
              alt="green iguana"
            />
            <Typography gutterBottom variant="h5" style={{padding: "15px"}}>
              <LooksOneIcon color="primary" fontSize="large"></LooksOneIcon> Where is your house located?
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and your house will be listed!
            </Typography> 

            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
              </Grid>

              <Typography gutterBottom variant="h5" style={{padding: "15px"}}>
                <LooksTwoIcon color="primary" fontSize="large"></LooksTwoIcon> Tell us more about your house
              </Typography> 
              
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
              </Grid>

              <Typography gutterBottom variant="h5" style={{padding: "15px"}}>
                <Looks3Icon color="primary" fontSize="large"></Looks3Icon> Some final details.. 
              </Typography>

              <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </form>

          </CardContent>
        </Card>
      </Grid>
      <br></br><br></br>
    </div>
    );
  };
  
  