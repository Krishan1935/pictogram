import { Link } from "react-router";
import IMG from "../../assets/images/auth.png";
import AuthForm from "../../components/auth/AuthForm";


const SignUp = () => {
    return (
        <div className="bg-ink-black w-full h-full flex items-center justify-center">
            <div className="flex gap-34 justify-center items-center">
                <img
                    src={IMG}
                    alt="Image"
                    className="hidden lg:block h-120 aspect-521/450"
                />

                <div className="flex flex-col justify-center gap-10  items-center w-full h-full sm:w-fit sm:h-fit max-w-fit">
                    <h1 className="text-white text-center font-madimi-one font-normal text-4xl sm:text-[4rem]">
                        Pictogram
                    </h1>

                    <AuthForm type="signup" />

                    <div className="w-full h-fit relative">
                        <div className="bg-gray h-px w-full"></div>
                        <p className="font-roboto-flex text-gray absolute w-fit bg-ink-black p-1 -top-3.5 left-1/2 -translate-x-1/2">OR</p>
                    </div>

                    <div>
                        <p className="font-roboto-flex text-sm text-white">
                            Already have an account? <Link to={'../login'} className="font-bold text-bright-blue">Login</Link>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
