import { createTheme } from '@mui/material/styles';
import LenguagesColors from './LenguagesColors.json';

const MainTheme = createTheme({
  palette: {
    background: {
      paper: '#fff',
      lightGray: '#f0f3f5',
      gray: '#f6f8fa'
    } as any,
    border: {
      gray: '#919497'
    },
    lenguagesColors: LenguagesColors.lenguages,
  } as any,
});

export default MainTheme;
