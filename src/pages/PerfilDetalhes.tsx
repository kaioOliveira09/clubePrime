

const PerfilDetalhes = () => {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Detalhes do projeto</h2>

      <div className="mb-3">
        <h3 className="font-medium">Categoria</h3>
        <p className="text-gray-600 text-sm">text</p>
      </div>

      <div>
        <h3 className="font-medium">Descrição detalhada</h3>
        <p className="text-gray-600 text-sm mt-1">
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very short story.
        </p>
      </div>
    </div>
  );
};

export default PerfilDetalhes;
