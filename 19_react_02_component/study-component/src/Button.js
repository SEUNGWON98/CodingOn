const Button = (props) => {
  console.log(props);
  const { link, children } = props;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="button">{props.children}</button>
    </a>
  );
};

Button.defaultProps = {
  children: "네이버",
  link: 'https://www.daum.net",',
};

export default Button;
