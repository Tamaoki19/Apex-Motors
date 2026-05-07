import "./CarsModal.css"; // Removido a barra inicial para garantir o caminho relativo
import { X, Trophy, Users, Store, Warehouse, } from "lucide-react";

export function CarsModal({ car, onClose }) {
  if (!car) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X />
        </button>
        
        <img src={car.banner} alt={car.title} className="modal-banner" />

        <div className="modal-body">
          <span className="modal-category">{car.category}</span>
          <h2>{car.title}</h2>
          
          <div className="cars-stats">
            <div className="stat">
              <Store size={20} />
              <span>1.000 em estoque</span>
            </div>
            <div className="stat">
              <Users size={20} />
              <span>Avaliação 10/10</span>
            </div>
            <div className="stat">
              <Warehouse size={20} />
              <span>Suporte oferecido</span>
            </div>
          </div>
          <button className="buy-btn">Comprar</button>
        </div>
      </div>
    </div>
  );
}