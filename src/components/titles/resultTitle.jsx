import { FaBook } from 'react-icons/fa6'

function ResultsTitle () {
  return (
    <div className="flex items-center justify-center w-full mb-4">
      <h2 className="text-success text-center text-xl p-3 flex flex-col items-center justify-center">
        <FaBook className="flex justify-center text-success items-center h-full mx-2"
          size={30}/>
        <span className='text-xl'>Resultados</span>
      </h2>
    </div>
  )
}

export default ResultsTitle
