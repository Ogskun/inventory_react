import { DialogClose, DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'

type DeleteProductPromptProps = {
    product_name: string
}

const DeleteProductPrompt = ({ product_name }: DeleteProductPromptProps) => {
    return (
        <DialogContent className='flex flex-col items-center'>
            <p className='font-pops text-sm font-bold mt-4'>
                Are you sure you want to delete this?
            </p>
            <span>"<span className='text-red-500 font-pops font-semibold text-sm'>{product_name}</span>"</span>
            <div className='flex justify-around w-1/2'>
                <Button className='bg-[#BF2323] font-pops text-xs border-none'>
                    Continue
                </Button>
                <DialogClose>
                    <Button className='border border-black bg-white font-pops text-xs shadow-none text-black hover:bg-[#00000017]'>
                        Cancel
                    </Button>
                </DialogClose>
            </div>
        </DialogContent>
    )
}

export default DeleteProductPrompt
