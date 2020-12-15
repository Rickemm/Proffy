import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/3732784?s=460&u=917af9f1289ac7ba0e9119bfc284852b3915ab51&v=4" alt="Henrique Monteiro"/>
                        <div>
                            <strong>Henrique Monteiro</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        qualquer coisa na primeira linhas
                        <br/><br/>
                        Outra qualquer coisa nas linhas posteriores, vou continuar escrecendo para ter uma quebra de linha ao menos, então não se de ao trabalho de ler isso.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem