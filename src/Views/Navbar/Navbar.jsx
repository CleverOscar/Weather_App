import React from 'react'

export default function Navbar(){
    return(
        <div>
            <nav class="relative w-full flex flex-wrap items-center justify-between py-6 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div class="container-fluid">
                    <a class="text-xl text-black" href="#">ReactJS Weather App</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}