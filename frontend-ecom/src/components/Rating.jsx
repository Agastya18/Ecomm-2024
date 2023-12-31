import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Rating.css'
const Rating = ({value,text,color}) => {
  return (
    <div className='rating'>
 <span>
        {value >= 1 ? (
          <FaStar size={"18px"} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt size={"18px"} />
        ) : (
          <FaRegStar size={"18px"} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar size={"18px"} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt size={"18px"}/>
        ) : (
          <FaRegStar size={"18px"}/>
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar size={"18px"}/>
        ) : value >= 2.5 ? (
          <FaStarHalfAlt size={"18px"}/>
        ) : (
          <FaRegStar size={"18px"}/>
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar size={"18px"}/>
        ) : value >= 3.5 ? (
          <FaStarHalfAlt size={"18px"}/>
        ) : (
          <FaRegStar size={"18px"}/>
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar size={"18px"}/>
        ) : value >= 4.5 ? (
          <FaStarHalfAlt size={"18px"}/>
        ) : (
          <FaRegStar size={"18px"}/>
        )}
      </span>
      <span className='rating-text'>{text && text}</span>
    </div>
  )
}
Rating.defaultProps = {
    color: '#f8e825',
  };

export default Rating