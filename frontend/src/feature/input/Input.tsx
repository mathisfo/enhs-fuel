import React, { useState } from "react";
import { Refill } from "../../types/Refill";

const Input = () => {

    const [aircraft, setAircraft] = useState<string>("YDM")
    const [pumpValue, setPumpValue] = useState<number>(0)
    const [fuel, setFuel] = useState<string>("UL91")
    const [refill, setRefill] = useState<Refill>()
    const [name, setName] = useState<string>("")

    console.log(aircraft);

    const handleRefuelSubmit = () => {
        
    }


    return (
        <div className="flex justify-center">
            {aircraft == "OTHER" ?

                <div className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">
                    Fyller du fra anlegget på fly som ikke er tilknyttet ENHS, blir flyplassjef informert
                </div>

                : <div></div>}
            <div className="mb-3 xl:w-96">
                <label className="form-label inline-block mb-2 text-gray-700"
                >Ny måler stand</label
                >
                <input
                    type="number"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    onChange={(e) => setPumpValue(Number(e.target.value))}
                    placeholder="Fyll inn ny målertilstand"
                />
            </div>

            <div>
                <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="aircraft" onChange={(e) => setAircraft(e.target.value)}>
                    <option value="YDM" defaultChecked>LN-YDM</option>
                    <option value="DFM">LN-DFM</option>
                    <option value="DFK">LN-DFK</option>
                    <option value="ACF">LN-ACF</option>
                    <option value="OTHER">Eksternt fly</option>
                </select>
            </div>

            <div>
                <select defaultValue={"UL91"} name="fuel" className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    onChange={(e) => setFuel(e.target.value)}>
                    <option value="UL91" >UL91</option>
                    <option value="100LL">100LL</option>
                    <option value="MOGAS">MOGAS</option>
                </select>
            </div>

            <input
                type="text"
                className="form-control block px-3 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setName(e.target.value)}
                placeholder="Fornavnet ditt.."
            />

            <div>
                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleRefuelSubmit}>Register Fylling</button>
            </div>


        </div>

    )
}

export default Input;
