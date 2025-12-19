"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { ShoppingCart, Trash2, X, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Link } from "@heroui/link";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeItem, total } = useCart();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="sm">
      <DrawerContent className="bg-slate-950 text-white">
        <DrawerHeader className="border-b border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">سبد خرید شما</h2>
          </div>
        </DrawerHeader>

        <DrawerBody className="py-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="h-16 w-16 rounded-full bg-slate-900 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-slate-700" />
              </div>
              <p className="text-slate-500">سبد خرید شما فعلاً خالی است.</p>
              <Button
                as={Link}
                href="/products"
                className="ds-btn ds-btn-primary mt-2"
                onClick={onClose}
              >
                مشاهده محصولات
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="ds-card p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {new Intl.NumberFormat("fa-IR").format(item.price)} تومان
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">×{item.quantity}</span>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      className="text-red-500 hover:bg-red-500/10"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </DrawerBody>

        {cart.length > 0 && (
          <DrawerFooter className="flex-col gap-4 border-t border-slate-900 bg-slate-950/50 p-6">
            <div className="flex items-center justify-between w-full">
              <span className="text-slate-400">مجموع کل:</span>
              <span className="text-xl font-bold text-white">
                {new Intl.NumberFormat("fa-IR").format(total)} تومان
              </span>
            </div>
            <Button
              as={Link}
              href="/auth" // Redirect to checkout/auth
              className="ds-btn ds-btn-primary w-full h-12 text-lg"
              endContent={<ArrowRight className="h-5 w-5" />}
              onClick={onClose}
            >
              تکمیل سفارش و پرداخت
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
