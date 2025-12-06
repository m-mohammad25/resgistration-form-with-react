import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../schemas/registrationSchema";
import { toast } from "react-toastify";

import InputField from "./InputField";

const RegistrationForm = () => {
  document.title = "التسجيل";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    toast.success(`تهانينا! لقد قمت بتسجيل بياناتك بنجاح!`);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 bg-white shadow-2xl p-6 sm:p-12 rounded-md"
    >
      <h1 className="flex items-center gap-2 text-md sm:text-lg">
        <img src={"/logo.png"} alt="logo" width={30} height={30} />
        أكاديمية أبوستروفي التعليمية
      </h1>
      <div className="flex flex-col gap-4">
        <InputField
          label={"الاسم"}
          name={"name"}
          register={register}
          error={errors?.name}
        />

        <InputField
          label="البريد الإلكتروني"
          name="email"
          register={register}
          error={errors?.email}
        />

        <InputField
          label="كلمة السر"
          name="password"
          type="password"
          register={register}
          error={errors?.password}
        />

        <InputField
          label="تأكيد كلمة السر"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors?.confirmPassword}
        />
      </div>
      <button className="bg-apostrophe-orange hover:bg-[#e66300] p-2 rounded-md text-white text-sm sm:text-lg transition-colors duration-300 cursor-pointer">
        {"تسجيل"}
      </button>
    </form>
  );
};

export default RegistrationForm;
