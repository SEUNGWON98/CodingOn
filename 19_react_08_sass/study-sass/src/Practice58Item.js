const Practice58Item = (props) => {
  // props
  // post => {id: x, title: xxx, body: xxx}
  const { post } = props;
  console.log(props);

  return (
    <div className="Practice58Item">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body}</p>
    </div>
  );
};

export default Practice58Item;
