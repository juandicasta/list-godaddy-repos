import { render, screen } from '@testing-library/react';
import RepositoriesDetail from './Detail';
import { Repository } from '../../apis/api';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from '../../components/MainTheme';

const RenderComponent = (repo: Repository | null) => {
  render(
    <ThemeProvider theme={MainTheme}>
      <RepositoriesDetail repository={repo} />
    </ThemeProvider>);
}

describe('RepositoriesDetail', () => {
  it('empty view - no repo selected', () => {
    RenderComponent(null);
    expect(screen.getByText(/no repo selected/i)).toBeInTheDocument();
  });

  it('full description', () => {
    const mockRepo = {
      id: 1,
      full_name: 'user/repo',
      description: 'foo description',
      language: 'JavaScript',
      forks_count: 10,
      open_issues_count: 5,
      watchers_count: 50,
      html_url: 'https://github.com/user/repo',
      owner: {
        html_url: 'https://github.com/user',
        avatar_url: 'https://github.com/avatar.png'
      }
    } as Repository;

    RenderComponent(mockRepo);

    expect(screen.getByText(mockRepo.full_name)).toBeInTheDocument();
    expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
    expect(screen.getByText(/10 forks/i)).toBeInTheDocument();
    expect(screen.getByText(/5 issues/i)).toBeInTheDocument();
    expect(screen.getByText(/50 watchers/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go to repo/i })).toHaveAttribute('href', mockRepo.html_url);
  });
});
