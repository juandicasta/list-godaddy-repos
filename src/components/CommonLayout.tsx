import React from "react";
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from "./MainTheme";

const CommonLayout = ({children}: {children: any}) => {

  return (
    <ThemeProvider theme={MainTheme}>
      <Container maxWidth="lg" sx={(theme) => ({
          backgroundColor: (theme.palette.background as any).lightGray,
          height: '100vh',
          display: 'flex'
        })}>
        {children}
      </Container>
    </ThemeProvider>
    
  );
}

export default CommonLayout;
