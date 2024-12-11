import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { FiPlusCircle } from 'react-icons/fi'
import { ProductForm, DeleteProductPrompt } from '@/components/modals'

const TABLE_HEAD_TITLES: string[] = [
    'Product Code',
    'Product Type',
    'Make',
    'Make Model',
    'Item Name',
    'Reorder PT',
    'Remarks',
    '',
]

export type InventoryProductProps = {
    id: number
    product_code: string
    product_type: string
    make: string
    make_model: string
    item_name: string
    reorder_pt: string
    remarks: string
}

const INVENTORY_ITEMS: InventoryProductProps[] = [
    {
        id: 1,
        product_code: '00001',
        product_type: 'string',
        make: 'string',
        make_model: 'string',
        item_name: 'string',
        reorder_pt: 'reorder 1',
        remarks: '',
    },
    {
        id: 2,
        product_code: '00002',
        product_type: 'string',
        make: 'string',
        make_model: 'string',
        item_name: 'string',
        reorder_pt: 'reorder string',
        remarks: 'None so far',
    },
]

export type HandleAddProductProps = {}

export type HandleUpdateProductProps = {
    id: number
}

const Products = () => {
    const handleAddProduct = ({}: HandleAddProductProps) => {
        console.log('Product successfully added.')
    }

    const handleUpdateProduct = ({ id }: HandleUpdateProductProps) => {
        console.log(`Product #${id} successfully updated.`)
    }

    return (
        <div className='flex flex-col items-end gap-4'>
            <div className='flex gap-2'>
                <Button className='border- border border-red-600 bg-transparent font-sans text-[13px] font-medium text-red-600 hover:bg-transparent'>
                    <FiPlusCircle className='size-auto' />
                    Add Bulk Product
                </Button>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='bg-red-700 font-sans text-[13px] font-medium text-white hover:bg-red-800'>
                            <FiPlusCircle className='size-auto' />
                            Add Product
                        </Button>
                    </DialogTrigger>

                    <ProductForm
                        title='Add Product'
                        buttonText='Add'
                        product={null}
                        onclick={() => handleAddProduct}
                    />
                </Dialog>
            </div>

            <Table className='w-full bg-white p-1'>
                <TableHeader className='border-b-2'>
                    <TableRow>
                        {TABLE_HEAD_TITLES.map((title) => (
                            <TableHead
                                key={title}
                                className='items-center px-3 py-4 text-xs font-extrabold'
                            >
                                {title}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {INVENTORY_ITEMS.map((item) => (
                        <TableRow
                            key={item.product_code}
                            className='text-xs font-medium'
                        >
                            <TableCell className='px-3 py-4 text-black'>
                                {item.product_code}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.product_type}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.make}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.make_model}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.item_name}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.reorder_pt}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.remarks}
                            </TableCell>
                            <TableCell className='mx-5 flex justify-end gap-2'>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <FaRegEdit className='size-7 cursor-pointer rounded-full bg-[#85b98c] p-2 text-white' />
                                    </DialogTrigger>

                                    <ProductForm
                                        title='Edit Product'
                                        buttonText='Update'
                                        product={item}
                                        onclick={() =>
                                            handleUpdateProduct({ id: item.id })
                                        }
                                    />
                                </Dialog>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <FaRegTrashAlt className='size-7 cursor-pointer rounded-full bg-[#b55252] p-2 text-white' />
                                    </DialogTrigger>

                                    <DeleteProductPrompt
                                        product_name={item.product_code}
                                    />
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Products
