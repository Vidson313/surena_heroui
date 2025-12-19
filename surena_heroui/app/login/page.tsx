"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card, CardHeader, CardBody } from "@heroui/card";

import { useAuthActions } from "@/app/actions/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const { login, signup } = useAuthActions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let result;

    if (mode === "login") {
      result = await login(email, password);
    } else {
      result = await signup(email, password);
    }

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
    } else {
      if (mode === "signup") {
        alert(
          "ثبت‌نام با موفقیت انجام شد. اگر نیاز به تایید ایمیل باشد، لطفا ایمیل خود را چک کنید.",
        );
      } else {
        alert("ورود با موفقیت انجام شد.");
      }
    }
  };

  return (
    <div className="container mx-auto max-w-md py-20 px-4">
      <Card className="p-4 shadow-xl border-t-4 border-primary">
        <CardHeader className="flex flex-col gap-1 items-center pb-8">
          <h1 className="text-3xl font-bold">
            {mode === "login" ? "ورود به پنل" : "ثبت‌نام"}
          </h1>
          <p className="text-default-500">
            {mode === "login"
              ? "اطلاعات خود را برای ورود وارد کنید"
              : "برای ایجاد حساب کاربری اطلاعات زیر را تکمیل کنید"}
          </p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              required
              color="primary"
              label="ایمیل"
              placeholder="example@mail.com"
              type="email"
              value={email}
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              required
              color="primary"
              label="رمز عبور"
              placeholder="••••••••"
              type="password"
              value={password}
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="font-bold text-lg h-12 mt-2"
              color="primary"
              isLoading={loading}
              type="submit"
            >
              {mode === "login" ? "ورود" : "ثبت‌نام"}
            </Button>

            <div className="text-center mt-4">
              <button
                className="text-primary hover:underline transition-all"
                type="button"
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
              >
                {mode === "login"
                  ? "هنوز حساب کاربری ندارید؟ ثبت‌نام کنید"
                  : "قبلاً ثبت‌نام کرده‌اید؟ وارد شوید"}
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
