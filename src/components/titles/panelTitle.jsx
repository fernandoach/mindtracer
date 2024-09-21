import { FaCube } from 'react-icons/fa6'

function PanelTitle () {
  const title = 'Panel'
  return (
    <div className="flex items-center justify-center w-full mb-4">
      <h2 className="text-success text-center text-xl p-3 flex flex-col items-center justify-center">
      <FaCube
        className="flex justify-center text-success items-center h-full mx-2"
        size={30}
      />
      <span className='text-xl'>{ title }</span>
      </h2>
    </div>
  )
}

export default PanelTitle
