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
      <div className="min-h-screen flex items-stretch">
        {/* Left Side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-blue-500 to-blue-700 items-center justify-center p-12">
          <div className="text-center text-white max-w-md">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
            <p className="text-blue-100 text-lg">Sign in to your account to continue your journey</p>
          </div>
        </div>

        {/* Right Side - Login Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-base-100">
          <div className="w-full max-w-md">
            {/* Logo for Mobile */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-3xl font-bold text-primary">Auto Role</h1>
            </div>

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

            {/* Footer */}
            <p className="text-center text-xs text-gray-500 mt-6">
              © 2026 Auto Role. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
