const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  <div>
    <h1 class="heading">Social Button</h1>
    <div className="button-con">
      <Button className="like-button button" buttonText="Like" />
      <Button className="cmt-button button" buttonText="comment" />
      <Button className="share button" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
