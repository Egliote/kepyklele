import { Order } from "../../models/order";

export class Pagination
{
  private pageSize: number=5;
  public pageLines: Order[];
  public totalPages: number;
  public allPages: number[];

  constructor(private data: Order[]) {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.allPages = Array(this.totalPages);
    for (let i = 0; i < this.totalPages; i++)
    {
      this.allPages[i] = i+1;
    }
   
  }
  getPageLines(pageNumber: number): void {
    this.pageLines=this.data.slice((this.pageSize * (pageNumber - 1)), this.pageSize * pageNumber);
  }
}
