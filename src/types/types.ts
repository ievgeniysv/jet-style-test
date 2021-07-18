export interface IBook {
  id: string;
  author: string;
  title: string;
  cover?: string;
}

export interface IBooksState {
  books: IBook[];
}
