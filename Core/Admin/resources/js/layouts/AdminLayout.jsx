export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen flex items-stretch">
            {/* Left Side - Image Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-blue-500 to-blue-700 items-center justify-center p-12">
                <div className="text-center text-white max-w-md">
                    <div className="mb-8">
                        <svg
                            className="w-24 h-24 mx-auto mb-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
                    <p className="text-blue-100 text-lg">
                        Sign in to your account to continue your journey
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-base-100">
                <div className="w-full max-w-md">
                    {/* Logo for Mobile */}
                    <div className="lg:hidden text-center mb-8">
                        <h1 className="text-3xl font-bold text-primary">
                            Auto Role
                        </h1>
                    </div>

                    {children}

                    {/* Divider */}
                    {/* <div className="divider my-4">OR</div>


                    {/* Footer */}
                    <p className="text-center text-xs text-gray-500 mt-6">
                        © 2026 Auto Role. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
