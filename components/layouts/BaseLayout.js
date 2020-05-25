import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Lucas Travagin Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Atualmente estou estudando Ciência de Dados e minha história com o mundo da programação começou quando
                eu tinha 13 anos de idade, desde então, estudo todos os dias para me manter atualizado em sites como: Udemy,
                Youtube, Medium e vários outros! Em 2017, comecei meu estágio e tive a portunidade de colocar tudo que eu vinha aprendendo
                em cases reais, e apesar de gostar muito de Java, fui me especializando em Javascript tanto no Backend, quanto no Frontend" />
        <meta name="keywords" content="travagin portfolio, travagin developer, lucas travagin freelancig, lucas travagin programming"/>
        <meta property="og:title" content="Lucas Travagin - programmer, developer, bloger" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Meu nome é Lucas Travagin e sou um Programador que gosta muito de Web, Mobile e Devops."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.png"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

