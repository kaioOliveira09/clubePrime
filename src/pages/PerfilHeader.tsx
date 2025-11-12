
import { MessageCircle, User } from "lucide-react";

const PerfilHeader = () => {
  return (
    <div className="bg-white border rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
      <img
        src="/assets/Generic avatar.svg"
        alt="Avatar empresa"
        className="w-24 h-24 rounded-full"
      />
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-lg font-semibold">Empresa</h2>
        <div className="flex gap-4">
          <button className="bg-gray-200 shadow px-4 py-2 rounded flex items-center gap-2">
            <MessageCircle size={18} /> Conversar
          </button>
          <button className="bg-gray-200 shadow px-4 py-2 rounded flex items-center gap-2">
            <User size={18} /> Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilHeader;
