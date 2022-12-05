import PropTypes from "prop-types";

const Food = ({ food }) => {
  const styles = {
    foodstyle: {
      color: "red",
    },
  };

  //   const food = "pizza";

  return (
    <div>
      <h1>
        Seo가 좋아하는 음식 중 하나는 <b style={styles.foodstyle}>{food}</b>{" "}
        입니다.
      </h1>
    </div>
  );
};

Food.defaultProps = {
  food: "Salmon",
};

Food.propTypes = {
  food: PropTypes.string,
};

export default Food;
