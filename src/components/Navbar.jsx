import '../styles/navbar.css';
import { BsCart4, BsSearch } from 'react-icons/bs';
import { CgMenuRound } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-title'>ZAYA</div>
      <ul className='navbar-menu'>
        <li>DEMO</li>
        <li>SHOP</li>
        <li>PAGE</li>
        <li>LOOK BOOK</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      <div className='navbar-icon'>
        <p className='navbar-cart'>
          <span>
            <BsCart4 />
          </span>
          <span className='navbar-cart-count'>5</span>
        </p>
        <p className='navbar-search'>
          <BsSearch />
        </p>
        <p className='navbar-menu'>
          <CgMenuRound />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
