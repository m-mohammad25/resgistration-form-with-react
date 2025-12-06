import { string, z } from "zod";

export const registrationSchema = z
  .object({
    name: z
      .string()
      .min(1, { error: "الاسم مطلوب" })
      .min(3, { error: "حقل الاسم يجب أن لا يقل عن 3 أحرف" }),

    email: z
      .string()
      .min(1, "البريد الإلكتروني مطلوب")
      .email({ error: "البريد الإلكتروني غير صحيح" }),

    password: z
      .string()
      .min(1, { error: "كلمة السر مطلوبة" })
      .min(8, { message: "يجب أن لا تقل كلمة المرور عن 8 أحرف" }),
    confirmPassword: z.preprocess(
      (value) => value || "",
      z.string().min(1, { error: "تأكيد كلمة السر مطلوب" })
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "كلمتا السر غير متطابقتين",
    path: ["confirmPassword"],
  });
