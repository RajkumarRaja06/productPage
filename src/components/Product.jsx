import '../styles/product.css';
import { FaSearchPlus, FaStar } from 'react-icons/fa';
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  AiOutlineHeart,
} from 'react-icons/ai';

const Product = () => {
  return (
    <div className='product'>
      <div className='product-img'>
        <p className='product-search-icon'>
          <FaSearchPlus />
        </p>
      </div>
      <div className='product-details'>
        <div className='product-name'>OVERSIZED CHECK DRESS</div>
        <div className='product-start'>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <p>(3 customer reviews)</p>
        </div>
        <div className='product-price'>$200</div>
        <div className='add-to-cart-container'>
          <div className='add-to-cart'>
            <span className='product-minus'>
              <AiOutlineMinusSquare />
            </span>
            <span className='product-count'>2</span>
            <span className='product-plus'>
              <AiOutlinePlusSquare />
            </span>
          </div>
          <button className='product-add-to-cart-btn'>Add to card</button>
          <p className='product-like'>
            <AiOutlineHeart />
          </p>
        </div>
        <div className='product-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          elementum turpis in leo eleifend ultrices. Fusce egestas vehi
          <ul className='product-description-points'>
            <li>Cotton-blend fabric</li>
            <li>Check-pattern</li>
            <li>Removable belt at the waist</li>
            <li>High waist</li>
          </ul>
        </div>
        <div className='product-bottom'>
          <p>
            <span>Categories:</span> Metro, Women
          </p>
          <p>
            <span>Tags:</span> Dress, Fashion Furniture, Lookbook
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
