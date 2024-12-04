import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

const TABLE_HEAD_TITLES: string[] = [
    'Product Code', 
    'Product Type', 
    'Make', 
    'Make Model', 
    'Item Name', 
    'Total IN', 
    'Total OUT', 
    'STOCKS', 
]


type InventoryProductProps = {
    productCode: string
    productType: string
    make: string
    makeModel: string
    itemName: string
    totalIn: number
    totalOut: number
    stocks: number
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
        stocks: 0,
    },
    {
        productCode: '00002',
        productType: 'string',
        make: 'string',
        makeModel: 'string',
        itemName: 'string',
        totalIn: 0,
        totalOut: 0,
        stocks: 0,
    },
]

const Inventory = () => {
    return (
        <Table className='bg-white p-1 w-full'>
            <TableHeader  className='border-b-2'>
                <TableRow>
                    {TABLE_HEAD_TITLES.map((title) => (    
                        <TableHead key={title} className='text-xs font-extrabold py-4 px-3 items-center'>{title}</TableHead>
                    ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {INVENTORY_ITEMS.map((item) => (
                    <TableRow key={item.productCode} className='text-xs font-medium'>
                        <TableCell className='py-4 px-3 text-black'>{item.productCode}</TableCell>
                        <TableCell className='py-4 px-3 text-black'>{item.productType}</TableCell>
                        <TableCell className='py-4 px-3 text-black'>{item.make}</TableCell>
                        <TableCell className='py-4 px-3 text-black'>{item.makeModel}</TableCell>
                        <TableCell className='py-4 px-3 text-black'>{item.itemName}</TableCell>
                        <TableCell className='py-4 px-3 text-black'>{item.totalIn}</TableCell>
                        <TableCell className='py-4 px-3 text-black'>{item.totalOut}</TableCell>
                        <TableCell className='py-4 px-3 text-[#BF2323]'>{item.stocks}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Inventory
