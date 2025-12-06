# Registration Form – React + Zod + React-Hook-Form

👉 **Live Demo:** [Click here](https://resgistration-form-with-react.vercel.app/)

A simple registration form built with **React**, **React Hook Form**, and **Zod** for schema-based validation.  
This project was created as part of a hiring assignment and demonstrates form handling, validation, and user feedback.

## 🚀 Technologies Used

- **React 19**
- **React Hook Form**
- **Zod**
- **Tailwind CSS**
- **React Toastify**
- **Vite**

## 📌 Features

- Input validation using Zod
- Real-time error messages
- Password confirmation matching
- Clean and responsive UI
- Success toast notification on submit

## ▶️ Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📝 Notes

- Validation logic is located in `src/schemas/registrationSchema.js`.

- The form uses `react-hook-form` with `zod` resolver for schema-driven validation.

- TailwindCSS is used for styling; adjust classes in the components to change layout/appearance.

- A success toast (via `react-toastify`) appears on valid form submission.
