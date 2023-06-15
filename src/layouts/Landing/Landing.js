import { Typography, Box, CircularProgress, Button, ButtonGroup, Grid, Card, CardHeader, CardMedia } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom/dist'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';


const useStyles = makeStyles((theme) => ({
    root:{
        margin: theme.spacing(15),
    },
    top: {
      display:'flex',
      justifyContent:'space-between'
    },
    bottom: {
      border: '2px solid #000', 
      minHeight:'60vh',
      padding: theme.spacing(4)
    },
    container: {
      marginTop: theme.spacing(5)
    },
    card: {
      padding: theme.spacing(2)
    }
}))
const MAX_DESC_LENGTH=100
  const DescriptionCard = ({description}) => {
    const s_desc = description.length > MAX_DESC_LENGTH 
    ? `${description.substring(0, MAX_DESC_LENGTH)}...`
    : description;
    return(
      <Typography sx={{color:'#5a5a5a'}}>
     {s_desc}
    </Typography>
    )
  }

const Landing = () => {
    const classes = useStyles()
    const { setSelectedItem } = useContext(DataContext);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData]= React.useState([])
    const [country, setCountry] = React.useState('us')
    React.useEffect(()=> {
      getData()
    }, [country])
    const getData = async () => {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0b47b47fdbc0409f83523a446cdd42f7`)
      console.log(res.data.articles)
      setData(res.data.articles) 
    }
    const handleCountryChange = (selectedCountry) => {
      setCountry(selectedCountry)
    }
    const handleClick = (ind, val) => {
      setSelectedItem(val);
      console.log('Clicked:', ind, val);
      
    };
    const handleButtonClick = async(buttonId) => {
      setSelectedButton(buttonId);
      if(buttonId === 1)
      {
        setIsLoading(true);
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0b47b47fdbc0409f83523a446cdd42f7`)
        setData(res.data.articles);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
      <Box className={classes.root}>
        <Box sx={{border: '2px solid #000'}}>
        <Box className={classes.top}>
          <Box>
          <ButtonGroup>
          <Button 
            onClick={() => handleButtonClick(1)}
            variant={selectedButton === 1 ? 'contained' : 'outlined'}
            disabled={isLoading}
          >
             {isLoading ? <CircularProgress size={24} /> : 'Top News'}
          </Button>
          <Button 
            onClick={() => handleButtonClick(2)}
            variant={selectedButton === 2 ? 'contained' : 'outlined'}
          >
            Categories
          </Button>
          <Button 
          component={Link}
          to='/search'
            onClick={() => handleButtonClick(3)}
            variant={selectedButton === 3 ? 'contained' : 'outlined'}
            
          >
            Search
          </Button>
          </ButtonGroup> 
          </Box>
          <Box>
            <ButtonGroup>
          <Button onClick={() => handleCountryChange('gb')}
          variant={country === 'gb' ? 'contained' : 'outlined'}
          >GB</Button>
          <Button onClick={() => handleCountryChange('us')}
          variant={country === 'us' ? 'contained' : 'outlined'}
          >US</Button>
            </ButtonGroup> 
          </Box>
        </Box>
        </Box>
        <Box className={classes.bottom}>
          <Box>
          <ul>
            <li>
              Top News from {country==='gb' ? 'Great Britain' : 'USA' }: 
            </li>
          </ul>
          </Box>
          <Box className={classes.container}>
            <Grid container spacing={2}>
            {
                    data.map((val, ind)=> {
                      return(
                        <>
                         <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                  
                  <Card elevation={2} sx={{height:'100%'}} >
                    <Box sx={{height:'120px'}} >
                    <Typography sx={{fontWeight:'bold'}}>
                      {val.title}
                    </Typography>
                    </Box>
                      <CardMedia 
                      component="img"
                      sx={{height:'160px'
                      }}
                      image={val.urlToImage}
                      alt='News Image'
                      />
                      <Box className={classes.card}>
                      <DescriptionCard description={val.description ? val.description : 'No description found'} />
                      </Box>
                      <Box sx={{float:'right'}}>
                        <Link
                        to={{
                          pathname: `/more/${ind}`,
                          state: val
                        }}
                        >
                        <Button endIcon={<KeyboardDoubleArrowRightIcon />}
                        onClick={() => handleClick(ind, val)}
                        >
                          Read More
                        </Button>
                        </Link>
                      </Box>
                  </Card>
              </Grid>
                        </>
                      )
                    })
                  }
               
            </Grid>
          </Box>
        </Box>
      </Box>
       
    </Page>
  )
}

export default Landing
