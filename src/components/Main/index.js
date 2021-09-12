import React from 'react';
import './style.scss';
import sectionIcons from '../../assets/sectionIcons';
import articleItems from '../../assets/articleItems';
import mockupImage from '../../images/image-mockups.png';


const Main = () => {
  return (
      <main>
        <div className="section__wrapper--desktop">
        <section className="section__hero">
          <div className="section_hero--image-wrapper">
          <img className="section__hero--image" src={mockupImage} alt="mobiles"></img>
          </div>
          
        </section>
        <section className="section__details">
          <h1>Next generation digital banking</h1>
          <p className="text">Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.
          </p>
          <a className="cta" href="#">Request invite</a>
        </section>
        </div>

        <section className="section__info">
          <div className="container">
            <h2>Why choose Easybank?</h2>
            <p className="text">We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
            </p>
            <div className="section__items--desktop-wrapper">
            {sectionIcons.map((item) => (
              <div className="section__item" key={item.id}>
                <div className="section__image--wrapper">
                  <img className="section__icons" src={item.icon} alt={item.alt}></img>
                </div>
              <div className="section__text--wrapper">
                <h3>{item.heading}</h3>
                <p className="text">{item.text}</p>
              </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        <section className="section__articles">
        <div className="container">
          <h2>Latest articles</h2>
          <div className="section__items--desktop-wrapper">
            {articleItems.map((item) => (
              <div className="section__articles--item" key={item.id}>
              <div className="section__articles--image-wrapper-outer">
                <div className="section__articles--image-wrapper-inner">
                  <img className="section__articles--image" src={item.image} alt={item.alt}></img>
                </div>
              </div>
              <div className="section__articles--text">
                <span className="section__articles--author">{item.author}</span>
                <h4>{item.title}</h4>
                <p className="text text--left">{item.text}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
        </section>
      </main>
  );
}

export default Main;