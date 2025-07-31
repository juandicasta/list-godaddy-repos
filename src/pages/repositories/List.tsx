import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useRepositoriesList } from "../../hooks/repositories";

const RepositoriesList = () => {
  const { data: repos, isLoading } = useRepositoriesList();
  return (
    <Box sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRight: `1px solid ${(theme.palette.background as any).gray}`,
    })}>
      <Typography variant="h6" sx={{ p: 2 }}>
        HEADER
      </Typography>
      {isLoading ? (
        <Box sx={{ p: 2 }}>Loading...</Box>
      ) : repos && repos.length > 0 ? (
        <Box
          sx={{
            flex: 1,
            overflowY: "auto", // scroll vertical si se necesita
          }}
        >
          <List>
            {repos.map((repo) => (
              <ListItem key={repo.id} divider>
                <ListItemText primary={repo.full_name} secondary={repo.description}/>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Box sx={{ p: 2 }}>No data</Box>
      )}
    </Box>
  );
};

export default RepositoriesList;
