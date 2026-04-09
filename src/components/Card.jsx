import './Card.css';


export function CarrosCard({ title, category, banner, price }) {
  return (
    <div className="apex-card">
        <img src={banner} alt={title} className='card-img' />

        <div className="card-content">
            <h4>{title}</h4>
            <p>{category}</p>
            <h4>{price}</h4>
            <button className='buy-btn'>
              <h3>Comprar</h3>
            </button>
        </div>
    </div>
  );
}