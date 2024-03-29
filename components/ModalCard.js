import React from "react";

export default function ModalCard({
  setShowModal,
  description,
  title,
  category,
  id,
  type,
  isOpen
}) {
    console.log(isOpen)
  return (
    <>
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <h3 className="underline decoration-primary">{category}</h3>
                </div>
                <div className="relative p-6 flex-auto">
                    <p className="my-4 text-black text-md leading-relaxed">
                    {description.slice(0,450)}...
                    </p>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                    {isOpen ? (
                        <div>
                            <h1 className="text-emerald-500 hover:opacity-60 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 animate-pulse outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Vacancy Open</h1>
                        </div>)
                        : null }
                    <div>
                        
                    </div>
                    <div>
                    <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                    </button>
                    <a
                    className="bg-emerald-500 text-white hover:opacity-60  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    href={`https://tradehelm.com/wp-content/plugins/bullhorn-oscp/#/jobs/${id}`} target="_blank" 
                    rel="noreferrer"
                    >
                    View full vacancy
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        </>
    );
}
