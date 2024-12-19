import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('./component/Header'));
const You = dynamic(() => import('./component/You'));
const Sec1 = dynamic(() => import('./component/Sec1'));
const Sec2 = dynamic(() => import('./component/Sec2'));
const Sec3 = dynamic(() => import('./component/Sec3'));
const Bottom = dynamic(() => import('@/pages/commonUse/bottompopup/BottomHandler'))
const index = () => {
  return (

    <section className='w-[100%] mx-auto'>

      <Header />
      <You />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Bottom />

    </section>



  )
}

export default index