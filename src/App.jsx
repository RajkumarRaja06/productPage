import { Navbar, Home, Product, Review, RelatedProduct } from './components';
import img1 from './images/pic1.webp';
import img2 from './images/pic2.webp';

const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Home />
      <Product />
      <Review image={img1} />
      <Review image={img2} />
      <RelatedProduct />
    </div>
  );
};

export default App;
