function InputField({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
  hidden,
}) {
  const errorMessage = typeof error === "string" ? error : error?.message;
  return (
    <div className={`flex flex-col gap-2 w-full  ${hidden ? "hidden" : ""}`}>
      <label htmlFor={name} className="gap-0 text-gray-500 text-xs sm:text-sm">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className={`p-2 rounded-md outline-0 ring-[1.5px] ring-gray-300 w-full text-sm ${
          errorMessage ? "ring-red-400" : ""
        }`}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {errorMessage && <p className="text-red-400 text-xs">{errorMessage}</p>}
    </div>
  );
}

export default InputField;
