"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { RadioGroup, Radio } from "@heroui/radio";
import { Card } from "@heroui/card";
import { CheckCircle2, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, title: "انتخاب سرویس" },
  { id: 2, title: "جزئیات پروژه" },
  { id: 3, title: "اطلاعات تماس" },
];

export default function ProjectRequestForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    budget: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to Supabase or API
    console.log("Form Data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="ds-card-glow p-12 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
        >
          <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />
        </motion.div>
        <h2 className="mt-6 text-2xl font-bold text-white">درخواست شما با موفقیت ثبت شد!</h2>
        <p className="mt-4 text-slate-400">
          تیم فنی سورنانت حداکثر تا ۲۴ ساعت آینده با شما تماس خواهند گرفت.
        </p>
        <Button
          className="ds-btn ds-btn-primary mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          ثبت درخواست جدید
        </Button>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex justify-between">
        {steps.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                step >= s.id
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-slate-700 text-slate-500"
              }`}
            >
              {s.id}
            </div>
            <span className={`text-xs ${step >= s.id ? "text-blue-400" : "text-slate-500"}`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">کدام سرویس مد نظر شماست؟</h3>
              <RadioGroup
                value={formData.service}
                onValueChange={(v) => setFormData({ ...formData, service: v })}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {["طراحی سایت اختصاصی", "سئو و رشد ارگانیک", "امنیت و پشتیبانی", "مشاوره استراتژیک"].map((s) => (
                    <Radio
                      key={s}
                      value={s}
                      className="ds-card flex w-full max-w-none cursor-pointer p-4 data-[selected=true]:border-blue-500"
                    >
                      <span className="text-sm text-slate-300">{s}</span>
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">جزئیات پروژه خود را بگویید</h3>
              <div className="space-y-4">
                <Input
                  label="بودجه تقریبی (تومان)"
                  placeholder="مثلاً ۲۰ میلیون"
                  value={formData.budget}
                  onValueChange={(v) => setFormData({ ...formData, budget: v })}
                />
                <Textarea
                  label="توضیحات کوتاه پروژه"
                  placeholder="نیازهای اصلی خود را اینجا بنویسید..."
                  value={formData.description}
                  onValueChange={(v) => setFormData({ ...formData, description: v })}
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">چطور با شما در ارتباط باشیم؟</h3>
              <div className="grid gap-4">
                <Input
                  label="نام و نام خانوادگی"
                  value={formData.name}
                  onValueChange={(v) => setFormData({ ...formData, name: v })}
                />
                <Input
                  label="شماره تماس"
                  value={formData.phone}
                  onValueChange={(v) => setFormData({ ...formData, phone: v })}
                />
                <Input
                  label="ایمیل (اختیاری)"
                  type="email"
                  value={formData.email}
                  onValueChange={(v) => setFormData({ ...formData, email: v })}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex justify-between gap-4">
          <Button
            className="ds-btn border-slate-700 text-slate-400"
            isDisabled={step === 1}
            variant="bordered"
            onClick={handleBack}
            startContent={<ChevronRight className="h-4 w-4" />}
          >
            مرحله قبل
          </Button>
          
          {step === 3 ? (
            <Button
              className="ds-btn ds-btn-primary px-10"
              type="submit"
              endContent={<Send className="h-4 w-4" />}
            >
              ارسال درخواست نهایی
            </Button>
          ) : (
            <Button
              className="ds-btn ds-btn-primary px-10"
              isDisabled={step === 1 && !formData.service}
              onClick={handleNext}
              endContent={<ChevronLeft className="h-4 w-4" />}
            >
              مرحله بعد
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
