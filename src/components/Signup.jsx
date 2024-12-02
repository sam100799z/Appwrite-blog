import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl bg-slate-200 rounded-xl py-10 shadow-md ">
                <h2 className="text-center text-2xl font-bold">Sign up to create an account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && (
                    <p className="mt-4 text-center text-sm text-red-500">{error}</p>
                )}
                <form
                    onSubmit={handleSubmit(create)}
                    className="mt-6 flex flex-col gap-3 items-center"
                >
                    <Input
                        placeholder="Enter your full name"
                        {...register("name", { required: true })}
                    />
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
                    <Button type="submit" className="w-[75%] mt-2 bg-primary text-white hover:bg-primary-dark">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Signup