import React, { useState } from 'react';
import DataForm from './DataForm';
import { Link } from '@inertiajs/inertia-react';

export default function DataTable(props) {
    console.log(props);
    const { data, setData, post, processing, reset, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        unique_code: ''
    });
    const Submit = (e) => {
        e.preventDefault();
        post(route('subscribers.store'), { onSuccess: () => reset() });
    }
    const handleEdit = (e) => {

    }
    return (
        <>
           <table className='w-full text-sm text-left table-auto'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Unique Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.subscribers.map(data =>{
                        return(
                            <tr key={data.id}>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.email}</td>
                            <td>{data.unique_code}</td>
                            <td>
                                <button onClick={handleEdit(data.id)} className='text-sm bg-green-900 text-white rounded p-1 mr-2'>Edit</button>
                                <Link as='button' href={route('subscribers.destroy', data.id)} method="delete" className='text-sm bg-gray-900 text-white rounded p-1'>Del</Link>
                            </td>
                        </tr> 
                        )
                    })}
                </tbody>
           </table>
           <form onSubmit={submit} className='flex flex-col space-y-2 mt-4'>
                <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)} placeholder='FIRST NAME' className='text-sm text-center rounded' autoComplete='off'/>
                <input type="text" value={data.last_name} onChange={e => setData('last_name', e.target.value)} placeholder='LAST NAME' className='text-sm text-center rounded' autoComplete='off'/>
                <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} placeholder='EMAIL' className='text-sm rounded text-center '/>
                <input type="text" value={data.unique_code} onChange={e => setData('unique_code', e.target.value)} placeholder='UNIQUE CODE' className=' text-center rounded' autoComplete='off'/>
                <InputError message={errors.message} className="mt-2" />
                <button type="submit" className='bg-fireball-red text-white rounded'>Save</button>
                
            </form>
        </>
    );
}
