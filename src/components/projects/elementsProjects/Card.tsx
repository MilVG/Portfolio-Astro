import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const Card = () => {
  return (
    <div
      className="
          w-[600px] h-[500px] shrink-0
          rounded-3xl panel bg-slate-300 border border-opacity-20 border-[#dbdbdb]
          flex flex-col justify-center items-center"
    >
      <div className="w-[90%] h-[95%] flex flex-col justify-start gap-4 text-white">
        <h1 className="uppercase text-sm font-bold">Feature Projects</h1>
        <h2 className="text-3xl font-bold">Admin Projects</h2>
        <div className=" 
              bg-cover bg-center h-1/3 rounded-3xl flex 
              flex-col justify-center items-center relative w-full
              md:h-1/2
              ">
          <h1 className="absolute z-10 text-4xl text-white font-bold">Card Nº 1</h1>
          <div className="absolute w-3/4 h-3/4 backdrop-blur-[5px] border rounded-3xl
                hover:backdrop-blur-none hover:transition">
          </div>
        </div>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor torquent
          vehicula suspendisse erat amet lacinia! Quis aptent ac duis tincidunt id,
          etiam commodo lobortis tellus. Consequat primis auctor consectetur mus;
          hendrerit porttitor fermentum erat arcu.</p>
        <ul className="space-y-5">
          <h2 className="text-sm font-bold uppercase">technologies: </h2>
          <div className="flex flex-wrap gap-5">
            <span className="bg-opacity-40 bg-slate-300 px-4 rounded-xl text-white  
                  border border-slate-500 "
            >Item 1</span>
            <span className="bg-opacity-40 bg-slate-300 px-4 rounded-xl 
                  text-white  border border-slate-500 ">Item 1</span>
            <span className="bg-opacity-40 bg-slate-300 px-4 rounded-xl 
                  text-white  border border-slate-500 ">Item 1</span>
            <span className="bg-opacity-40 bg-slate-300 px-4 rounded-xl 
                  text-white  border border-slate-500 ">Item 1</span>
          </div>
        </ul>
        <div className="w-full flex flex-row justify-end">
          <button className="hover:border-b border-b-white
                flex flex-row items-center gap-2">
            Go To Project
            <ArrowTopRightOnSquareIcon width={24} height={24} className="hover:text-slate-400" />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Card
