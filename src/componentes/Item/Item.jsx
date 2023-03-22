import {Link} from 'react-router-dom'
import './Item.css';


function Item({product}) {
      return (
        <div className='col-md-4'>
                <div className="card mt-5">
                    <img src={product.image} className="card-img-top card-img-products" alt={product.title}/>
                    <div className="card-body text-center">
                        <h3 className="card-title">{product.title}</h3>
                        <h4 className='card-description'>{product.description}</h4>
                        <h5 className="card-text">${product.price}</h5>

                    </div>
                    <div className="card-footer text-center">
                        <Link to={`/detalle/${product.id}`}>
                            <button className="btn btn-danger bg-gradient">Ver Más</button>
                        </Link>
                    </div>
                </div>
        </div>
      );
    }
    
    export default Item;