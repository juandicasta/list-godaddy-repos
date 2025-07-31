import { createTheme } from '@mui/material/styles';

const MainTheme = createTheme({
  palette: {
    background: {
      paper: '#fff',
      lightGray: '#f0f3f5',
      gray: '#f6f8fa'
    } as any,
    border: {
      gray: '#919497'
    }
  } as any,
});

export default MainTheme;
