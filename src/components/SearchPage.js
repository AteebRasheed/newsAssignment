import { AppBar,Box, Card, CardContent, CardHeader, CardActions, Typography, Toolbar, CardMedia, Button, TextField } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useParams, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const SearchPage = () => {
  const { selectedItem } = useContext(DataContext);
  console.log('SEARCH PAGE',selectedItem)

  return (
    <div>
      <AppBar sx={{position:'static'}}>
        <Toolbar>
            Website  
        </Toolbar>
      </AppBar>
      <Box sx={{padding:'70px'}}>
            <Button variant='contained' startIcon={<KeyboardDoubleArrowLeftIcon /> }
                            component={Link}
                            to='/'
                            >
                                    Back to Home
                                </Button>
      <Box sx={{display:'flex',justifyContent:'center',marginBottom:'40px'}} >
      <TextField
              sx={{
                width: "25%",
                
                backgroundColor: "white",
                height: "40px",
                borderRadius: "30px",
                border: "none",
            
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  height: "40px",
                  border: "none",
                },
              }}
              variant="outlined"
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />

      </Box>
   
       
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader title={'Title'}/>
                <CardMedia
                    sx={{ height: 140 }}
                      component="img"
                      alt='News Image'
                />
                <CardContent>

                    <Typography variant="body2" color="text.secondary">
                    Description
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent:'flex-end', display:'flex'}}>
                    
                    <Button  size="small" endIcon={<KeyboardDoubleArrowRightIcon /> }>More </Button>
                </CardActions>
                </Card>
          
      </Box>
    
   
    </div>
  )
}

export default SearchPage
