import React from "react"
import classes from "./teamCard.module.css"
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaGithub,
  FaYoutube,
} from "react-icons/fa"

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
    github,
    youtube
  } = cardInfo

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} alt={name} src={`${image}`} />
        <div className={classes.overlay}>
          <div className={classes.social}>
            {instagram && (
              <a
                href={instagram}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-instagram`}
              >
                <FaInstagram />
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-facebook`}
              >
                <FaFacebook />
              </a>
            )}
            {linkedIn && (
              <a
                href={linkedIn}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-linkedin`}
              >
                <FaLinkedin />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-twitter`}
              >
                <FaTwitter />
              </a>
            )}
            {personal && (
              <a
                href={personal}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-website`}
              >
                <FaGlobe />
              </a>
            )}
            {github && (
              <a
                href={github}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-github`}
              >
                <FaGithub />
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}-youtube`}
              >
                <FaYoutube />
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
