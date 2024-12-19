import React from 'react'

const Loader = ({ visible }) => {
    return (
        <div
            className={`text-center align-items-center z-50 place-items-center bg-gray-500 bg-opacity-25 fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <a href="https://plantifygarden.com/" className=""><img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/01291425-cb6b-470b-4b4b-2c2e1a2c9c00/public"
                alt="Loading..."
                className="LoaderApp-logo  mx-auto "
            /></a>
        </div>
    );
};

export default Loader