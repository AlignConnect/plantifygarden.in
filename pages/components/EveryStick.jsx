import React from 'react'

const EveryStick = () => {

    const point_of_sticks = (arr) => {
        return arr?.map((e, key) => {
            return <div className=' py-2 sm:py-2' key={key}>
                <div className="flex items-center gap-2 ">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f6d722db-1d6e-4a23-f16d-2bb496d6be00/public" className="w-10" alt="" />
                    <div className='fontNoto pt-2 sm:text-2xl text-lg font-extrabold text-black'>
                        {e.title}
                    </div>
                </div>

                <p className='text-lg sm:text-2xl fontNoto py-3 text-justify px-1'>
                    {e.content}
                </p>

            </div >
        })
    }

    return (
        <section className=''>

            <div className="every_stick_bg">

                <div className="w-full sm:max-w-[80%] mx-auto ">


                    <div className="fontPoppins text-black text-[1.7rem] sm:text-[2.3vw] uppercase sm:py-8 py-7  text-center font-extrabold leading-tight px-2">
                        Bland of Powerful <br />element <span className="text-[#40c329]">in every stick</span>
                    </div>


                    <div className="w-full sm:max-w-[70%] mx-auto px-1">

                        <p className='text-lg sm:text-2xl fontNoto pb-2 text-center italic'>
                            "Plantify Food Stick समुंद्री शैवाल (Seaweed extract), अमीनो एसिड, ह्यूमिक एसिड व मैक्रो और माइक्रो न्यूट्रिएंट्स से भरपूर है जो पौधों को हरा-भरा बनाने और रोगमुक्त रखने में मदद करता है।"
                        </p>

                        <div className='my-2 border border-green-500 border-dashed' />


                        <div className="">
                            {
                                point_of_sticks([
                                    {
                                        title: "समुंद्री शैवाल (Seaweed extract):",
                                        content: "यह पौधों के लिए एक टॉनिक के रूप में काम करता है। यह फास्फोरस, मैग्नीशियम, जस्ता, नाइट्रोजन, पोटेशियम से भरपूर होता है जो हर प्रकार के घरेलु पौधों के विकास में उपयोगी होता है।"
                                    },
                                    {
                                        title: "अमीनो एसिड (Amino acid ):",
                                        content: "यह पौधों की वृद्धि करने वाले पदार्थों और आवश्यक खनिजों से समृद्ध होता है। यह मिट्टी की संरचना में सुधार करता है। इससे पौधों की ऊंचाई, टहनियों की मोटाई और पत्तियों के क्षेत्रफल में विस्तार होता है। "
                                    },
                                    {
                                        title: "ह्यूमिक एसिड (Humic acid):",
                                        content: "ह्युमिक एसिड मुख्य रूप से मिट्टी को भुरभुरी बनाता हैं जिससे पौधों के जड़ों का विकास अधिक होता है। इतना ही नहीं, यह पौधों में प्रकाश संश्लेषण की क्रिया को तेज करता है और रोगमुक्त भी रखता है। "
                                    },
                                    {
                                        title: "मैक्रोन्यूट्रिएंट्स (Macro nutrients):",
                                        content: "मैक्रोन्यूट्रिएंट्स में कार्बन, हाइड्रोजन, नाइट्रोजन, ऑक्सीजन, फॉस्फोरस, पोटेशियम, कैल्शियम, सल्फर और मैग्नीशियम शामिल हैं। जो पौधों को रोगमुक्त रखने और विकसित करने में उपयोगी होते है।"
                                    },
                                ])
                            }
                        </div>


                        <p className='text-lg sm:text-2xl fontNoto sm:py-10 pb-10 text-center font-extrabold italic'>
                            निष्कर्ष: Plantify Food Stick में वो प्रत्येक तत्व उचित मात्रा में शामिल है जो आपके पौधों को स्वस्थ रखने, हरा-भरा व विकसित करने के लिए जरुरी है।
                        </p>

                        



                    </div>

                </div>

            </div>

        </section>

    )
}

export default EveryStick