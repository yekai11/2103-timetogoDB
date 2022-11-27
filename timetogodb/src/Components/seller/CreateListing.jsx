import {
    Typography, Autocomplete,
    Button, Slide, Grid, 
    Card, CardMedia, CardContent, 
    FormLabel, FormControl, FormControlLabel,
    RadioGroup, Radio, TextField
  } from "@mui/material";
  import React from "react";
  // pictures
  import hdb2 from "../../assets/hdb2.jpg";
  // icons
  import LooksOneIcon from '@mui/icons-material/LooksOne';
  import LooksTwoIcon from '@mui/icons-material/LooksTwo';
  import Looks3Icon from '@mui/icons-material/Looks3';
  
const handleSubmitAPI = "http://localhost:5000/resale/filterResale"; // not sure how this works for this page 

const testFlatTypeData = [ // copy of the filter options
{ label: "1 ROOM" },
{ label: "2 ROOM" },
{ label: "3 ROOM" },
{ label: "4 ROOM" },
{ label: "5 ROOM" },
{ label: "EXECUTIVE" },
{ label: "MULTI-GENERATION" },
]; 

const testStoreyData = [ // copy of the filter options
{ label: "1st Floor - 3rd Floor" },
{ label: "4th Floor - 6th Floor" },
{ label: "7th Floor - 9th Floor" },
{ label: "10th Floor - 12th Floor" },
{ label: "13th Floor - 15th Floor" },
{ label: "16th Floor - 18th Floor" },
{ label: "19th Floor - 21st Floor" },
{ label: "22nd Floor - 24th Floor" },
{ label: "25th Floor - 27th Floor" },
{ label: "28th Floor - 30th Floor" },
{ label: "31st Floor - 33rd Floor" },
{ label: "34th Floor - 36th Floor" },
{ label: "37th Floor - 39th Floor" },
{ label: "40th Floor - 42nd Floor" },
{ label: "43rd Floor - 45th Floor" },
{ label: "46th Floor - 48th Floor" },
{ label: "49th Floor - 51st Floor" },
]; 

const testAreaData = [ // copy of the filter options
{ label: "30 to 50 sq m" },
{ label: "60 to 80 sq m" },
{ label: "90 to 110 sq m" },
{ label: "110 to 130 sq m" },
{ label: "140 sq m & Above" },
];

/* submit handler */
const handleSubmit = () => {
  fetch(handleSubmitAPI, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      // //insert fields here
      // area: ,
      // num_of_rooms: ,
      // price: ,
      // storey_range: ,
      // floor_area_sqm: ,
    }),
  }).then((result) => {
    /*
    This is what comes back, it will return a status code 200 if account successfully created
    If validation error, status code 400 will be returned
    If email already registered, status code 409 will be returned 
    */
    console.log("In result");
    console.log(result.status); // this is how u access the status code
  });
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
  export default function CreateListing() {
  
    const [area, setArea] = React.useState("");
    const [data, setData] = React.useState({
      area: {},
      street: {},
      block: {},
      postal_code: {},
      num_of_rooms: {},
      storey_range: {},
      floor_area_sqm: {},
      price: {},
      listing_type: {},
    });


    const handleAreaChange = (event) => {
      setArea(event.target.event);
    }

  
    function handle(submitForm){
      const newdata={...data}
      newdata[submitForm.target.id] = submitForm.target.value
      setData(newdata)
      console.log(newdata)
    } 

    
    return (
      <div className="App"> 
        
        <Typography gutterBottom variant="h3" align="center" style={{padding: "25px", margin: "auto" }}>
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
                  <TextField 
                      placeholder="Enter Area" 
                      label="Area" 
                      variant="outlined" 
                      fullWidth required 
                      value={area}
                      onChange={handleAreaChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                      type="number" 
                      placeholder="Enter Postal Code" 
                      label="Postal Code" 
                      variant="outlined" 
                      fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                      placeholder="Enter Street" 
                      label="Street" 
                      variant="outlined" 
                      fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                      placeholder="Enter Block Number" 
                      label="Block Number" 
                      variant="outlined" 
                      fullWidth required />
                </Grid>
              </Grid>

              <Typography gutterBottom variant="h5" style={{padding: "15px", margin: "25px"}}>
                <LooksTwoIcon color="primary" fontSize="large"></LooksTwoIcon> Tell us more about your house
              </Typography> 

              <Grid container spacing={3} sx={{marginLeft: "24px"}}>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        options={testFlatTypeData}
                        sx={{ width: "16vw", ml: 1 }}
                        renderInput={(params) => (
                          <TextField variant="filled" {...params} label="Flat Type" required/>
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        options={testStoreyData}
                        sx={{ width: "16vw", ml: 1 }}
                        renderInput={(params) => (
                          <TextField variant="filled" {...params} label="Storey Range" required/>
                        )}
                    />
                  </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        onChange={(submitForm) => handle(submitForm)} id="floor_area_sqm" value={data.floor_area_sqm}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={testAreaData}
                        sx={{ width: "16vw", ml: 1 }}
                        renderInput={(params) => (
                          <TextField variant="filled" {...params} label="Size of Flat" required/>
                        )}
                    />
                  </Grid>
              </Grid>

              <Typography gutterBottom variant="h5" style={{padding: "15px", margin: "25px"}}>
                <Looks3Icon color="primary" fontSize="large"></Looks3Icon> Some final details.. 
              </Typography>

              <Grid container spacing={3} columns={6} sx={{marginLeft: "24px"}}>
                <Grid item xs={3}>
                  <FormControl>
                    <FormLabel id="radio-buttons-group-label">
                        <Typography gutterBottom variant="h6" style={{color: "black"}}>
                          Listing Type
                        </Typography>
                    </FormLabel>
                    <RadioGroup row
                      aria-labelledby="radio-buttons-group-label"
                      name="row-radio-buttons-group" >
                        <FormControlLabel value="resale" control={<Radio required={true}/>} label="Resale" required/>
                        <FormControlLabel value="rental" control={<Radio required={true}/>} label="Rental" required/>
                    </RadioGroup>
                    <br></br><br></br>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <br></br>
                    <TextField 
                        type="number" 
                        placeholder="Enter Price" 
                        label="Price" 
                        variant="outlined" 
                        required />
                </Grid>
              </Grid>
              <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={handleSubmit}
                >Submit
              </Button>
            </form>

          </CardContent>
        </Card>
      </Grid>
      <br></br>
      <br></br>
    </div>
    );
  };
  
  