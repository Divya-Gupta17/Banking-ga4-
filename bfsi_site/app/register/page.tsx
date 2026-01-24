"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Eye, EyeOff, ArrowRight, Lock, Mail, User, Phone, Check, X } from "lucide-react"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    })
    const [passwordStrength, setPasswordStrength] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    // Calculate password strength
    useEffect(() => {
        const password = formData.password
        let strength = 0
        if (password.length >= 8) strength++
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++
        if (password.match(/[0-9]/)) strength++
        if (password.match(/[^a-zA-Z0-9]/)) strength++
        setPasswordStrength(strength)
    }, [formData.password])

    const getPasswordStrengthColor = () => {
        if (passwordStrength === 0) return "bg-gray-200"
        if (passwordStrength === 1) return "bg-red-500"
        if (passwordStrength === 2) return "bg-orange-500"
        if (passwordStrength === 3) return "bg-yellow-500"
        return "bg-green-500"
    }

    const getPasswordStrengthText = () => {
        if (passwordStrength === 0) return ""
        if (passwordStrength === 1) return "Weak"
        if (passwordStrength === 2) return "Fair"
        if (passwordStrength === 3) return "Good"
        return "Strong"
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Registration attempt:", formData)
    }

    const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center px-12 py-12 w-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 mb-16">
                        <div className="flex h-12 w-12 items-center justify-center rounded bg-primary">
                            <Shield className="h-7 w-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">SecureBank</span>
                    </Link>

                    {/* Hero Text */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold text-white leading-tight">
                            Join SecureBank
                            <br />
                            <span className="text-primary">Start Banking Smarter</span>
                        </h1>
                        <p className="text-lg text-white/70 max-w-md">
                            Create your account and experience modern banking with industry-leading security.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-3 gap-8">
                        <div>
                            <div className="text-3xl font-bold text-white">2M+</div>
                            <div className="text-sm text-white/60">Trusted Users</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">99.9%</div>
                            <div className="text-sm text-white/60">Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">256-bit</div>
                            <div className="text-sm text-white/60">Encryption</div>
                        </div>
                    </div>

                    {/* Decorative lock */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
                        <Lock className="w-full h-full text-primary" />
                    </div>
                </div>
            </div>

            {/* Right Side - Registration Form (White like login page) */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white lg:w-1/2">
                <div className="w-full max-w-md space-y-8">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded bg-primary">
                            <Shield className="h-7 w-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-foreground">SecureBank</span>
                    </div>

                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-foreground">Sign Up</h2>
                        <p className="mt-2 text-muted-foreground">
                            Create your account to get started
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                        {/* Full Name Field */}
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                Phone Number
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-foreground">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-12 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            {/* Password Strength Indicator */}
                            {formData.password && (
                                <div className="space-y-1">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map((level) => (
                                            <div
                                                key={level}
                                                className={`h-1 flex-1 rounded-full transition-all ${level <= passwordStrength ? getPasswordStrengthColor() : "bg-gray-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    {passwordStrength > 0 && (
                                        <p className="text-xs text-muted-foreground">
                                            Password strength: <span className="font-semibold">{getPasswordStrengthText()}</span>
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`block w-full pl-10 pr-12 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${formData.confirmPassword
                                        ? passwordsMatch
                                            ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                                            : "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        : "border-input focus:border-primary focus:ring-primary/20"
                                        }`}
                                    placeholder="••••••••"
                                />
                                <div className="absolute inset-y-0 right-12 flex items-center pointer-events-none">
                                    {formData.confirmPassword && (
                                        passwordsMatch ? (
                                            <Check className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <X className="h-5 w-5 text-red-500" />
                                        )
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            {formData.confirmPassword && !passwordsMatch && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                    <X className="h-3 w-3" />
                                    Passwords do not match
                                </p>
                            )}
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start">
                            <input
                                id="agreeToTerms"
                                name="agreeToTerms"
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                                className="h-4 w-4 mt-1 rounded border-input text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                            />
                            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-foreground cursor-pointer">
                                I agree to the{" "}
                                <Link href="/terms" className="font-medium text-primary hover:text-primary/80">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="font-medium text-primary hover:text-primary/80">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] group"
                        >
                            Sign Up
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-muted-foreground">Or</span>
                        </div>
                    </div>

                    {/* Login Link */}
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-primary hover:text-primary/80 transition-colors"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>

                    {/* Security Badge */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        <span>Protected by 256-bit SSL encryption</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
