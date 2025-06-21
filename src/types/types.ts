export type Tool = {
  id: string;
  image: string;
  title: string;
};

export type Project = {
  id: string;
  image: string;
  title: string;
  description: string;
  github: string;
  page: string;
  tools: string[];
};
