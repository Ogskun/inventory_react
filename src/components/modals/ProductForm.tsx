import { DialogTitle } from '@radix-ui/react-dialog'
import { DialogContent, DialogHeader } from '../ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../ui/button'

const PRODUCT_FORM_VALIDATION = z.object({
    product_code: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    product_type: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    product_make: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    product_make_model: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    item_name: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    reorder_pt: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
    remarks: z
        .string()
        .trim()
        .min(1, { message: 'Please fill out this field.' }),
})

type PRODUCT_FORM_VALUES = z.infer<typeof PRODUCT_FORM_VALIDATION>

type ProductFormProps = {
    title: string
    buttonText: string
}

const ProductForm = ({ title, buttonText }: ProductFormProps) => {
    const productForm = useForm<PRODUCT_FORM_VALUES>({
        resolver: zodResolver(PRODUCT_FORM_VALIDATION),
        defaultValues: {
            product_code: '',
            product_type: '',
            product_make: '',
            product_make_model: '',
            item_name: '',
            reorder_pt: '',
            remarks: '',
        },
    })

    return (
        <DialogContent className='w-[670px] max-w-full'>
            <DialogHeader>
                <DialogTitle className='text-xl font-extrabold uppercase'>
                    {title}
                </DialogTitle>
            </DialogHeader>

            <Form {...productForm}>
                <form
                    onSubmit={productForm.handleSubmit(() =>
                        console.log('submitted')
                    )}
                >
                    <div className='grid-col-1 grid grid-flow-row gap-4 md:grid-cols-2'>
                        <FormField
                            control={productForm.control}
                            name='product_code'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Product Code
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={productForm.control}
                            name='product_type'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Product Type
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={productForm.control}
                            name='product_make'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Make
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={productForm.control}
                            name='product_make_model'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Make Model
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={productForm.control}
                            name='item_name'
                            render={({ field }) => (
                                <FormItem className='md:col-span-2'>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Item Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={productForm.control}
                            name='reorder_pt'
                            render={({ field }) => (
                                <FormItem className='md:col-span-2'>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Reorder PT
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={productForm.control}
                            name='remarks'
                            render={({ field }) => (
                                <FormItem className='md:col-span-2'>
                                    <FormLabel className='text-[12.5px] font-extrabold text-[#0000008a]'>
                                        Remarks
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className='flex justify-end'>
                        <Button
                            type='submit'
                            className='mt-4 w-[150px] bg-red-700 font-sans text-[13px] font-medium text-white hover:bg-red-800'
                        >
                            {buttonText}
                        </Button>
                    </div>
                </form>
            </Form>
        </DialogContent>
    )
}

export default ProductForm
