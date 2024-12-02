import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl bg-slate-200 rounded-xl py-10 shadow-md">
                <h2 className="text-center text-2xl font-bold">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && (
                    <p className="mt-4 text-center text-red-500 text-sm">{error}</p>
                )}
                <form
                    onSubmit={handleSubmit(login)}
                    className="mt-6 flex flex-col gap-3 items-center"
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be valid",
                            },
                        })}
                    />
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    <Button
                        type="submit"
                        className="w-[75%] mt-2 bg-primary text-white hover:bg-primary-dark"
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login