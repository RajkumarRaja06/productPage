import '../styles/review.css';

import { FaStar } from 'react-icons/fa';

const Review = ({ image }) => {
  return (
    <div className='review'>
      <div className='review-img'>
        <img src={image} alt='Image1' />
      </div>
      <div className='review-details'>
        <p className='review-dis'>
          “Proin bibendum dolor vitae neque ornare, vel mollis est venenatis.
          Orci varius natoque penatibus et magnis dis parturient montes, nascet”
        </p>
        <div className='review-details-start'>
          <span className='review-details-name'>ROSIE SILVA</span>
          <span className='review-details-start-icon'>
            {' '}
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
          </span>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Review;
