import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset({
      firstName: "Пам’ятай",
      lastName: "Про курсову роботу",
      login: "",
    });
  };

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Login:
          <input
            {...register("login", {
              required: "Поле обов'язкове для заповнення!",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Логін повинен містити тільки латинські символи!",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && (
            <p style={{ color: "red" }}>{errors?.login?.message}</p>
          )}
        </div>

        <label>
          FirstName:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів: 5",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && (
            <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
          )}
        </div>

        <label>
          LastName:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів: 5",
              },
              maxLength: {
                value: 25,
                message: "Максимальна кількість символів: 25",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && (
            <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
          )}
        </div>

        <input type="submit" value="Відправити" />
      </form>
    </div>
  );
}

export default App;
