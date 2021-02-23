import React from "react"
import classes from "./teamCard.module.css"

const TeamCard = ({ cardInfo }) => {
  const {
    name,
    image,
    position,
    linkedIn,
    instagram,
    twitter,
    facebook,
    personal,
  } = cardInfo

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} alt={name} src={image} />
        <div className={classes.overlay}>
          <div className={classes.social}>
            {instagram && (
              <a
                href={instagram}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./ig.png")}
                  alt="instagram"
                  className={classes.icon}
                />
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./fb.png")}
                  alt="facebook"
                  className={classes.icon}
                />
              </a>
            )}
            {linkedIn && (
              <a
                href={linkedIn}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./ln.png")}
                  alt="linkedIn"
                  className={classes.icon}
                />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./tw.png")}
                  alt="twitter"
                  className={classes.icon}
                />
              </a>
            )}
            {personal && (
              <a
                href={personal}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./pw.png")}
                  alt="personal"
                  className={classes.icon}
                />
              </a>
            )}
          </div>
        </div>
        <img
          className={classes.bgEffect}
          alt="dotted-effect"
          src={require("./bg.png")}
        />
      </div>
      <div className={classes.cardBody}>
        <div className={classes.name}>{name}</div>
        <div className={classes.position}>{position}</div>
      </div>
    </div>
  )
}

export default TeamCard
