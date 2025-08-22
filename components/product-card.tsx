import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Product } from "@/types/product";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card key={product.id} className="flex flex-col justify-between p-0">
      <CardHeader className="p-0">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="px-4 pt-4">
          <CardTitle className="text-left min-h-[3rem] flex items-start leading-tight">
            {product.title}
          </CardTitle>
        </div>
      </CardHeader>
      <div className="flex-1">
        <CardContent className="px-4">
          <p className="text-lg font-bold text-left">${product.price}</p>
          <CardDescription className="text-left">
            {product.description}
          </CardDescription>
        </CardContent>
      </div>
      <div className="px-4 pb-4">
        <CardFooter className="p-0">
          <Button className="w-full">
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
