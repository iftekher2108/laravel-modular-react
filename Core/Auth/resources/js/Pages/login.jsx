import GuestLayout from "@core/Auth/resources/js/layouts/guestLayout";
import { useForm } from "@inertiajs/react";

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    username: "",
    password: "",
    remember: false,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('auth.login.submit'), data);
  };

  return (
    <GuestLayout>

            {/* Form Card */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Email Field */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold mb-1">Email</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered  w-full focus:input-primary px-3"
                        value={data.username}
                        onChange={(e) => setData("username", e.target.value)}
                        required
                      />
                      <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                  </div>

                  {/* Password Field */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold mb-1">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full focus:input-primary px-2"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        required
                      />
                      <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

                    {/* <label className="label flex justify-end">
                      <a href="#" className="label-text-alt link link-hover text-primary">
                        Forgot password?
                      </a>
                    </label> */}
                  </div>

                  {/* Remember Me */}
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="checkbox checkbox-primary" checked={data.remember} onChange={(e) => setData("remember", e.target.checked)} />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`btn btn-primary w-full mt-2 ${processing ? "loading" : ""}`}
                    disabled={processing}
                  >
                    <i className={`fas ${processing ? "fa-spinner fa-spin" : "fa-sign-in-alt"} mr-2`}></i>
                    {processing ? "Logging in..." : "Log In"}
                  </button>
                </form>

                {/* Divider */}
                {/* <div className="divider my-4">OR</div>

                Sign Up Link
                <p className="text-center text-sm">
                  Don't have an account?{" "}
                  <a href="/auth/register" className="link link-primary font-semibold">
                    Sign up here
                  </a>
                </p> */}
              </div>
            </div>

    </GuestLayout>
  );
}
