export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface TerminalLine {
  text: string;
  type: 'system' | 'input' | 'output' | 'error';
}