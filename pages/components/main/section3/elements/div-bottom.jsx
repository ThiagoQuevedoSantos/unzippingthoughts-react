import style from "&/home/main/section3/elements/div-bottom.module.css";

function DivBottom() {
  const BASE_SOURCE = "static/assets/images/development/";
  const FIGURE = [
    ["Requisitos do cliente", `${BASE_SOURCE}note.png`],
    ["Pensamento crítico", `${BASE_SOURCE}thought.png`],
    ["Construção do projeto", `${BASE_SOURCE}building.png`],
    ["Opinião do cliente", `${BASE_SOURCE}customer-service.png`],
    ["Ajustes e testes", `${BASE_SOURCE}test.png`],
    ["Suporte ao cliente", `${BASE_SOURCE}support.png`],
  ];

  return (
    <div className={`flex_c ${style.div_bottom}`} id="development">
      <ul className={`${style.process} flex_r`}>
        {FIGURE.map((array, index) => {
          return (
            <li className={`${style.item} flex_c pseudo bef`} key={index}>
              <img
                className={style.icons}
                src={array[1]}
              />
              <p>{array[0]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DivBottom;
