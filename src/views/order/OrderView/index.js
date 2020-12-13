// import React from 'react';
// import {
//   Box,
//   Container,
//   makeStyles,
//   withStyles,
//   InputBase
// } from '@material-ui/core';
// import Page from 'src/components/Page';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Switch from '@material-ui/core/Switch';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     margin: 'auto',
//     width: 'fit-content',
//   },
//   formControl: {
//     marginTop: theme.spacing(2),
//     minWidth: 120,
//   },
//   formControlLabel: {
//     marginTop: theme.spacing(1),
//   },
// }));

// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }))(InputBase);


// const LibraryView = () => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [fullWidth, setFullWidth] = React.useState(true);
//   const [maxWidth, setMaxWidth] = React.useState('sm');

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Page
//       className={classes.root}
//       title="Create Order"
//     >
//       <Container maxWidth="lg">
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Create Order
//       </Button>
//       <Dialog
//         fullWidth="true"
//         maxWidth="sm"
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="max-width-dialog-title"
//       >
//         <DialogTitle id="max-width-dialog-title">ADD PRODUCT</DialogTitle>
//         <DialogContent>
//           {/* <DialogContentText>Choose Product</DialogContentText> */}
//           <form className={classes.form} noValidate>
//             <FormControl className={classes.formControl}>
//         <InputLabel id="input-category">Category</InputLabel>
//         <Select
//           labelId="category-label"
//           id="category-select"
//           value=""
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="men">Men's Clothing</MenuItem>
//           <MenuItem value="women">Women's Clothing</MenuItem>
//           <MenuItem value="kids">Kid's Clothing</MenuItem>
//         </Select>
//       </FormControl>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//       </Container>
//     </Page>
//   );
// };

// export default LibraryView;

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
    border: "3px solid rgb(206, 5, 31)!important"
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
  // const [activeColor, setactiveColor] = React.useState("");
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
    console.log(event.target.getAttribute('id'));
  }

  return (
      <Container maxWidth="lg" style={{ "margin-top": "2rem"}}>
        <Typography style={{fontWeight: 300}} variant="h2">CREATE <strong>ORDER</strong></Typography>
      <Paper style={{marginTop:"2rem", width: "100%", height: "16rem", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column",  "border-radius": "10px", boxShadow: "0 70px 200px 15px rgba(63,63,68,0.05)"}} >
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
          <Container style={{ "margin-top": "2.5rem", height:"20rem"}}>
        <Typography style={{fontWeight: 300}} variant="subtitle1">Men's Clothing</Typography>
        <Typography variant="h4">Half Sleeve Round Neck T-Shirt</Typography>
        <Typography style={{fontWeight: 300}} variant="subtitle1">Maximum print area (W x H) - 15.6 in x 19.6 in</Typography>
        <br/>
        <Typography variant="h5" style={{ "margin-bottom": "0.5rem"}}>Color</Typography>
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
        <Typography variant="h5" style={{ "margin-bottom": "0.5rem"}}>Size</Typography>
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
        <Typography variant="h5" style={{ "margin-bottom": "0.5rem"}}>Design</Typography>
        <Grid container spacing={2}>
        <Grid item><Paper className={activeDesign === "design-1" ? classes.designActive: ""} id="design-1" onClick={changeDesign} title="Butter Yellow - #fffba8" style={{"background-color": "rgb(255, 179, 0)", height: "75px", width: "75px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper className={activeDesign === "design-2" ? classes.designActive: ""} id="design-2" onClick={changeDesign} title="Butter Yellow - #fffba8" style={{"background-color": "rgb(255, 207, 231)", height: "75px", width: "75px", cursor: "pointer"}}></Paper></Grid>
        <Grid item><Paper className={activeDesign === "design-3" ? classes.designActive: ""} id="design-3" onClick={changeDesign} title="Butter Yellow - #fffba8" style={{"background-color": "rgb(235, 155, 84)", height: "75px", width: "75px", cursor: "pointer"}}></Paper></Grid>
        </Grid>
        </Container></Grid>
        <Grid item><img style={{ height: "400px", width: "400px", marginTop:"3rem", "background-color": productBg}}
         alt="Logo"
         src="https://s3.ap-south-1.amazonaws.com/dodatafiles/public/images/5f980f545fb03.png"
         /></Grid>
         <Grid item>
           <Link>Print</Link>
           <Paper square elevation={5} style={{"background-color": "white", height: "200px", width: "160px", marginLeft:"5rem"}}></Paper>
         </Grid>
         </Grid>
        <DialogActions>
          <Button onClick={handleClickOpen} variant="outlined" color="primary">
            Back
          </Button>
          <Button onClick={handleClose1} variant="contained" color="primary">
            Proceed
          </Button>
        </DialogActions>    
      </Dialog>
      </Container>
  );
}
