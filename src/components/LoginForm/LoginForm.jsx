import { Formik, Field, Form } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error("invalid credentials");
      });
    options.resetForm();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
