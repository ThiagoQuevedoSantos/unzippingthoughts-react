function TitleTop(props) {
    function paragraph(paragraph){
        if(paragraph & paragraph != ''){
            return (
                <p className="simple_p">{paragraph}</p>
            );
        }
        return;
    }

  return (
    <div className="flex_c">
      <h1 className={props.title_style}>{props.title}</h1>
      {paragraph(props.text)}
    </div>
  );
}

export default TitleTop;
