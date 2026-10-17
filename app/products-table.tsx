import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { log } from "console";

export type Product = {
    name: string;
    price: number;
}

type Products = Product[]

export function TableDemo({ products }: { products: Products }) {
  console.log(products);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-25">No</TableHead>
          <TableHead className="w-25">Name</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((invoice, index) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium">
              {invoice.name}
            </TableCell>
            <TableCell>{invoice.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell className="text-right">
            Total products: {products.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
