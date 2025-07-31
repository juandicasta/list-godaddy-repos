import CommonLayout from "../../components/CommonLayout";
import Box from '@mui/material/Box';
import RepositoriesList from "./List";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const RepositoriesPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CommonLayout>
      <Box sx={(theme) => ({
        width: '100%',
        height: '98%',
        margin: 'auto 0',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '4px',
        border: `1px solid ${(theme.palette.background as any).gray}`,
        display: 'flex',
      })}>
        <div style={{
          flex: 1,
        }}>
          <RepositoriesList />
        </div>
        <div style={{
          flex: 2,
        }}>Detalle</div>
      </Box>
    </CommonLayout>
    </QueryClientProvider>
  )
}

export default RepositoriesPage;
