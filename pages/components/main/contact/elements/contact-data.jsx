import style from '&/home/main/contact/elements/contact-data.module.css';

function ContactData() {
    return (
        <div id={style.div_info} className="div_half">
            <div className={`flex_c  ${style.info}`}>
                <h2 className={style.info_h2}><span className="highlighter">E-mail:</span></h2>
                <p className={`simple_p ${style.info_p}`}>unzippingthoughts@gmail.com </p><br />

                <h2 className={style.info_h2}><span className="highlighter">Telefone:</span></h2>
                <p className={`simple_p ${style.info_p}`}> (51) 99633-6485 <br />(51) 98250-5194 </p> <br />

                <h2 className={style.info_h2}><span className="highlighter">Horário de atendimento:</span></h2>
                <p className={`simple_p ${style.info_p}`}> Segunda-feira a sexta-feira das 8:00h às 11:30h e 13:00h até às 17:00h</p>
            </div>
        </div>
    );
}

export default ContactData;