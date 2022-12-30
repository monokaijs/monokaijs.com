import styles from './AuthorBio.module.css';
import Image from "next/image";
import {Divider} from "../../shared/Divider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faGitlab, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeCircle} from "@fortawesome/pro-solid-svg-icons";
import {socialLinks} from "../../../configs/personal.config";

export const AuthorBio = () => {
  return (
    <div style={{margin: '16px 0'}}>
      <Divider/>
      <div className={styles.authorBio}>

        <div className={styles.story}>
          <p>
            Hello there!<br/>
          </p>
          <p>
            I'm Nguyen Anh Nhan, technically MonokaiJs.<br/>
            <br/>
            Currently working at some companies as Full-stack Web Developer, DevOps Engineer, Mobile Developer & Software
            Architect. Truly inspired by technologies, I'm working in Software Engineering as one of my hobbies.<br/>
            I also play some music instruments in my free-time (Guitar, piano, flute).
          </p>
          <p>
            I have PS5 and Nintendo Switch, but League of Legends is the only game that I interested.
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map(sLink => (
              <a className={styles.refLink} href={sLink.url}>
                <FontAwesomeIcon icon={sLink.icon}/> {sLink.title}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.avatar}>
          <Image
            src={require('../../../assets/img/monokaijs.jpg')}
            alt={'MonokaiJs'}
          />
        </div>

      </div>
      <Divider/>
    </div>
  )
}
