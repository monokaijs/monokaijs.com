interface BlogPost {
  _id: string;
  title: string;
  summary: string;
  body: string;
  type?: 'markdown' | 'html';
  source?: string;
}
