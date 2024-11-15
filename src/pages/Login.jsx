import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const {userLogin, setUser}=useContext(AuthContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form=e.target
        const email= form.email.value
        const password=form.password.value
        console.log({email,password})
        userLogin(email,password)
        .then((result)=>{
            const user= result.user
            setUser(user)
        })
        .catch((error) => {
          alert(error.code)
          });
    }
    return (
        <div className="min-h-screen flex justify-center items-center  ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
                <form onSubmit={handleSubmit} className="card-body ">
                    <h2 className="text-center font-semibold text-xl">Login your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input
                        name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered rounded-none bg-gray-100"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                        name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered rounded-none bg-gray-100"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 mb-5">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <p className="text-center">Dont’t Have An Account ?<span className="text-red-500"><Link to="/auth/register"> Register</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;