import React from 'react'

const Spinner = ({ showMessage }: { showMessage: boolean }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mb-4"></div>
      {showMessage && (
        <div className="text-center text-lg text-gray-700">
          Model loading is taking longer than expected.<br />
          Please <button onClick={() => window.location.reload()} className="text-blue-500 underline">reload the page</button>.
        </div>
      )}
    </div>
  )
}

export default Spinner
