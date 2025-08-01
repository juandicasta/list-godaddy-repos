import { render, screen, fireEvent } from "@testing-library/react";
import RepositoriesList from "./List";
import { Repository } from "../../apis/api";
import { Dispatch, SetStateAction } from "react";
import { ThemeProvider } from "@mui/material/styles";
import MainTheme from "../../components/MainTheme";

const mockRepos = [
  {
    id: 1,
    full_name: "user/repo-1",
    description: "First repo",
  },
  {
    id: 2,
    full_name: "user/repo-2",
    description: "Second repo",
  },
] as Repository[];

const RenderComponent = (
  handleCurrentRepo: Dispatch<SetStateAction<Repository | null>>,
  loading?: boolean,
  repos?: Repository[]
) => {
  render(
    <ThemeProvider theme={MainTheme}>
      <RepositoriesList
        handleCurrentRepo={handleCurrentRepo}
        repositories={repos}
        isLoading={!!loading}
      />
    </ThemeProvider>
  );
};

describe("RepositoriesList", () => {
  it("show loading", () => {
    const handleCurrentRepo = jest.fn();

    RenderComponent(handleCurrentRepo, true);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("show no data", () => {
    const handleCurrentRepo = jest.fn();

    RenderComponent(handleCurrentRepo, false, []);

    expect(screen.getByText(/No data/i)).toBeInTheDocument();
  });

  it("show the repositories and select one", () => {
    const handleCurrentRepo = jest.fn();

    RenderComponent(handleCurrentRepo, false, mockRepos);

    expect(screen.getByText("Repositories")).toBeInTheDocument();
    expect(screen.getByText("user/repo-1")).toBeInTheDocument();
    expect(screen.getByText("user/repo-2")).toBeInTheDocument();

    const firstRepoItem = screen.getByText("user/repo-1");
    fireEvent.click(firstRepoItem);
    expect(handleCurrentRepo).toHaveBeenCalled();
  });
});
