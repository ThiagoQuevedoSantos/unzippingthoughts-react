import style from "&/home/elements/call-to-action-btn.module.css";
import ButtonsMUI from "./buttons-MUI";

function CallToActionBtn(props) {
  return (
    <section className={`flex_c ${style.action_container} ${style[props.position]}`}>
      <ButtonsMUI text={props.text} color={props.color} variant={props.variant} position={props.position}/>
      {/* <button className={`${style[props.btnStyle]} ${style.btn}`}>
        <span className="intoTitle"> {props.text} </span>
      </button> */}
    </section>
  );
}

export default CallToActionBtn;
