import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'

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
        <div className='flex flex-col gap-4 items-end'>
            <div className='flex flex-row gap-2'>
                <Button className='border- bg-transparent border border-red-600 text-red-600 font-sans font-medium text-[13px]'>
                    Add Bulk Product
                </Button>
                <Button className='bg-red-700 text-white font-sans font-medium text-[13px]'>
                    Add Bulk Product
                </Button>
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
                            <TableCell className='flex flex-row px-3'>
                                <FaRegEdit className='size-7 rounded-full bg-[#85b98c] p-2 text-white' />
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
