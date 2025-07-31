import { useState } from 'react';
import CommonLayout from "../../components/CommonLayout";
import Box from '@mui/material/Box';
import RepositoriesList from "./List";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Repository } from "../../apis/api";

const queryClient = new QueryClient();

const RepositoriesPage = () => {
  const [currentRepo, setCurrentRepo] = useState<Repository | null>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <CommonLayout>
      <Box sx={(theme) => ({
        width: '100%',
        height: '98%',
        margin: 'auto 0',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '4px',
        border: `1px solid ${(theme.palette as any).border.gray}`,
        display: 'flex',
        overflow: 'hidden'
      })}>
        <div style={{
          flex: 1,
        }}>
          <RepositoriesList handleCurrentRepo={setCurrentRepo}/>
        </div>
        <div style={{
          flex: 2,
        }}>
          {currentRepo ? currentRepo.full_name : "No repo selected" }
        </div>
      </Box>
    </CommonLayout>
    </QueryClientProvider>
  )
}

export default RepositoriesPage;
