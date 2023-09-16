import img1 from '../images/r1.webp';
import img2 from '../images/r2.webp';
import img3 from '../images/r3.webp';
import img4 from '../images/r4.webp';
import '../styles/relatedProduct.css';

const RelatedProduct = () => {
  return (
    <div className='relatedProduct'>
      <h1 className='relatedProduct-title'>RELATED PRODUCTS</h1>
      <div className='relatedProduct-img-container'>
        <div className='relatedProduct-img'>
          <img src={img1} alt='image1' />
          <div className='relatedProduct-details'>
            <p>Culotte dress</p>
            <p>$150</p>
          </div>
        </div>
        <div className='relatedProduct-img'>
          <img src={img2} alt='image1' />
          <div className='relatedProduct-details'>
            <p>Culotte dress</p>
            <p>$150</p>
          </div>
        </div>
        <div className='relatedProduct-img'>
          <img src={img3} alt='image1' />
          <div className='relatedProduct-details'>
            <p>Culotte dress</p>
            <p>$150</p>
          </div>
        </div>
        <div className='relatedProduct-img'>
          <img src={img4} alt='image1' />
          <div className='relatedProduct-details'>
            <p>Culotte dress</p>
            <p>$150</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
