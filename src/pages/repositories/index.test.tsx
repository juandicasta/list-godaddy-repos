import { render, screen } from "@testing-library/react";
import RepositoriesPage from "./index";
import { Repository } from "../../apis/api";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "../../components/MainTheme";
import { repositories } from "../../apis/requests";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mockRepos = [
  {
    id: 1,
    full_name: 'user/repo-1',
    description: 'foo description 2',
    language: 'JavaScript',
    forks_count: 5,
    open_issues_count: 15,
    watchers_count: 2,
    html_url: 'https://github.com/user/repo-1',
    owner: {
      html_url: 'https://github.com/user',
      avatar_url: 'https://github.com/avatar.png'
    }
  },
  {
    id: 2,
    full_name: 'user/repo-2',
    description: 'foo description 2',
    language: 'PHP',
    forks_count: 10,
    open_issues_count: 5,
    watchers_count: 50,
    html_url: 'https://github.com/user/repo-2',
    owner: {
      html_url: 'https://github.com/user',
      avatar_url: 'https://github.com/avatar.png'
    }
  },
] as Repository[];

jest.mock("../../apis/requests");

const mockRepositories = repositories as jest.Mocked<typeof repositories>;

const RenderComponent = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={MainTheme}>
        <RepositoriesPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

describe("RepositoriesPage", () => {
  it("show list of repositories and no datail component", async () => {
    mockRepositories.index.mockResolvedValueOnce(mockRepos);

    RenderComponent();

    expect(await screen.findByText("user/repo-1")).toBeInTheDocument();
    expect(await screen.findByText("user/repo-2")).toBeInTheDocument();

    expect(await screen.findByText(/no repo selected/i)).toBeInTheDocument();
  })
});
