import React, { useState } from "react";
import classes from "../Recommended.module.css";
import StarEmpty from "../../Profile/Components/Header/StarEmpty.png";
import StarFilled from "../../Profile/Components/Header/StarFilled.png";
const Card = () => {
  const rating = 4;
  const oval = <p className={classes.Oval}></p>;
  return (
    <div className={classes.Rectangle}>
      <img
        className={classes.Profile}
        src="https://lh3.googleusercontent.com/q7uMq230cC5w7L1QvwhMSvZNNWVF67oB71QHCpBfjRYYRkciwINQuobAqf25d0v5roepvHQ3VFrvToc8wKVPg9AoY9-xFE8Hq3W-yh0mnEqAxK0kWLo5egsJbzkxOHGXn-uTk_WXQyIxpC8_svdgMGUitKThbIbNZ9SSUlhiV7ftoPSe-sDW705UmsLYKFVgtt2uh_nvi3-S_9q-L4ehXvLH0RxntfjxpCi7gnT-wLHWo9_kXzcc_1L7btAHF-M8-xJ70qgAkUiLPvJskzhD7lLD_1KBIiNOuhi1dxGQ7iGj56g6AZGYmRpnaUBxfnRcm34UCATUEpLCVni_Dsse7PvwGkRWYSEEqId1qQEOWKGQIr0x3wLKpwCv63QKCIqCufREFw5rmjidlKDUzWcYMKD_M05csE55hZqTLercAPvTNjdD4p_aMGRCimIlDvdkZQPyNubMMvhst5KO85LzFzaP0EcCLj99l7wYat0EhGCfYVwY-yPOJIjN-gAZwsnTkDts-ylrOwA_Pp-mjpAs0ku1tj647caK5vXPLkYvjkNEcMIb9RRCDidioDKO6DK26ZFJqQdbgyML9mpb2BYUI79ZH__HAbzMD6R7LZgxEV3s7WvCkZQlqftvHVBkYWcu7oKppH8DB-0mNAmFe9dLHbain1ThZ5TtK-N4PqmpTHGAEJ1BqPStm6t-oXdF2g=w165-h220-no?authuser=0"
      />
      <div className={classes.Column}>
        <div className={classes.Align}>
          <p className={classes.Name}>Roko</p>
          <div className={classes.Rating}>
            {Array(rating)
              .fill()
              .map((_) => (
                <img src={StarFilled} className={classes.RatingSpace} />
              ))}
            {Array(5 - rating)
              .fill()
              .map((_) => (
                <img src={StarEmpty} className={classes.RatingSpace} />
              ))}
          </div>
        </div>
        <div className={classes.Skills}>
          <div className={classes.RowSyling}>
            {oval}
            <p className={classes.SkillsStyling}>Cooking</p>
          </div>
          <div className={classes.RowSyling}>
            {oval}
            <p className={classes.SkillsStyling}>Fishing</p>
          </div>
          <div className={classes.RowSyling}>
            {oval}
            <p className={classes.SkillsStyling}>English</p>
          </div>
          <div className={classes.RowSyling}>
            {oval}
            <p className={classes.SkillsStyling}>Croatian</p>
          </div>
          <div className={classes.RowSyling}>
            {oval}
            <p className={classes.SkillsStyling}>Cooking</p>
          </div>
        </div>
      </div>
      <div className={classes.Grow}></div>
      <div className={classes.ButtonAndPrice}>
        <button className={classes.Book}>
          <p className={classes.Text}>BOOK</p>
        </button>
        <p className={classes.Price}>Price</p>
      </div>
    </div>
  );
};
export default Card;
