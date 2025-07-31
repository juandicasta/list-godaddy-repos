export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: OwnerRepository;
};

export type OwnerRepository = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}
