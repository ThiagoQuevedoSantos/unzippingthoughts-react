function TitleTop(props) {
  return (
    <div className="flex_c">
      <h1 className={props.title_style}>{props.title}</h1>
      {props.text && props.text != '' ? <p className="simple_p">{props.text}</p> : ''}
    </div>
  );
}

export default TitleTop;
