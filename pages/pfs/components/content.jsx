import React, { useEffect, useState } from 'react'
import dayjs from "dayjs";
import dynamic from 'next/dynamic';


const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});

const Buynow = dynamic(() => import("./buynow"), {
    loading: () => <p>Header Loading</p>,
});


const content = () => {

    const [publishedDate, setPublishedDate] = useState("");

    useEffect(() => {
        const date = dayjs().subtract(2, "day").format("MMMM D, YYYY");
        setPublishedDate(date);
    }, []);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    const how_to_use_imgs = [
        { src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1f833e4f-183a-47f4-6a52-4aafeaab8900/public", alt: "Image 1" },
        { src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3b8b31fa-7309-498c-4c38-b37913fe3c00/public", alt: "Image 2" },
        { src: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/db02f3c0-55ce-4120-6fa7-8b173ae9b300/public", alt: "Image 3" },
    ];


    return (

        <section className='bg-white fontPoppins'>

            <div className='w-full md:max-w-7xl mx-auto bg-[#fbfff8]'>


                <div className="fontJosefin uppercase text-center sm:text-4xl text-lg font-extrabold py-4 md:py-8 text-[#16703b]">
                    the houseplant & outdoor plant
                </div>


                <div className="md:max-w-5xl mx-auto px-1">



                    <div className="flex items-center justify-between px-2 md:py-3" id='home'>
                        <div className="flex items-center justify-between gap-2">
                            <img
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e656be3c-36e7-4ad2-50a3-2c004c2a1300/public"
                                alt="Manshi Chauhan"
                                className="md:w-[35%] w-16 cursor-pointer"
                                onClick={togglePopup}
                            />
                            <div>
                                <div className="md:text-lg text-[1.1rem] font-semibold">Manshi Chauhan</div>
                                <div className="md:text-md text-sm">
                                    story by: <span className="text-[#16703b]">Plantify</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:text-md text-[0.8rem]">
                            Published on:-<br />
                            {publishedDate}
                        </div>

                        {/* Popup for image preview */}
                        {isPopupOpen && (
                            <div
                                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                                onClick={togglePopup}
                            >
                                <div
                                    className="relative bg-white p-4 rounded shadow-lg w-1/2 sm:w-40"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                        onClick={togglePopup}
                                    >
                                        ✕
                                    </button>
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e656be3c-36e7-4ad2-50a3-2c004c2a1300/public"
                                        alt="Preview"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        )}
                    </div>





                    <p>
                        दोस्तों मैं मानसी हूं, और मुझे पौधे बेहद पसंद हैं। मेरे घर में हर तरफ गमले ही गमले हैं। लेकिन मेरी मेहनत के बावजूद, मेरे पौधे कभी अच्छे से नहीं बढ़ पाते थे। मैंने सब कुछ कोशिश की - अच्छी मिट्टी, भरपूर धूप, नियमित पानी, फिर भी पत्तियाँ पीली पड़ जातीं और फूल खिलते ही नहीं थे। मेरी इतनी मेहनत के बाद भी मुरझाये और बेजान पौधे देखकर मैं बहुत निराश हो गई थी।
                    </p>


                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3d1134e1-cde2-4619-cea1-22f1836ec600/public" alt="" className='w-full py-3' />

                    <div className="" id='blog'>
                        <p>
                            एक दिन, उसने सोशल मीडिया पर <span className='text-[#16703b] fontPoppins font-semibold'>"Plantify Food Sticks"</span> के बारे में सुना - जो एक ऑर्गेनिक प्लांट बूस्टर है। इस प्लांट फू स्टिक में समुद्री शैवाल (सीवीड एक्सट्रेक्ट) का अर्क होता है, जो पौधों के लिए बहुत फायदेमंद होता है। मैंने सोचा, "खोने के लिए कुछ नहीं है," पर अगर इससे मेरे पौधे हरे भरे हो जाते है तो पाने के लिए बहुत कुछ ! एक तो पौधों में फल-फूल उग जायेंगे और दूसरा लहलहाते पौधों की वजह से घर की खूबसूरती भी बढ़ जाएगी। मैंने तुरंत एक पैक आर्डर कर दिया।
                        </p>
                    </div>


                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1cde84a6-a769-4647-db1f-06d8dea07100/public" alt="" className='w-full md:w-3/4 mx-auto py-3' />

                    <p>
                        मैंने सीवीड एक्सट्रेक्ट के बारे में पता किया ! यह पौधों के लिए जरुरी सभी तत्वों की पूर्ति करने में मदद करता है। सीवीड एक्सट्रेक्ट मैक्रो और माइक्रो न्यूट्रिएंट्स बढ़ाता है और पौधे को स्वस्थ, जड़ो को मजबूत और फलदार और फूलदार बनाता है। इसके साथ गार्डनिंग बहुत ही आसान हो जाता है यानि कम केयर के साथ ज्यादा खुशहाल पौधे !
                    </p>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/829b3d3c-ab26-410a-a461-4ed8ca796400/public" alt="" className='w-full py-3' />

                    <p>
                        इसे इस्तेमाल करना बहुत आसान था - बस मिट्टी में गाड़ देना था और 45 दिनों की छुट्टी। बस नियमित थोड़ा-थोड़ा पानी देना था। कुछ ही दिनों में, मैंने अपने पौधों में जबरदस्त बदलाव देखना शुरू किया। पत्तियाँ हरी-भरी हो गईं, और फूल खिलने लगे। पौधे तेजी से बढ़ने भी लगे और पैदावार भी अच्छी होने लगी।
                    </p>


                    <div className="">
                        <div className="grid grid-cols-3 gap-4 my-3">
                            {how_to_use_imgs.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="sm:w-3/5 w-full mx-auto"
                                />
                            ))}
                        </div>
                    </div>


                    <p>
                        मैं बिना किसी झंझट के अपने पौधों में इतना शानदार बदलाव देखकर बेहद खुश हूँ! <span className='text-[#16703b] fontPoppins font-semibold'>"Plantify Food Sticks"</span> ने मेरी बागवानी को इतना आसान बना दिया है। मैं सभी प्लांट लवर्स को इस अद्भुत उत्पाद को आजमाने की सलाह दूंगी। जिससे उनके पौधे भी खूब फलें-फूलें।
                    </p>



                </div>
            </div>

            <div className='w-full md:max-w-7xl mx-auto bg-[#e9fae4] rounded-lg'>

                <div className="md:max-w-6xl mx-auto px-1  sm:py-16 py-5">


                    <div className="grid sm:grid-cols-2 grid-cols-1  items-center justify-center">


                        <div className="order-2 sm:order-1">
                            <p>मेरा नाम इशांत कश्यप है। मुझे गार्डनिंग बहुत पसंद है। गार्डनिंग करने के पीछे पहली वजह है कि मुझे पौधों से प्रेम है क्योंकि क तो ये वातावरण को सपोर्ट करते है दूसरी वजह है की घर की खूबसूरती ! गार्डेनिंग चाहे इनडोर हो या आउटडोर हरे-भरे और खिले हुए पौधे हमारे घरो की खूबसूरती बढ़ा देते है। </p>
                            <p>लेकिन अगर अच्छी केयर, नियमित पानी और सब कुछ करने के बाद भी पौधे सूखने लगे या मुरझा जाये तो बहुत दुःख होता है, और मेरे साथ ऐसा ही हो रहा था। मेरे ज्यादातर पौधे ग्रोथ नहीं कर रहे थे और अच्छी केयर के बाद भी सूखते जा रहे थे। फिर मेरे हाथ लगा पौधों का ग्रोथ बढ़ाने वाला सॉलूशन Plantify का <span className='text-[#16703b] fontPoppins font-semibold'>"Plantify Food Sticks"</span> </p>
                        </div>

                        <div className="order-1 sm:order-2">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2f3e1391-4fda-4671-75a6-f91b07b26800/public" alt="" className='sm:w-5/6 mx-auto w-full' />
                        </div>

                    </div>

                    <p className='sm:my-10 my-3'>
                        इस स्टिक में सीवीड एक्सट्रेक्ट है जो मैक्रो और माइक्रो न्यूट्रिएंट्स बढ़ाता है और पौधे को स्वस्थ, जड़ो को मजबूत और फलदार और फूलदार बनाता है। इसका हर एक स्टिक मेरे पौधों में जान डालने लगा और मेरे मुरझाये पौधे भी फिर से हरे भरे होने लगे और सीजन में हर बार से अच्छी क्वीलिटी के फूल उगे।
                    </p>


                    <div className="" id='about'>
                        <YoutubeFrame vid='a8PDMeiKOwE' className="py-5" />
                    </div>




                </div>
            </div>

            <div className='w-full md:max-w-7xl mx-auto bg-[#f6fae5] rounded-lg'>

                <div className="md:max-w-6xl mx-auto px-1  sm:py-16 py-5">


                    <div className="grid sm:grid-cols-2 grid-cols-1  items-center justify-center">


                        <div className="order-2 sm:order-1">
                            <p>
                                मेरा नाम शिवानी है, मैं आप सभी को Plantify Plant Food Stick के बारे में बताना चाहती हूँ जो मैंने अनुभव किया ताकि आप भी अगर प्लांट लवर है पर अपने अविकसित और पीली पत्तियों वाले मुरझाये पौधे देख मेरी तरह दुखी होते है तो इस Plant Food Stick से अपने पौधों का ग्रोथ बढ़ा सके और हरे-भरे व लहलहाते पौधे देख आप भी खुश हो सकें।
                            </p>
                            <p>
                                यह एक बेस्ट ऑर्गेनिक प्लांट बूस्टर फर्टिलाइजर है जो मेरे सुख रहे ज्यादातर पौधों में फिर से जान डाल दिया और मरियल और अविकसित पौधों का भी ग्रोथ हो गया। इसमें सीवीड एक्सट्रेक्ट है जो मैक्रो और माइक्रो न्यूट्रिएंट्स बढ़ाता है। ये नूट्रिएंट्स पौधों का पोषण होते है और हर प्रकार के प्लांट्स के लिए जरुरी होते है।
                            </p>
                        </div>

                        <div className="order-1 sm:order-2">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ed96ced-dfd1-435d-e15e-7a1bd57b0500/public" alt="" className='sm:w-5/6 mx-auto w-full' />
                        </div>

                    </div>

                    <p className='sm:my-10 my-3'>
                        बस एक स्टिक और नियमित पानी और 45 दिनों तक ध्यान न देने पर भी पौधे निरंतर मजबूती के साथ ग्रोथ करते रहते है। यह पौधों की जरुरत है और मैं यकीन के साथ कह सकती हूँ पौधों का इससे बेहतर दूसरा पोषण हो ही नहीं सकता।
                    </p>


                    <div className="">
                        <YoutubeFrame vid='aBXPmNlvDkk' className="py-5" />
                    </div>




                    <div className="text-[#055c0d] sm:text-3xl text-xl text-center fontNoto sm:my-10 my-4 font-extrabold px-2">
                        ऑफिसियल वेबसाइट पर <span className='text-[#16703b] fontPoppins'>"Plantify Food Sticks"</span> के वर्तमान ऑफर्स और आपके लिए स्पेशल छूट जैसी अन्य सभी जानकारियों के लिए निचे दिए गए बटन पर क्लिक करें। वहां से आप इसे भारी छूट के साथ आर्डर कर सकते है!!
                    </div>


                    <div className='text-center' id='shop'>
                        <Buynow />
                    </div>


                </div>
            </div>


        </section>
    )
}

export default content