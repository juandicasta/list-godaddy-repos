import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import { Repository } from "../../apis/api";

const infoBoxStyled = { display: "flex", justifyContent: "center", p: 2 };

interface RepositoriesListProps {
  handleCurrentRepo: Dispatch<SetStateAction<Repository | null>>;
  repositories?: Repository[];
  isLoading: boolean;

}

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  handleCurrentRepo,
  repositories,
  isLoading
}) => {
  const [idRepoSelected, setRepoSelected] = useState(0);

  const handleRepoItemClick = (repo: Repository) => {
    setRepoSelected(repo.id);
    handleCurrentRepo(repo);
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRight: `1px solid ${(theme.palette as any).border.gray}`,
      })}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          background: (theme.palette.background as any).gray,
          display: "flex",
          justifyContent: "center",
          borderBottom: `1px solid ${(theme.palette as any).border.gray}`,
          p: 1,
        })}
      >
        Repositories
      </Typography>
      {isLoading ? (
        <Box sx={infoBoxStyled}>Loading...</Box>
      ) : repositories && repositories.length > 0 ? (
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          <List>
            {repositories.map((repo) => (
              <ListItemButton
                selected={repo.id === idRepoSelected}
                onClick={(event) => handleRepoItemClick(repo)}
                key={repo.id}
              >
                <ListItem divider>
                  <ListItemText
                    primary={repo.full_name}
                    secondary={repo.description}
                  />
                </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Box>
      ) : (
        <Box sx={infoBoxStyled}>No data</Box>
      )}
    </Box>
  );
};

export default RepositoriesList;
