import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import BG_IMAGE from '../../../public/assets/img/bg1.png'
import TikTok from '../../../public/assets/img/TikTok.png'
import Instagram from '../../../public/assets/img/Instagram.png'
import Facebook from '../../../public/assets/img/Facebook.png'
import Twitter from '../../../public/assets/img/Twitter.png'
import DrinkAware from '../../../public/assets/img/Drinkaware_logo.png'
import Footer from '@/Components/Footer';

export default function GoodLuck(props) {
    return (
        <>
            <Head title="GoodLuck" />
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
                        <h1 className='text-6xl font-display py-2'>Good Luck!</h1>
                        <h1 className='text-center font-black py-2'>WE'LL EMAIL THE WINNER DIRECTLY, SO KEEP<br></br>YOUR EYES PEELED... IT COULD BE YOU! </h1>
                        <p className='font-black mt-4 text-xs mb-3'>CONNECT WITH US</p>
                    </div>
                    <div className='flex flex-row space-x-6 m-1'>
                        <img src={TikTok} className="w-14 h-14" alt="TikTok"/>
                        <img src={Instagram} className="w-14 h-14" alt="Instagram"/>
                        <img src={Facebook} className="w-14 h-14" alt="Facebook"/>
                        <img src={Twitter} className="w-14 h-14" alt="Twitter"/>
                    </div>
                    <div>
                        <img src={DrinkAware} className="w-32 h-auto mt-4" alt="DrinkAware"/> 
                    </div>
                    <Footer/>
               </div>
            </div>
        </>
    );
}
