import { signIn } from "next-auth/react";
const SignInPage = () => {
    const handleSignIn = async () => {
        await signIn("credentials", {
          username: "admin",
          password: "password",
          callbackUrl: "/", 
        });
      };
    
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>Sign In</h1>
          <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>
      );
}
export default SignInPage