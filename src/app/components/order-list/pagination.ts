import { Order } from "../../models/order";

export class Pagination
{
  private pageSize: number = 5;
  private filteredData: Order[];
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
    this.filteredData = this.data;
  }

  filter(searchString: string) {
    if (searchString) {
      this.filteredData = this.data.filter(order => {
        if (order.id.toString() == searchString)
        {
          return true;
        }
        if (order.customerName.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
        {
          return true;
        }
        if (order.date == searchString)
        {
          return true;
        }
      })
    } else
    {
      this.filteredData = this.data;
    }
    this.getPageLines(1);
  }

  getPageLines(pageNumber: number): void {
    this.pageLines = this.filteredData.slice((this.pageSize * (pageNumber - 1)), this.pageSize * pageNumber);
  }
}
