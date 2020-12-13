import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Paper, Typography, Grid, Chip, Box, Link } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "fontsource-roboto"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    width: 300
  },
  sizeActive: {
    border: "1.5px solid red!important"
  },
  designActive: {
    border: "3px solid rgb(62, 52, 51)!important"
  }
}));

const data = [
  {
    name: "",
    value: "",
    product: ["None"
    ]
  },
  {
    name: "men-cloth",
    value: "Men's Clothing",
    product: [
      "T-Shirt",
      "Shorts",
      "Pant",
      "Belt",
      "Jeans"
    ]
  },
  {
    name: "women-cloth",
    value: "Women's Clothing",
    product: [
      "Saree",
      "Chudidhar",
      "Pant",
      "Belt"
    ]
  },
  {
    name: "kid-cloth",
    value: "Kid's Clothing",
    product: [
      "Shorts",
      "Pant"
    ]
  },
  {
    name: "accessories",
    value: "Accessories",
    product: [
      "Mobile Case",
      "Charger",
      "Head Phone",
      "Mic"
    ]
  }  
]

export default function OrderView() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [product, setProduct] = React.useState(data[0]);
  const [productBg, setproductBg] = React.useState("rgb(255, 255, 255)");
  const [activeSize, setactiveSize] = React.useState("L");
  const [designBg, setdesignBg] = React.useState("");
  const [activeDesign, setactiveDesign] = React.useState("");

  const handleChange = (event) => {
    setProduct(data.filter(i => i['name'] === event.target.value)[0]);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setOpen1(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen(false);
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const changeColor = (event) => {
    setproductBg(event.target.getAttribute('value'));
  }

  const changeSize = (event) => {
    setactiveSize(event.target.innerText);
  }


  const changeDesign = (event) => {
    setactiveDesign(event.target.getAttribute('id'));
    setdesignBg(event.target.getAttribute('title'));
    console.log(event.target.getAttribute('title'));
  
  }

  return (
      <Container maxWidth="lg" style={{ "marginTop": "2rem"}}>
        <Typography style={{fontWeight: 300}} variant="h2">CREATE <strong>ORDER</strong></Typography>
      <Paper style={{marginTop:"2rem", width: "100%", height: "16rem", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column",  "borderRadius": "10px", boxShadow: "0 70px 200px 15px rgba(63,63,68,0.05)"}} >
        <Typography style={{marginTop: "3rem"}} variant="body2">Add a product to start creating your order</Typography>
        <Button style={{width: "16rem", marginBottom: "3rem"}} variant="contained" color="primary" onClick={handleClickOpen}>Add Product</Button>
      </Paper>
      
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <Typography style={{marginLeft:"2.5rem", marginTop: "2rem"}} variant="h5">ADD PRODUCT</Typography>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
              <Select
                onChange={handleChange}
                input={<Input  />}
              >
                <MenuItem value="men-cloth">Men's Clothing</MenuItem>
                <MenuItem value="women-cloth">Women's Clothing</MenuItem>
                <MenuItem value="kid-cloth">Kid's Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Product</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                input={<Input />}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                {product['product'].map((prd, i) => (<MenuItem value={prd}>{prd}</MenuItem>))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Back
          </Button>
          <Button onClick={handleClickOpen1} variant="contained" color="primary">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog disableBackdropClick disableEscapeKeyDown open={open1} onClose={handleClose1} maxWidth="md" fullWidth="true">
        <Grid container spacing={2} style={{width: "100%", paddingLeft: "2.5rem"}}>
        <Grid item>
          <Container style={{ "marginTop": "2.5rem", height:"20rem"}}>
        <Typography style={{fontWeight: 300}} variant="subtitle1">Men's Clothing</Typography>
        <Typography variant="h4">Half Sleeve Round Neck T-Shirt</Typography>
        <Typography style={{fontWeight: 300}} variant="subtitle1">Maximum print area (W x H) - 15.6 in x 19.6 in</Typography>
        <br/>
        <Typography variant="h5" style={{ "marginBottom": "0.5rem"}}>Color</Typography>
        <Grid container spacing={1}>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(32, 32, 32)" onClick={changeColor} style={{"background-color": "rgb(32, 32, 32)", height: "20px", width: "20px", cursor: "pointer" }}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(255, 251, 168)" onClick={changeColor} style={{"background-color": "rgb(255, 251, 168)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(62, 52, 51)" onClick={changeColor} style={{"background-color": "rgb(62, 52, 51)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(105, 54, 23)" onClick={changeColor} style={{"background-color": "rgb(105, 54, 23)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(255, 179, 0)" onClick={changeColor} style={{"background-color": "rgb(255, 179, 0)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(255, 207, 231)" onClick={changeColor} style={{"background-color": "rgb(255, 207, 231)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(123, 222, 78)" onClick={changeColor} style={{"background-color": "rgb(123, 222, 78)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(101, 12, 23)" onClick={changeColor} style={{"background-color": "rgb(101, 12, 23)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(235, 155, 84)" onClick={changeColor} style={{"background-color": "rgb(235, 155, 84)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(3, 45, 73)" onClick={changeColor} style={{"background-color": "rgb(3, 45, 73)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(25, 61, 36)" onClick={changeColor} style={{"background-color": "rgb(25, 61, 36)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(255, 94, 0)" onClick={changeColor} style={{"background-color": "rgb(255, 94, 0)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(206, 5, 31)" onClick={changeColor} style={{"background-color": "rgb(206, 5, 31)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(16, 28, 134)" onClick={changeColor} style={{"background-color": "rgb(16, 28, 134)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(27, 206, 250)" onClick={changeColor} style={{"background-color": "rgb(27, 206, 250)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper title="Butter Yellow - #fffba8" value="rgb(255, 255, 255)" onClick={changeColor} style={{"background-color": "rgb(255, 255, 255)", height: "20px", width: "20px", cursor: "pointer"}}></Paper></Grid>
        </Grid>
        <br/>
        <Typography variant="h5" style={{ "marginBottom": "0.5rem"}}>Size</Typography>
        <Grid container spacing={1}>
        <Grid item><Chip className={activeSize === "S" ? classes.sizeActive: ""} label="S" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "M" ? classes.sizeActive: ""} label="M" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "L" ? classes.sizeActive: ""} label="L" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "XL" ? classes.sizeActive: ""} label="XL" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "2XL" ? classes.sizeActive: ""} label="2XL" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "3XL" ? classes.sizeActive: ""} label="3XL" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "4XL" ? classes.sizeActive: ""} label="4XL" variant="outlined" onClick={changeSize}/></Grid>
        <Grid item><Chip className={activeSize === "5XL" ? classes.sizeActive: ""} label="5XL" variant="outlined" onClick={changeSize}/></Grid>
        </Grid>
        <br/>
        <Typography variant="h5" style={{ "marginBottom": "0.5rem"}}>Design</Typography>
        <Grid container spacing={2}>
        <Grid item><Paper className={activeDesign === "design-1" ? classes.designActive: ""} id="design-1" onClick={changeDesign} title="rgb(255, 179, 0)" style={{"background-color": "rgb(255, 179, 0)", height: "75px", width: "75px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper className={activeDesign === "design-2" ? classes.designActive: ""} id="design-2" onClick={changeDesign} title="rgb(255, 207, 231)" style={{"background-color": "rgb(255, 207, 231)", height: "75px", width: "75px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper className={activeDesign === "design-3" ? classes.designActive: ""} id="design-3" onClick={changeDesign} title="rgb(235, 155, 84)" style={{"background-color": "rgb(235, 155, 84)", height: "75px", width: "75px", cursor: "pointer"}}></Paper></Grid>
        </Grid>
        </Container>
        <br/><br/>
        <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-dialog-native">Quantity</InputLabel>
          <Select
            input={<Input  />}
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="30">30</MenuItem>
            <MenuItem value="40">40</MenuItem>
          </Select>
        </FormControl>
        </form>
        </Grid>
        <Grid item><img style={{ height: "350px", width: "350px", marginTop:"3rem", "background-color": productBg}}
         alt="Logo"
         src="https://s3.ap-south-1.amazonaws.com/dodatafiles/public/images/5f980f545fb03.png"
         />
         <Grid item style={{ marginLeft: "6rem", marginBottom: "2rem" }}>
           <Paper square elevation={5} style={{ height: "200px", width: "160px", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column", "background": "url(data:image/png;base64,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)"}}>
             <Paper style={{"background-color": designBg, width:"75px", height:"80px", }}></Paper>
            </Paper>
         </Grid>
         </Grid>
         <br/>
         </Grid>
        <DialogActions>
          <Button onClick={handleClickOpen} variant="outlined" color="primary">
            Back
          </Button>
          <Button onClick={handleClose1} variant="outlined" color="primary">
            Print
          </Button>
          <Button onClick={handleClose1} variant="contained" color="primary">
            Proceed
          </Button>
        </DialogActions>    
      </Dialog>
      </Container>
  );
}
