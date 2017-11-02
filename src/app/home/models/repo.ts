export interface Repo {
  id: string;
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  primaryLanguage: Language;
}

export interface Language {
  name: string;
  color: string;
}
