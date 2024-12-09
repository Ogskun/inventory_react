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

const ADD_PRODUCT_VALIDATION = z.object({
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
})

type ADD_PRODUCT_VALUES = z.infer<typeof ADD_PRODUCT_VALIDATION>

const AddProductForm = () => {
    const addProductForm = useForm<ADD_PRODUCT_VALUES>({
        resolver: zodResolver(ADD_PRODUCT_VALIDATION),
        defaultValues: {
            product_code: '',
            product_type: '',
            product_make: '',
            product_make_model: '',
        },
    })

    return (
        <DialogContent className='w-[670px] max-w-full'>
            <DialogHeader>
                <DialogTitle className='text-'>ADD PRODUCT</DialogTitle>
            </DialogHeader>

            <Form {...addProductForm}>
                <form
                    onSubmit={addProductForm.handleSubmit(() =>
                        console.log('submitted')
                    )}
                >
                    <div className='grid-row-1 md:grid-flow-2 grid grid-flow-row gap-2 md:grid-flow-col'>
                        <FormField
                            control={addProductForm.control}
                            name='product_code'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Code</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={addProductForm.control}
                            name='product_type'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Type</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={addProductForm.control}
                            name='product_make'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Make</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={addProductForm.control}
                            name='product_make_model'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Make Model</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button
                        type='submit'
                        className='relative mt-2 w-[150px] bg-red-700 font-sans text-[13px] font-medium text-white hover:bg-red-800'
                    >
                        Add
                    </Button>
                </form>
            </Form>
        </DialogContent>
    )
}

export default AddProductForm
