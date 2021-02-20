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
                IG
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                FB
              </a>
            )}
            {linkedIn && (
              <a
                href={linkedIn}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                IN
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                TW
              </a>
            )}
            {personal && (
              <a
                href={personal}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                PW
              </a>
            )}
          </div>
        </div>
        <img className={classes.bgEffect} src={require("./bg.png")} />
      </div>
      <div className={classes.cardBody}>
        <div className={classes.name}>{name}</div>
        <div className={classes.position}>{position}</div>
      </div>
    </div>
  )
}

export default TeamCard
