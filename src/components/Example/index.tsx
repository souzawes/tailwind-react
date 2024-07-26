function Example() {
    return (
        <>
            <div className="flex flex-col gap-10 items-center justify-center bg-blue-100">
                <div className="mb-8 text-center">
                    <p className="mt-4 text-lg text-blue-800">Utilização de width, height, padding, margin e border</p>
                </div>

                {/* Examples using different paddings to adjust location in areaa box   */}
                <div className="flex gap-5">
                    <div className="bg-white p-4 border rounded shadow-md w-48 h-48">
                        <div className="bg-blue-600 w-10 h-10" ></div>
                    </div>
                    <div className="bg-white p-4 pl-32 border rounded shadow-md w-48 h-48">
                        <div className="bg-blue-600 w-10 h-10" ></div>
                    </div>
                    <div className="bg-white p-4 pl-32 pt-32 border rounded shadow-md w-48 h-48">
                        <div className="bg-blue-600 w-10 h-10" ></div>
                    </div>
                </div>

                {/* Example using different margins to adjust vertical location of boxes in the same area */}
                <div className="flex space-x-4 h-64 p-4 bg-blue-700" >
                    <div className="bg-white mt-32 border rounded shadow-md w-48 h-24" />
                    <div className="bg-white mt-auto mb-auto border rounded shadow-md w-48 h-24" />
                    <div className="bg-white border rounded shadow-md w-48 h-24" />
                </div>

                {/* Example using differents color of borders in boxes */}
                <div className="flex space-x-4">
                    <div className="bg-white p-4 border rounded border-pink-600 shadow-md w-48 h-24" />
                    <div className="bg-white p-4 border rounded border-green-600 shadow-md w-48 h-24" />
                    <div className="bg-white p-4 border rounded border-yellow-600 shadow-md w-48 h-24" />
                </div>

                <div className="mt-8 p-4 border-t-4 border-blue-500 w-full max-w-md bg-white shadow-lg rounded">
                    <p className="text-gray-700">Este é um exemplo de simples de como utilizar classes de utilitários do Tailwind CSS para estilizar componentes de forma consistente e rápida.</p>
                </div>

            </div></>
    );
}

export default Example;