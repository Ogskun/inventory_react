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

type GENERAL_INFORMATION_VALUES = z.infer<typeof GENERAL_INFORMATION_VALIDATION>

const Profile = () => {
    const form = useForm<GENERAL_INFORMATION_VALUES>({
        resolver: zodResolver(GENERAL_INFORMATION_VALIDATION),
        defaultValues: {
            first_name: '',
            last_name: '',
        },
    })

    const [isEditable, setIsEditable] = useState(false)

    const toggleIsEditable = () => {
        setIsEditable(!isEditable)
        form.reset()
    }

    return (
        <div className='flex flex-col gap-8'>
            {/* General info */}
            <div className='rounded-sm bg-white p-7'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((data) => {
                            console.log(data)
                            form.reset()
                        })}
                    >
                        <div className='mb-4 flex justify-between'>
                            <h1 className='font-sans text-[15px] font-extrabold'>
                                General Information
                            </h1>
                            <div>
                                {isEditable ? (
                                    <div className='flex gap-3'>
                                        <button
                                            type='submit'
                                            className='bg-transparent font-sans text-sm text-blue-600'
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={toggleIsEditable}
                                            type='button'
                                            className='bg-transparent font-sans text-sm text-blue-600'
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={toggleIsEditable}
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
                                    control={form.control}
                                    name='first_name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                                Firstname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className={`px-3 py-5 text-[#989898] ${isEditable ? 'border' : 'border-none bg-[#f7f7f7]'}`}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <FormField
                                    control={form.control}
                                    name='last_name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                                Lastname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className={`px-3 py-5 text-[#989898] ${isEditable ? 'border' : 'border-none bg-[#f7f7f7]'}`}
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
                <div className='mb-4 flex justify-between'>
                    <h1 className='font-sans text-[15px] font-extrabold'>
                        ChangePassword
                    </h1>
                    <button className='bg-transparent font-sans text-sm text-blue-600'>
                        Change Password
                    </button>
                </div>
                <div className='grid grid-flow-row grid-rows-1 gap-5 md:grid-flow-col md:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                            Password
                        </p>
                        <Input
                            className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]'
                            placeholder='********'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
