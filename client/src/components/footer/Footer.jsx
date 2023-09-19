/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.column}>
          <h2>FAQ</h2>
          <span>Ce que nous vendons</span>
          <span>Comment pouvez-vous commande</span>
          <span>Quelle devise nous acceptons</span>
          <span>Politique de confidentialité</span>
        </div>
        <div className={classes.column}>
          <h2>About</h2>
          <p className={classes.aboutParagraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae magnam molestias dolorem praesentium itaque rem, iste,
            distinctio, voluptate doloribus corporis omnis facere dolores
            reiciendis! Debitis maxime necessitatibus assumenda molestiae ex.
          </p>
        </div>
        <div className={classes.column}>
          <h2>Contact</h2>
          <div className={classes.icons}>
            <a href="#"><AiOutlineInstagram /></a>
            <a href="#"><AiOutlineFacebook /></a>
            <a href="#"><AiOutlineWhatsApp /></a>
            <a href="#"><AiOutlineTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;