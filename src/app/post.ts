export class Post {
  constructor(
    public id: number,
    public topic: string,
    public content: string,
    public date: number,
    public disorder: number,
    public author?: string,
  ) { }
}

