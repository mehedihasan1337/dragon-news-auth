import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createNewUser ,setUser}=useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log({name, photo, email ,password})
        createNewUser(email,password)
         .then((result)=>{
            const user =result.user
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage)
          })
    }
    return (
        <div className="min-h-screen flex justify-center items-center  ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
                <form onSubmit={handleSubmit} className="card-body ">
                    <h2 className="text-center font-semibold text-xl">Register your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered rounded-none bg-gray-100"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"
                            name="photo"
                            placeholder="Enter your photo url"
                            className="input input-bordered rounded-none bg-gray-100"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email </span>
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered rounded-none bg-gray-100"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered rounded-none bg-gray-100"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 mb-5">
                        <button className="btn btn-neutral rounded-none">Register</button>

                    </div>
                    <p className="text-center"> Allready Have An Account ?<span className="text-red-500"><Link to="/auth/login"> Login</Link></span></p>

                </form>
            </div>
        </div>
    );
};

export default Register;