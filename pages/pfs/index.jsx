import dynamic from 'next/dynamic';
import React from 'react'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});


const Content = dynamic(() => import('./components/content'), {
    loading: () => <p>content Loading</p>
});

const Footer = dynamic(() => import('./components/Footer'), {
    loading: () => <p>Loading</p>
});


const index = () => {
    return (
        <div>

            <Header />

            <Content />

            <Footer />

        </div>
    )
}

export default index