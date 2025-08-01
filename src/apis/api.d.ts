export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: OwnerRepository;
  language: string;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  html_url: string;
};

export type OwnerRepository = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}
