import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Lucas Travagin - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Olá, Seja bem Vindo</h1>
                <h4 className="subtitle fadein">Aqui em Breve terá uma foto</h4>
                <p className="subsubTitle fadein">Mas por em quanto, leia uma breve descrição sobre mim</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>Meu nome é Lucas Travagin e sou um Programador que gosta muito de Web, Mobile e Devops. </p>
                <p className="text-justify">
                Atualmente estou estudando Ciência de Dados e minha história com o mundo da programação começou quando
                eu tinha 13 anos de idade, desde então, estudo todos os dias para me manter atualizado em sites como: Udemy,
                Youtube, Medium e vários outros! Em 2017, comecei meu estágio e tive a portunidade de colocar tudo que eu vinha aprendendo
                em cases reais, e apesar de gostar muito de Java, fui me especializando em Javascript tanto no Backend, quanto no Frontend.
                </p>
                <p className="text-justify">
                Vivo em um aprendizado constante e ultimamente assuntos sobre inteligência emocional, tem prendido a minha atenção.
                Descobri que a empatia pode te livrar de um infarto e te faz ter momento mais felizes, a vida é melhor compreendida
                quando você entender que o outro é o outro. Amo meus pais, meus irmãos e minha cadela Lupita.   
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
