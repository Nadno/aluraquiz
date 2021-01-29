export interface QuizDB {
  bg: string;
  title: string;
  description: string;
  questions: Array<{
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  }>;
}

export interface ThemeDB {
  colors: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    wrong: string;
    success: string;
  };
  borderRadius: string;
}

export interface ExternalDB {
  bg: string;
  title: string;
  description: string;
  questions: Array<{
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  }>

  external: string[];
  theme: ThemeDB;
}
