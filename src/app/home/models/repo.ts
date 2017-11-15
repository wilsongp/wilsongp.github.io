export interface Repo {
  id: string;
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  primaryLanguage: Language;
  pullRequests: PullRequestConnection;
}

export interface Language {
  name: string;
  color: string;
}

export interface PullRequestConnection {
  totalCount: number;
  nodes: PullRequest[];
}

export interface PullRequest {
  title: string;
  number: number;
  url: string;
  commits: CommitConnection;
}

export interface CommitConnection {
  totalCount: number;
  nodes: CommitNode[];
}

export interface CommitNode {
  commit: Commit;
  id?: string;
  url?: string;
}

export interface Commit {
  message: string;
  commitUrl: string;
  committedDate: any;
}
