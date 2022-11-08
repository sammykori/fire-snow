import { Inertia } from '@inertiajs/inertia';
import React , {useState} from 'react';
import DrinkAwareW from '../../../public/assets/img/Drinkaware_logo_w.png'
import FIREBALL_LOGO from '../../../public/assets/img/Fireball_logo.png'

export default function Modal({visible}) {

    if(!visible) return null;

    const[values, setValues] = useState({
        day: "",
        month: "",
        year: "",
    })
    
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        const dob = new Date(values.month+"/"+values.day+"/"+ values.year);
        const month_diff = Date.now() - dob.getTime(); 
        const age_dt = new Date(month_diff);   
        const year = age_dt.getUTCFullYear();  
        const age = Math.abs(year - 1970);  

        if(age>=18){
            Inertia.visit('/form');
        }else{
            Inertia.visit('/sorry');
        }
      }
    return (
        <>
                    <div className='bg-black bg-opacity-90 absolute inset-0 flex justify-center items-center' id='modal'>
                        <div className='flex flex-col justify-center items-center w-80 h-4/6 border-fireball-red border-4 p-1'>
                            <div className='border-red-900 border-2 w-full h-full text-white flex flex-col justify-center items-center'>
                                <img src={FIREBALL_LOGO} alt="fireball logo" className="w-24 h-auto mb-4"/>
                                <h1 className='text-white text-5xl font-display mb-8'>WOAH THERE!</h1>
                                <h1 className='text-white text-lg mb-8'>WE JUST NEED TO SEE SOME ID.</h1>
                                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                                    <div className='flex flex-row space-x-4 justify-center items-center mb-4'>
                                        <input type='number' id="day" min='1' max='31' placeholder='DD' className='w-14 h-14 bg-white text-center text-fireball-red' value={values.day} onChange={handleChange}/>
                                        <input type='number' id="month" min='1' max='12' placeholder='MM' className='w-14 h-14 bg-white text-center text-fireball-red' value={values.month} onChange={handleChange}/>
                                        <input type='number' id="year" min='1900' max='2022' placeholder='YYYY' className='w-20 h-14 bg-white text-center text-fireball-red' value={values.year} onChange={handleChange}/>
                                    </div>
                                    <p className='text-fireball-red text-xs text-center mb-8'>This site uses cookies. Cookie Policy. I agree to the terms of use, and the privacy policy. <br></br>This information will not be used for marketing purposes.</p>
                                    <button type='submit' className='w-64 text-center px-4 py-2 bg-fireball-red border border-transparent font-display text-4xl text-white active:bg-red-900 transition ease-in-out mb-8'>Enter</button>
                                    <img src={DrinkAwareW} className="w-32 h-auto" alt="DrinkAware"/> 
                                </form>
                            </div>
                        </div>
                    </div>
        </>
    );
}
