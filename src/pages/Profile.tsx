import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const GENERAL_INFORMATION_VALIDATION = z.object({
    first_name: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    last_name: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
})

const CHANGE_PASSWORD_VALIDATION = z.object({
    current_password: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    new_password: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    confirm_password: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
})

type GENERAL_INFORMATION_VALUES = z.infer<typeof GENERAL_INFORMATION_VALIDATION>
type CHANGE_PASSWORD_VALUES = z.infer<typeof CHANGE_PASSWORD_VALIDATION>

const Profile = () => {
    const genInfoForm = useForm<GENERAL_INFORMATION_VALUES>({
        resolver: zodResolver(GENERAL_INFORMATION_VALIDATION),
        defaultValues: {
            first_name: '',
            last_name: '',
        },
    })
    const changePassForm = useForm<CHANGE_PASSWORD_VALUES>({
        resolver: zodResolver(CHANGE_PASSWORD_VALIDATION),
        defaultValues: {
            current_password: '',
            new_password: '',
            confirm_password: '',
        },
    })

    const [toggles, setToggles] = useState({
        IsGenInfoEditable: false,
        IsChangePassEditable: false,
    })

    const setToggleState = (key: keyof typeof toggles) => {
        setToggles((prev) => {
            const newState = { ...prev, [key]: !prev[key] }

            if (key == 'IsGenInfoEditable') genInfoForm.reset()
            if (key == 'IsChangePassEditable') changePassForm.reset()

            return newState
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='flex flex-col gap-8'>
            {/* General info */}
            <div className='rounded-sm bg-white p-7'>
                <Form {...genInfoForm}>
                    <form
                        onSubmit={genInfoForm.handleSubmit(() => {
                            genInfoForm.reset()
                            setToggleState('IsGenInfoEditable')
                        })}
                    >
                        <div className='mb-4 flex justify-between'>
                            <h1 className='font-sans text-[15px] font-extrabold'>
                                General Information
                            </h1>
                            <div>
                                {toggles.IsGenInfoEditable ? (
                                    <div className='flex gap-3'>
                                        <button
                                            type='submit'
                                            className='bg-transparent font-sans text-sm text-blue-600'
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={() => setToggleState('IsGenInfoEditable')}
                                            type='button'
                                            className='bg-transparent font-sans text-sm text-blue-600'
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setToggleState('IsGenInfoEditable')}
                                        type='button'
                                        className='bg-transparent font-sans text-sm text-blue-600'
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-flow-row grid-rows-1 gap-5 md:grid-flow-col md:grid-rows-2 lg:grid-rows-1'>
                            <div className='flex flex-col'>
                                <FormField
                                    control={genInfoForm.control}
                                    name='first_name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                                Firstname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className={`px-3 py-5 text-[#989898] ${toggles.IsGenInfoEditable ? 'border' : 'border-none bg-[#f7f7f7]'}`}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <FormField
                                    control={genInfoForm.control}
                                    name='last_name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                                Lastname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className={`px-3 py-5 text-[#989898] ${toggles.IsGenInfoEditable ? 'border' : 'border-none bg-[#f7f7f7]'}`}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='space-y-2'>
                                    <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                        Email Address
                                    </p>
                                    <Input className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='space-y-2'>
                                    <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                        Role
                                    </p>
                                    <Input className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>

            {/* Change password */}
            <div className='rounded-sm bg-white p-7'>
                <Form {...changePassForm}>
                    <form onSubmit={changePassForm.handleSubmit(() => {
                        changePassForm.reset()
                        setShowPassword(false)
                        setToggleState('IsChangePassEditable')
                    })}>
                        <div className='mb-4 flex justify-between'>
                            <h1 className='font-sans text-[15px] font-extrabold'>
                                ChangePassword
                            </h1>
                            <div>
                                {toggles.IsChangePassEditable ? (
                                    <div className='flex gap-3'>
                                        <button
                                            type='submit'
                                            className='bg-transparent font-sans text-sm text-blue-600'
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={() => setToggleState('IsChangePassEditable')}
                                            type='button'
                                            className='bg-transparent font-sans text-sm text-blue-600'
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setToggleState('IsChangePassEditable')}
                                        type='button'
                                        className='bg-transparent font-sans text-sm text-blue-600'
                                    >
                                        Change Password
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-flow-row grid-rows-1 gap-5 md:grid-flow-col md:grid-cols-2 lg:grid-cols-4'>
                            {toggles.IsChangePassEditable ? (
                                <>
                                    <div className='flex flex-col'>
                                        <FormField
                                            control={changePassForm.control}
                                            name='current_password'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>Current Password</FormLabel>
                                                    <FormControl>
                                                        <div className="relative w-full">
                                                            <Input
                                                                {...field}
                                                                type={showPassword ? "text" : "password"}
                                                                className={`w-full px-3 py-5 text-[#989898] ${toggles.IsChangePassEditable ? "border" : "border-none bg-[#f7f7f7]"
                                                                    } pr-10`}
                                                            />
                                                            <span
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                                                            >
                                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                            </span>
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <FormField
                                            control={changePassForm.control}
                                            name='new_password'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>New Password</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type='password'
                                                            className={`px-3 py-5 text-[#989898] ${toggles.IsChangePassEditable ? 'border' : 'border-none bg-[#f7f7f7]'}`}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <FormField
                                            control={changePassForm.control}
                                            name='confirm_password'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>Confirm Password</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type='password'
                                                            className={`px-3 py-5 text-[#989898] ${toggles.IsChangePassEditable ? 'border' : 'border-none bg-[#f7f7f7]'}`}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className='flex flex-col'>
                                    <div className='space-y-2'>
                                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                            Password
                                        </p>
                                        <Input type='password' placeholder='********' className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]' />
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Profile
