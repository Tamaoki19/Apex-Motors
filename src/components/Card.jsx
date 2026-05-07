import './Card.css';
import { Heart } from "lucide-react";

export function CarrosCard({ title, category, banner, price, isFavorite, onFavorite, onBuy }) {
  return (
    <div className="apex-card"
      data-aos="fade-up"
      data-aos-delay="100"
    >
        <img src={banner} alt={title} className='card-img' />

        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`} 
          onClick={onFavorite}
        >
          <Heart 
            size={20} 
            fill={isFavorite ? "red" : "transparent"}
            stroke={isFavorite ? "red" : "#94a3b8"} 
          />
        </button>

        <div className="card-content">
            <h4>{title}</h4>
            <p>{category}</p>
            <h4>{price}</h4>
            <button className='buy-btn' onClick={onBuy}>
              <h3>Comprar</h3>
            </button>
        </div>
    </div>
  );
}