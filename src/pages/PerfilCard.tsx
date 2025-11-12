
const PerfilCard = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <img
          src="/assets/Image.svg"
          alt="Imagem do projeto"
          className="w-64 h-40 object-contain"
        />
      </div>
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Text Heading</h2>
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
          Tag
        </span>
        <p className="text-3xl font-bold mt-2">$50</p>

        <div className="border rounded-md p-3 mt-4">
          <h3 className="font-semibold text-sm">Title</h3>
          <p className="text-gray-600 text-sm">descrição rápida</p>
        </div>

        <button className="w-full bg-black text-white py-2 rounded mt-4 hover:opacity-80 transition">
          Button
        </button>
      </div>
    </div>
  );
};

export default PerfilCard;


