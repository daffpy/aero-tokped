'use client';

import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import { TokpedData } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

function ProductsManager(data:any){
    return(
        <div className='max-w-[180px] flex flex-col'> 
        <Image className="rounded-md " width={180} height={180} src={data.data.primary_image.original} alt=""/>
        <p className='text-center text-black bg-clip-content rounded-br-lg rounded-bl-lg bg-[#FFFF00] italic !flex-1 mt-2'>{data.data.name}</p>
        <div className='text-center mt-6 border'>Price: <span className='font-bold'>{data.data.price.text_idr}</span></div>
        {!data.data.flags.isSold ? 
        (<Link href={data.data.product_url} className='text-center mt-3 border hover:bg-white hover:text-black duration-200'
            target="_blank"
            rel="noreferrer noopener">COP</Link>)
        :
        (<div className='text-center mt-3 border bg-white text-black duration-200'>SOLD OUT</div>)
        
        }
        </div>  
    )

}

export default function DisplayProducts(p_data:any){
    const {data} = useSWR<TokpedData>(`/api/get-tokped-item?sid=${p_data.sid}&etalaseId=${p_data.etalaseId}`,fetcher);
    if (!data) {
        return null;
    }
    return(
        <>
        <fieldset className="border-t-4 border-slate-300/80 border-double">
            <legend className="text-xl mx-auto px-4 tracking-widest uppercase">{p_data.name}</legend>
        </fieldset>
        <div className='relative flex flex-wrap gap-x-20 pt-1 pb-14 gap-y-20 border-b border-dashed border-b-slate-200 justify-center'>
            {data.result.map((product, index) => (
                <ProductsManager key={index} data={product}/>
            ))}
        </div>
        </>
    )
}