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

const schema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    lastName: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
})

type Schema = z.infer<typeof schema>

const Profile = () => {
    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    })

    return (
        <div className='flex flex-col gap-8'>
            {/* General info */}
            <div className='rounded-sm bg-white p-7'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((data) =>
                            console.log(data)
                        )}
                    >
                        <div className='mb-4 flex justify-between'>
                            <h1 className='font-sans text-[15px] font-extrabold'>
                                General Information
                            </h1>
                            <div className='flex gap-3'>
                                <button
                                    type='submit'
                                    className='bg-transparent font-sans text-sm text-blue-600'
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-flow-row grid-rows-1 gap-5 md:grid-flow-col md:grid-rows-2 lg:grid-rows-1'>
                            <div className='flex flex-col'>
                                <FormField
                                    control={form.control}
                                    name='firstName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                                Firstname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]'
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
                                    name='lastName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-sans text-[12px] font-extrabold leading-6 text-[#0000008a]'>
                                                Lastname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='border-none bg-[#f7f7f7] px-3 py-5 text-[#989898]'
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
