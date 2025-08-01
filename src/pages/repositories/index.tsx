import { useState } from "react";
import CommonLayout from "../../components/CommonLayout";
import Box from "@mui/material/Box";
import RepositoriesList from "./List";
import RepositoriesDetail from "./Detail";
import { Repository } from "../../apis/api";
import { useRepositoriesList } from "./hooks/repositories";

const RepositoriesPage = () => {
  const [currentRepo, setCurrentRepo] = useState<Repository | null>(null);

  const { data: repositories, isLoading } = useRepositoriesList();

  return (
    <CommonLayout>
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "98%",
          margin: "auto 0",
          backgroundColor: theme.palette.background.paper,
          borderRadius: "4px",
          border: `1px solid ${(theme.palette as any).border.gray}`,
          display: "flex",
          overflow: "hidden",
        })}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <RepositoriesList
            handleCurrentRepo={setCurrentRepo}
            repositories={repositories}
            isLoading={isLoading}
          />
        </div>
        <div
          style={{
            flex: 2,
          }}
        >
          <RepositoriesDetail repository={currentRepo} />
        </div>
      </Box>
    </CommonLayout>
  );
};

export default RepositoriesPage;
