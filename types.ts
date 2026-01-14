
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Machine Learning' | 'Web Development' | 'Other';
  liveUrl?: string;
  codeUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}
