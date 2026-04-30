import React from 'react'

const BigText = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden font-sec bg-[#FE6334] text-[#FEE832] flex items-center">
      
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[0.7] md:leading-[0.75]">

        {/* SODA */}
        <div className="text-[25vw] md:text-[14vw]">
          Soda
        </div>
        {/* THAT MAKES YOU */}
        <div className="grid gap-[3vw] text-[30vw] md:flex md:justify-center md:gap-[2vw] md:text-[11vw] ">
          <span className="inline-block">that</span>
          <span className="inline-block max-md:text-[24vw]">makes</span>
          <span className="inline-block max-md:text-[35vw]">you</span>
        </div>
        {/* SMILE */}
        <div className="text-[25vw] md:text-[16vw]">
          Smile
        </div>
      </h2>
    </section>
  )
}

export default BigText
