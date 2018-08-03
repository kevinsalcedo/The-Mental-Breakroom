export class Story {
  constructor(
    public id: number,
    public topic: string,
    public content: string,
    public date: number,
    public author?: string
  ) { }
}
