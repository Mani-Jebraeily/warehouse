import React from 'react'

function DeleteModal() {
  return (
    <>
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[320px] rounded-xl p-6 text-center">
        
        <div className="text-red-500 text-4xl mb-4">✕</div>

        <p className="mb-6">آیا از حذف این محصول مطمئنید؟</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200"
          >
            لغو
          </button>

          <button
            onClick={() => {
              // delete logic
            //   onClose();
            }}
            className="px-4 py-2 rounded bg-red-500 text-white"
          >
            حذف
          </button>
        </div>

      </div>
    </div>
    </>
  )
}



