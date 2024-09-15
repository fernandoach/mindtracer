import { FaCircleExclamation } from 'react-icons/fa6'

function ErrorChip ({ error }) {
  return (
    <div className="flex items-center justify-center gap-2 border border-danger rounded-md px-4 py-2 w-full">
      <FaCircleExclamation color="danger" className="text-2xl text-danger" />
      <span className="text-sm text-center text-danger">{error}</span>
    </div>
  )
}

export default ErrorChip
