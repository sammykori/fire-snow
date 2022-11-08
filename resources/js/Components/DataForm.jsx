import React, { useState } from 'react';
import { useForm} from '@inertiajs/inertia-react';
import InputError from './InputError';



export default function DataForm(props) {
    console.log(props)
    const { data, setData, post, processing, reset, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        unique_code: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('subscribers.store'), { onSuccess: () => reset() });
    };

   
    return (
        
        <>
            <form onSubmit={submit} className='flex flex-col space-y-2 mt-4'>
                <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)} placeholder='FIRST NAME' className='text-sm text-center rounded' autoComplete='off'/>
                <input type="text" value={data.last_name} onChange={e => setData('last_name', e.target.value)} placeholder='LAST NAME' className='text-sm text-center rounded' autoComplete='off'/>
                <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} placeholder='EMAIL' className='text-sm rounded text-center '/>
                <input type="text" value={data.unique_code} onChange={e => setData('unique_code', e.target.value)} placeholder='UNIQUE CODE' className=' text-center rounded' autoComplete='off'/>
                <InputError message={errors.message} className="mt-2" />
                <button type="submit" className='bg-fireball-red text-white rounded'>Add</button>
                
            </form>
        </>
    );
}


