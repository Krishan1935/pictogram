import {useForm} from "react-hook-form";

type formType = "login" | "signup";

interface AuthFormProps {
    type: formType;
}
interface FormValues {
    username: string;
    password: string;
    identifier: string;
    fullname: string;
}

const AuthForm = ({ type }: AuthFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const validateUsername = (value: string): boolean =>{
        return /^[a-zA-Z_][a-zA-Z0-9._]{2,20}$/.test(value);
    }
    const validateEmail = (value: string): boolean =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return (
        <form className="flex flex-col gap-8  w-full">
            <div className="flex flex-col items-start gap-3">
                {type == "signup" && (
                    <input
                        type="text"
                        className="bg-jet-black rounded-sm border border-gray outline-none text-sm font-roboto-flex text-gray px-4 py-2.5 w-full"
                        placeholder="Full name"
                        {...register("fullname", {
                            required: "Full name is required",
                        })}
                    />
                )}
                {type == "signup" && (<>
                    <input
                        type="text"
                        className="bg-jet-black rounded-sm border border-gray outline-none text-sm font-roboto-flex text-gray px-4 py-2.5 w-full"
                        placeholder="Username"
                        {...register("username", {
                            required: "Username is required.",
                            validate: (value: string) =>{
                                return validateUsername(value) ? true : "Username is not valid";
                            },
                        })}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-xs">
                            {String(errors.username.message)}
                        </p>
                    )}
                </>)}
                <input
                    type="text"
                    className="bg-jet-black rounded-sm border border-gray outline-none text-sm font-roboto-flex text-gray px-4 py-2.5 w-full"
                    placeholder={
                        type == "login" ? "Username or email" : "Email"
                    }
                    {...register("identifier", {
                        required:"Username or email is required",
                        validate:(value: string) =>{
                            if(!value.includes('@')){
                                  return validateUsername(value) ? true :"Invalid Username";
                            }
                            else {
                                return validateEmail(value) ? true : "Invalid Email"
                            }
                        }
                    })}
                />
                {
                    errors.identifier && <p className="text-red-500 text-xs">
                        {String(errors?.identifier?.message)}
                    </p>
                }
                <input
                    type="password"
                    className="bg-jet-black rounded-sm border border-gray outline-none text-sm font-roboto-flex text-gray px-4 py-2.5 w-full"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
            </div>

            <button className="text-center w-full rounded-sm bg-ocean-blue font-roboto-flex text-white text-base font-semibold py-2">
                {type == "login" ? "Login" : "Sign Up"}
            </button>
        </form>
    );
};

export default AuthForm;
