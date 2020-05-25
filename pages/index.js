import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Tech Lover', 'Team Player', 'NodeJS', 'Go Lang', 'Vue', 'AWS', 'Devops'];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 60000);
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth}
                  headerType="index"
                  title="Lucas Travagin - Portfolio">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Javascript Developer, NodeJS, Go Lang, Vue, AWS e Devops.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/section-1.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Get Your Projects Done </h2>
                        <div className="hero-section-content-intro">
                          Profesional and top quality service in web development.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/section-2.jpg"/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    { isAuthenticated && <span> <b> {user.name} </b> </span> }
                    Bem Vindo(a). Eu sou o Lucas, um jovem apaixonado por tecnologia e pessoas :).
                    Fique a vontade para navegar e conhecer um pouco mais <a className="text-warning" href="/about">sobre mim</a>, <a className="text-warning" href="/portfolios"> meus projetos</a> e 
                    <a className="text-warning" href="/blog"> minhas publicações</a>
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />


                <div className="hero-welcome-bio">
                  <h2>
                    A few months of coding can save DAYS of planning.
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="service-link">Vector illustration credit:{' '}
            <a href="https://www.Vecteezy.com/">vecteezy.com</a>
          </span>
        </div>
      </BaseLayout>
    )
  }
}



export default Index;

