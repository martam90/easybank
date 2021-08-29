import React from 'react';
import './style.scss';
import sectionIcons from '../../assets/sectionIcons';
import articleItems from '../../assets/articleItems';


const Main = () => {
  return (
      <main>
        <section className="section__hero"></section>

        <section className="section__details">
          <h1>Next generation digital banking</h1>
          <p className="text">Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.
          </p>
          <a className="cta" href="#">Request invite</a>
        </section>

        <section className="section__info">
          <h2>Why choose Easybank?</h2>
          <p className="text">We leverage Open Banking to turn your bank account into your financial hub. Control 
          your finances like never before.
          </p>
          <div>
          {sectionIcons.map((item) => (
            <div className="section__item" key={item.id}>
              <img className="section__icons" src={item.icon} alt={item.alt}></img>
              <h3>{item.heading}</h3>
              <p className="text">{item.text}</p>
            </div>
          ))}
          </div>
        </section>

        <section className="section__articles">
          <h2>Latest articles</h2>
          {articleItems.map((item) => (
            <div className="section__articles--item" key={item.id}>
            <img className="section__articles--image" src={item.image} alt={item.alt}></img>
            <div className="section__articles--text">
              <span className="section__articles--author">{item.author}</span>
              <h4>{item.title}</h4>
              <p className="text text--left">{item.text}</p>
            </div>
          </div>
          ))}
        </section>
      </main>
  );
}

export default Main;