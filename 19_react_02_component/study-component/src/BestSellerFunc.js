import PropTypes from "prop-types";
import amond from "./BestSeller.jpg";

const BestSellerFunc = ({ title, author, price, type }) => {
  return (
    <div>
      <div className="frame">
        <h1 className="thisweek">이번주 베스트셀러</h1>
        <img className="BestSellerImg" src={amond} alt="" />
        <h2>{title}</h2>
        <div>
          저자 : {author} <br />
          판매가 : {price} <br />
          구분 : {type}
        </div>
      </div>
    </div>
  );
};

BestSellerFunc.defaultProps = {
  title: "아몬드",
  author: "모름",
  price: "14000",
  type: "소설",
};

BestSellerFunc.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default BestSellerFunc;
