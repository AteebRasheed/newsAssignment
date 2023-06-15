import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import './App.css';
import {theme} from './Theme'
import Router from './routes';



function App() {
  return (
    <div  >
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
        <Router /> 
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
