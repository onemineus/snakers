import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar1() {
  const navigator = useNavigate()
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between h-12 px-4 max-w-5xl w-full">
        <h1 className="text-white uppercase font-mono text-lg cursor-pointer">
          snakers
        </h1>
        <div className="space-x-8 flex">
          <h1
            className="text-white uppercase font-mono cursor-pointer"
            onClick={() => {
              navigator("/play");
            }}
          >
            play now
          </h1>
          <h1
            className="text-white uppercase font-mono cursor-pointer"
            onClick={() => {
              navigator("/dual");
            }}
          >
            dual mode
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar1