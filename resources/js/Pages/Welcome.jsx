import React , {useState} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import BG_IMAGE from '../../../public/assets/img/bg1.png'
import DrinkAware from '../../../public/assets/img/Drinkaware_logo.png'
import BottleImage from '../../../public/assets/img/Fireball_Bottle.png'
import RedStripe from '../../../public/assets/img/Red_Stripe.png'
import Footer from '@/Components/Footer';
import Modal from '@/Components/Modal';

export default function Welcome(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(true);
    }
    return (
        <>
            <Head title="Welcome" />
            <div className="flex justify-center w-screen h-max bg-gray-900 overflow-x-hidden">
               <div className='flex flex-col items-center bg-[#E8E8EA] w-full md:w-1/3 h-full'>
                    <div style={{
                        backgroundImage: `url(${BG_IMAGE})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                        backgroundSize: "cover"
                    }} className="w-full h-96">
                    </div>
                    <div className='relative w-full h-40 bottom-16'>
                        <img src={RedStripe} className='w-42 absolute h-auto bottom-0 left-8'/>        
                        <img src={BottleImage} className='w-28 h-auto absolute top-0 left-0'/>  
                    </div>
                                
                    <div className='flex flex-col justify-center items-center'>
                        <button className='w-64 text-center px-4 py-2 bg-fireball-red border border-transparent font-display text-4xl text-white active:bg-red-900 transition ease-in-out mb-8' onClick={handleModal}>Enter</button>
                    </div>
                    <Modal visible={modalOpen}/>
                    <div>
                        <img src={DrinkAware} className="w-32 h-auto mt-4" alt="DrinkAware"/> 
                    </div>
                    <Footer/>
               </div>
               
            </div>
        </>
    );
}
