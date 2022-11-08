import React from 'react';
import { Link, useForm, Head } from '@inertiajs/inertia-react';
import BG_IMAGE from '../../../public/assets/img/bg1.png'
import PrimaryButton from '../Components/PrimaryButton';
import DrinkAware from '../../../public/assets/img/Drinkaware_logo.png';
import Footer from '@/Components/Footer';
import InputError from '@/Components/InputError';

export default function Form(props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        unique_code: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('subscribers.store'), { onSuccess: () => reset() });
    };

    return (
        <>
            <Head title="Form" />
            <div className="flex justify-center w-screen h-max bg-gray-900">
               <div className='flex flex-col items-center bg-[#E8E8EA] md:w-1/3 w-full h-full'>
                    <div style={{
                        backgroundImage: `url(${BG_IMAGE})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                        backgroundSize: "cover"
                    }} className="w-full h-96">
                    </div>
                    <div className='flex flex-col justify-center items-center  text-fireball-red'>
                        <h1 className='text-center font-black py-2'>ENTER YOUR DETAILS BELOW AND IF<br></br>YOU'RE A LUCKY ONE, WE'LL CONTACT<br></br>YOU TO ARRANGE YOUR PRICE</h1>
                    </div>
                    <form onSubmit={submit} className='flex flex-col justify-center items-center space-y-4'>
                        <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)} placeholder='FIRST NAME' className='border-4 placeholder-fireball-red border-fireball-red w-64 font-display bg-bkgd-grey text-center text-fireball-red text-2xl' autoComplete='off' required/>
                        <input type="text" value={data.last_name} onChange={e => setData('last_name', e.target.value)} placeholder='LAST NAME' className='border-4 placeholder-fireball-red border-fireball-red w-64 font-display bg-bkgd-grey text-center text-fireball-red text-2xl' autoComplete='off' required/>
                        <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} placeholder='EMAIL' className='border-4 placeholder-fireball-red border-fireball-red w-64 font-display bg-bkgd-grey text-center text-fireball-red text-2xl' required/>
                        <input type="text" value={data.unique_code} onChange={e => setData('unique_code', e.target.value)} placeholder='UNIQUE CODE' className='border-4 placeholder-fireball-red border-fireball-red w-64 font-display bg-bkgd-grey text-center text-fireball-red text-2xl' autoComplete='off' required/>
                        <InputError message={errors.message} className="mt-2" />
                        <PrimaryButton processing={processing}>submit</PrimaryButton>
                        <div>
                            <label className='text-xs' htmlFor='terms'>I agree to the terms and conditions</label>
                            <input type="checkbox" value={data.terms} onChange={e => setData('terms', e.target.value)} id='terms' className='border-fireball-red m-1 text-fireball-red' required/></div>
                        <div>
                            <label className='text-xs' htmlFor='subscribe'>I want to recieve the hottest news and latest events from fireball</label>
                            <input type="checkbox" id='subscribe' className='border-fireball-red m-1 text-fireball-red'/>
                        </div>
                        
                    </form>
                    <div>
                        <img src={DrinkAware} className="w-32 h-auto mt-4" alt="DrinkAware"/> 
                    </div>
                    <Footer/>
                    
               </div>
            </div>
        </>
    );
}
