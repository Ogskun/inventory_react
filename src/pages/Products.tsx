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
import ProductForm from '@/components/modals/ProductForm'

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

type InventoryProductProps = {
    productCode: string
    productType: string
    make: string
    makeModel: string
    itemName: string
    totalIn: number
    totalOut: number
}

const INVENTORY_ITEMS: InventoryProductProps[] = [
    {
        productCode: '00001',
        productType: 'string',
        make: 'string',
        makeModel: 'string',
        itemName: 'string',
        totalIn: 0,
        totalOut: 0,
    },
    {
        productCode: '00002',
        productType: 'string',
        make: 'string',
        makeModel: 'string',
        itemName: 'string',
        totalIn: 0,
        totalOut: 0,
    },
]

const Products = () => {
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

                    <ProductForm title='ADD PRODUCT' buttonText='Add' />
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
                            key={item.productCode}
                            className='text-xs font-medium'
                        >
                            <TableCell className='px-3 py-4 text-black'>
                                {item.productCode}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.productType}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.make}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.makeModel}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.itemName}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.totalIn}
                            </TableCell>
                            <TableCell className='px-3 py-4 text-black'>
                                {item.totalOut}
                            </TableCell>
                            <TableCell className='flex mx-5 gap-2 justify-end'>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <FaRegEdit className='size-7 rounded-full bg-[#85b98c] p-2 text-white' />
                                    </DialogTrigger>

                                    <ProductForm title='Edit Product' buttonText='Update' />
                                </Dialog>
                                <FaRegTrashAlt className='size-7 rounded-full bg-[#b55252] p-2 text-white' />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Products
