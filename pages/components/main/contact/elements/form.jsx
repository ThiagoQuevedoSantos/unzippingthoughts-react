import style from '&/home/main/contact/elements/form.module.css';
import ButtonsMUI from '@/elements/buttons-MUI';
let nome, email, message;
const fields = [
    nome = {
        text: "NOME",
        type: "name"
    },
    email = {
        text: "EMAIL",
        type: "email"
    }
];

function Form() {
    return (
        <div id={style.div_form} className="div_half">
            <form id={style.form_contact} className="flex_c">
                {fields.map((data, index) => {
                    return (
                        <input type={data.type} required="" placeholder={data.text} className={style.inputs} key={index} />
                    );
                })
                }
                <div className={style.div_text_area}>
                    <textarea className={style.text_area} typeof="text" placeholder="DIGITE SUA MENSAGEM AQUI" />
                </div>
                <ButtonsMUI text="Enviar" color="primary" variant="contained" />
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
}

export default Form;