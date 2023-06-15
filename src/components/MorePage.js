import { AppBar,Box, Card, CardHeader, Toolbar, CardMedia, Button } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const MorePage = () => {

  const { selectedItem } = useContext(DataContext);
  console.log(selectedItem)

  return (
    <div>
      <AppBar sx={{position:'static'}}>
        <Toolbar>
            Website  
        </Toolbar>
      </AppBar>
      <Box sx={{padding:'10rem'}}>
        <Card>
            <CardHeader  title={selectedItem.title}/> 
            <CardMedia 
                      component="img"
                      image={selectedItem.urlToImage}
                      alt='News Image'
                      />
                      <Box 
                      sx={{p:3}}>
                       {selectedItem.description}
                      </Box>
                      <Box sx={{p:3}}>
                      <Button variant='contained' startIcon={<KeyboardDoubleArrowLeftIcon /> }
                      component={Link}
                      to='/'
                      >
                            Back to list
                        </Button>
                      </Box>
        </Card>
      </Box>
    </div>
  )
}

export default MorePage
