import React from "react" ;



function Calc(){



    return(
        <div class="flex-col justify-center items-center bg-black w-[350px] ml-[35%] mt-[10%] rounded-2xl">
            <div class="text-3xl text-right text-white mr-10 pt-16">0</div>
            <div class="grid grid-cols-4 w-[400px] h-[350px] gap-0 align-middle items-center ml-4 content-center pr-11"> 
            <button class="w-12 h-12 bg-gray-500 text-white rounded-full">AC</button>
            <button class="w-12 h-12 bg-gray-500 text-white rounded-full">+/-</button>
            <button class="w-12 h-12 bg-gray-500 text-white rounded-full">%</button>
            <button class="w-12 h-12 bg-[#F79A0A] text-white rounded-full">÷</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">7</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">8</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">9</button>
            <button class="w-12 h-12 bg-[#F79A0A] text-white rounded-full">x</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">4</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">5</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">6</button>
            <button class="w-12 h-12 bg-[#F79A0A] text-white rounded-full">-</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">1</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">2</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">3</button>
            <button class="w-12 h-12 bg-[#F79A0A] text-white rounded-full">+</button>
            <button class="w-12 h-12 bg-gray-800 text-white col-span-2 w-full rounded-full text-left pl-5">0</button>
            <button class="w-12 h-12 bg-gray-800 text-white rounded-full">,</button>
            <button class="w-12 h-12 bg-[#F79A0A] text-white rounded-full">=</button>
            </div> 
        </div>

    )
}
export default Calc