import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import BG_IMAGE from '../../../public/assets/img/bg1.png'
import TikTok from '../../../public/assets/img/TikTok.png'
import Instagram from '../../../public/assets/img/Instagram.png'
import Facebook from '../../../public/assets/img/Facebook.png'
import Twitter from '../../../public/assets/img/Twitter.png'
import DrinkAware from '../../../public/assets/img/Drinkaware_logo.png'
import Footer from '@/Components/Footer';

export default function Terms(props) {
    return (
        <>
            <Head title="Terms" />
            <div className="flex justify-center w-screen h-max bg-gray-900">
               <div className='flex flex-col items-center bg-[#E8E8EA] w-full h-full'>
                    <div style={{
                        backgroundImage: `url(${BG_IMAGE})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                        backgroundSize: "cover"
                    }} className="w-screen h-96">
                    </div>
                    <div className='flex flex-col justify-center items-center  text-fireball-red'>
                        <h1 className='text-6xl font-display py-2 text-center'>Terms + <br></br>Conditions</h1>
                        <div className='text-sm px-8 space-y-2 mt-8'>
                            <p className='text-fireball-red font-black'>1. Eligibility</p>
                            <p>1.1 This Promotion is open to residents of the United Kingdom only, aged 18 and over. Employees (and their immediate families) of the Promoter, of its subsidiaries, of other group companies, its agents, or anyone else professionally connected with this promotion may not enter.<br></br>
                            1.2 The Promotion opens at 00:01 on 6 October 2022 and closes at 23:59 on 16 January 2023 (“Promotion Period”). <br></br>
                            1.3 Internet access and purchase is required.<br></br>
                            1.4 Each entry requires a separate purchase.<br></br>
                            1.5 Entrants must retain the promotional coaster as this may be used to validate a win. Where an entrant has multiple entries, the Promoter reserves the right to request coasters related to each entry for verification.<br></br>
                            1.6 The Promoter encourages responsible drinking and would direct consumers to read http://www.drinkaware.co.uk/ for more information. </p>

                            <p className='text-fireball-red font-black'>2. Entry Mechanism</p>

                            <p>2.1 To participate: Upon purchase of 4 shots of Fireball for you and your friends in one single purchase during the Promotion Period you will receive a promotional coaster. Follow the QR code on the coaster to visit the promotional website. During the Promotion Period, complete the entry form at the promotional website with your full name, date of birth, valid email address and unique code from the promotional coaster. All entries received during the Promotion Period will be submitted into the prize draw.  </p>

                            <p className='text-fireball-red font-black'>3. The Prizes</p>

                            <p>3.1 One Main Prize: 1 x pair of VIP tickets to Snowbombing Festival 2023 taking place 10 to 15 April 2023 in Mayrhofen, Austria. The prize includes return economy flights from a UK airport, transfers to accommodation, 5 nights’ 4-star accommodation (double or twin room) with breakfasts, VIP tickets for the entire Snowbombing Festival 2023, ski or snowboard hire  (snowboard and boots, or skis poles and boots) for 2 for 5 days, 5 day mountain pass for 2, and 2 x half day group ski or snowboard lessons on Tuesday or Wednesday (beginner or immediate group not exclusive to the winner and guest). Guest must be 18 years of age or older at the date of their prize event.  The dates are non-negotiable and if the winner is not able to attend, a reserve will be awarded the Main Prize.  
                            Please see clause 3.3 for further prize details.<br></br>
                            3.2 No cash or other alternative prizes will be provided in whole or in part, except that in the event of circumstances outside of its control the Promoter reserves the right to substitute a similar prize of equal or greater value. The prizes are non-transferable and must not be sold, offered or otherwise disposed of. <br></br>
                            3.3	Further Main Prize details:<br></br>
                            1.	Winner will be required to provide proof of age and identity and any documentation as reasonably required by the Promoter in order to validate their eligibility to claim the prize;<br></br>
                            2.	Guest must be over 18 years of age at time of travel;<br></br>
                            3.	If the winner is unable to accept the prize, no compensation will be provided;<br></br>
                            4.	Travel Insurance for pre-existing medical conditions is NOT included;<br></br>
                            5.	Once a booking has been confirmed no changes are permitted;<br></br>
                            6.	If a booking is cancelled no alternative tickets will be issued;<br></br>
                            7.	The winner and their guest are responsible for ensuring that they are in possession of appropriate travel insurance and any associated costs for this are the responsibility of the prize winner and their guests(where applicable);<br></br>
                            8.	All travel is subject to the travel provider’s standard terms and conditions. Once booked, travel tickets cannot be altered or amended and no refunds are possible;  <br></br>
                            9.	Prize travel tickets cannot be used in conjunction with any loyalty programme, any other discount, discount coupon(s) or voucher(s), promotion(s) or special offer;  <br></br>
                            10.	Once travel tickets have been issued, the Promoter shall not be liable for any failure to comply with its obligations caused by (but not limited to) weather conditions, fire, flood, strike, hurricane, industrial dispute, war, terrorist activity, hostilities, political unrest, riots, civil commotion, or any other circumstances beyond the control of the Promoter or travel companies; <br></br>
                            11.	All expenses not explicitly set out in these terms and conditions will be the responsibility of the winner; <br></br>
                            12. Fulfilment or any element of this promotion is delayed or affected due to the continuing Covid-19 pandemic and resulting Government restrictions, any affected entrants will be contacted by the Promoter and kept updated of any unavoidable changes to the promotion or prizes; and <br></br>
                            13.	The winner and their guests must adhere to Government guidance and travel requirements in line with ongoing Covid-19 restrictions, including the necessary Covid-19 testing and vaccinations required. The winner will be responsible for the cost of purchasing vaccinations and the necessary Covid-19 testing kits, where necessary.</p>

                            <p className='text-fireball-red font-black'>4. Winner selection and notification</p>

                            <p>4.1 The prize draw will be undertaken within 5 working days of the end of the Promotion Period by or under the supervision of an independent person and the winner will be notified by email within 1 further working day.  <br></br>
                            4.2 The winner will have 14 days from the date of initial contact to confirm residency and supply photos of the promotional coaster if requested.  Where an entrant has multiple entries, the Promoter reserves the right to request coasters related to each entry for verification.  In the event a winner fails to respond within this timeframe an alternate winner will be contacted.  If, after offering the prize to two reserves, the prize remains unclaimed, the Promoter shall not be obliged to allocate the prize but may withdraw it from the promotion and use it as it sees fit.<br></br>
                            4.3 The Promoter reserves the right to require entrants to provide further verification of eligibility. The Promoter reserves the right to reject those registrations which it considers, in its absolute discretion, are fraudulent or invalid.<br></br>
                            4.4 No entries (bulk or otherwise) from trade, agents, third parties or organised groups will be accepted. If it becomes apparent that a participant is using a computer(s) to circumvent this condition by, for example, the use of ‘script’, ‘brute force’ or any other automated means, or using other means to create bulk entries, that person’s entries will be disqualified and any prize award will be void.<br></br>
                            4.5 Fulfilment or any element of this promotion is delayed or affected due to the continuing Covid-19 pandemic and resulting Government restrictions, any affected entrants will be contacted by the Promoter and kept updated of any unavoidable changes to the promotion or prizes. </p>

                            <p className='text-fireball-red font-black'>5. Limitations</p>

                            <p>5.1 The Promoter is not responsible or liable for:
                            a)	Third party products or services;<br></br>
                            b)	Any entries that are lost or delayed due to faulty or failed electronic data transmissions;<br></br>
                            c)	Communications line failure, regardless of cause, with regard to any equipment, systems, networks, lines satellites, servers, computers or providers utilised in any aspect of this Promotion causing delays or disruption; and<br></br>
                            d)	Any claims which are lost, delayed, corrupted, damaged, misdirected, invalid or incomplete or cannot be delivered for any technical, delivery or other reason. Proof of sending will not be accepted as proof of delivery.<br></br>
                            5.2 Insofar as permitted by law, the Promoters, its agents, and distributors will not in any circumstances be responsible or liable to compensate the winners or accept any liability for any loss, damage, personal injury or death occurring as a result of entering or taking up the Prize. Nothing in this clause shall limit the Promoter’s liability in respect of; (a) death or personal injury arising out of its own negligence; or (b) liability arising out of the Promoter’s fraud.</p>

                            <p className='text-fireball-red font-black'>6. Consent</p>

                            <p>6.1 Winners may be requested but are not obliged to take part in reasonable publicity in connection with this promotion. This may include a request to use the winner’s name and image in connection with such publicity.<br></br>
                            6.2 You acknowledge that Hi-Spirits will handle your personal information, in accordance with the Hi-Spirits privacy policy https://fireballuk.com/pages/privacy-policy<br></br>
                            6.3 Your personal details will, at all times, be kept confidential and in accordance with current Data Protection legislation. Except for winner details (see 6.3 below), all personal data collected as a result of this promotion will stored for a maximum of 12 weeks after the closing date. Your personal data will not be used to marketing purposes. You can request access to your personal data, or have any inaccuracies rectified, by sending an email to fireball@wearequantum.co.uk. By participating in the Promotion, you agree to the use of your personal data as described here.<br></br>
                            6.4  The prize winners’ surnames and counties will be made available on request between 1 June and 15 September 2023, by emailing fireball@wearequantum.co.uk with “Fireball Ontrade Snowbombing Festival winner list” in the subject line. Entrants can object to disclosure, or request that disclosure be limited in scope by contacting fireball@wearequantum.co.uk. In any case, if a regulatory body requests confirmation of the existence of winners, or evidence of receipt of prizes, the Promoter shall be entitled to disclose the information of any winner to the regulatory body only. <br></br>
                            6.5 The Promoter reserves the right to refuse to award a prize or withdraw prize entitlement and/or refuse further participation in the promotion and disqualify the participant where there are reasonable grounds to believe there has been a breach of these Terms and Conditions, the spirit of the promotion, any instructions forming part of this promotion’s entry requirements or otherwise where a participant has gained unfair advantage in participating or won using fraudulent means.<br></br>
                            6.6  Entries (bulk or otherwise) made from trade, consumer groups or third parties will not be accepted.  If it becomes apparent that a participant is using a computer(s) to circumvent this condition by, for example, the use of ‘script’, ‘brute force’, masking their identity by manipulating IP addresses, using identities other than their own or any other automated means in order to increase that participant’s entries into the draw in a way that is not consistent with the spirit of the promotion, that person’s entries will be disqualified and any prize award will be void.</p>

                            <p className='text-fireball-red font-black'>7. Other</p>

                            <p>7.1 It is the responsibility of the entrant to provide correct, up-to-date details when entering the promotion and acceptance of the prize.  The Promoter cannot be held responsible for winners failing to supply accurate information which affects the Promoter’s ability to contact the winner, prize acceptance or delivery of their prize. <br></br>
                            7.2 If for any reason any aspect of this promotion is not capable of running as planned, including by reason of infection by computer virus, network failure, bugs, tampering, unauthorised intervention, fraud, technical failures or any other cause beyond the control of the Promoter which corrupts or affects the administration, security, fairness, integrity or proper conduct of this promotion, the Promoter may in its sole discretion modify or suspend the promotion or invalidate any affected entries. <br></br>
                            7.3 If an act, omission, event or circumstance occurs which is beyond the reasonable control of the Promoter and which prevents the Promoter from complying with these Terms and Conditions the Promoter will not be liable for any failure to perform or delay in performing its obligation but will always endeavour to minimise the effect to participants in order to avoid undue disappointment. <br></br>
                            7.4 If any of these clauses should be determined to be illegal, invalid or otherwise unenforceable then it shall be severed and deleted from these Terms and Conditions and the remaining clauses shall survive and remain in full force and effect. <br></br>
                            7.5 Any question concerning the legal interpretation of the rules will be based on English law and the Courts of England and Wales will have exclusive jurisdiction unless you live in another part of the United Kingdom, in which case your local courts will have jurisdiction.</p>

                            <p className='text-fireball-red font-black'>Promoter: Hi-Spirits, 60 Marina Place, Hampton Wick, Surrey KT1 4BH.</p>



                        </div>
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
