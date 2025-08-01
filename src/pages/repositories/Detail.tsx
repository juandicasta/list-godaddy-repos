import React from "react";
import { Repository } from "../../apis/api";
import {
  Box,
  Avatar,
  Typography,
  Link,
  Divider,
  Button,
} from "@mui/material";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import AdjustIcon from "@mui/icons-material/Adjust";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

const extraInfoStyle = { display: "flex", alignItems: "center" };

const NoSelectedRepo = () => {
  return (
    <>
      <GitHubIcon
        color="disabled"
        sx={{
          width: 150,
          height: 150,
          paddingBottom: "20px",
        }}
      />
      <div>No repo selected.</div>
    </>
  );
};

interface RepositioriesDetailProps {
  repository: Repository | null;
}

const RepositoriesDetail: React.FC<RepositioriesDetailProps> = ({
  repository,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 25px",
      }}
    >
      {!repository ? (
        <NoSelectedRepo />
      ) : (
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href={repository.owner.html_url}>
              <Avatar
                alt="owner repo logo"
                src={repository.owner.avatar_url}
                sx={{ width: 40, height: 40 }}
              />
            </Link>
            <Typography
              variant="h4"
              sx={{
                paddingLeft: "20px",
              }}
            >
              {repository.full_name}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "20px 0",
            }}
          >
            <p style={{ fontStyle: "italic" }}>About:</p>
            <p>{repository.description}</p>
            <p style={{ fontStyle: "italic" }}>Lenguage:</p>
            <p style={extraInfoStyle}>
              <Box sx={(theme) => ({
                backgroundColor: (theme.palette as any).lenguagesColors[repository.language],
                width: '10px',
                height: '10px',
                borderRadius: '5px',
                marginRight: '5px',
              })} />
              {repository.language}
            </p>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-around",
              color: theme.palette.grey[700],
            })}
          >
            <div style={extraInfoStyle}>
              <AltRouteIcon
                fontSize="small"
                sx={{
                  paddingRight: "10px",
                }}
              />
              {`${repository.forks_count} forks`}
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={extraInfoStyle}>
              <AdjustIcon
                fontSize="small"
                sx={{
                  paddingRight: "10px",
                }}
              />
              {`${repository.open_issues_count} issues`}
            </div>
            <Divider orientation="vertical" flexItem />
            <div style={extraInfoStyle}>
              <VisibilityIcon
                fontSize="small"
                sx={{
                  paddingRight: "10px",
                }}
              />
              {`${repository.watchers_count} watchers`}
            </div>
          </Box>
          <Button
            variant="outlined"
            href={repository.html_url}
            sx={{ marginTop: "20px" }}
          >
            Go to repo
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RepositoriesDetail;
