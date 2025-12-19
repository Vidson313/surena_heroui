"use client";

import { Button } from "@heroui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { addToast } from "@heroui/toast";

interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
}

export default function AddToCartButton({
  product,
  className,
  size = "md",
  variant = "solid",
}: {
  product: Product;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "flat" | "bordered";
}) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
    });

    addToast({
      title: "افزوده شد",
      description: `${product.name} به سبد خرید شما اضافه شد.`,
      color: "success",
    });
  };

  return (
    <Button
      className={className}
      size={size}
      variant={variant}
      onClick={handleAdd}
      startContent={<ShoppingCart className="h-4 w-4" />}
    >
      افزودن به سبد
    </Button>
  );
}
