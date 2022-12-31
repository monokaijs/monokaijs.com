import styles from './AuthorBio.module.css';
import {Link, Text} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {socialLinks} from "../../../configs/personal.config";

export const AuthorBio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div>
          <Text
            h1
            size={60}
            css={{
              marginBottom: 0,
              display: "inline"
            }}
          >
            Monokai
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              display: 'inline'
            }}
            weight="bold"
          >
            Js
          </Text>
        </div>
        <Text
          css={{
            color: '$accents7'
          }}
          weight={'medium'}
          size={'$xl'}
        >
          Just an IT enthusiast. See me on social networks.
        </Text>
        <div className={'social-links'} style={{marginTop: 16}}>
          {socialLinks.map(link => (
            <Link
              href={link.url}
              key={link.url}
              css={{
                color: '$accents6',
                marginRight: 16
              }}
              className={styles.socialLink}
              target={"_blank"}
            >
              <FontAwesomeIcon icon={link.icon}/>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.avatarContainer}>
        <Image className={styles.avatar} src={require('../../../assets/img/monokaijs.jpg')} alt={'@monokaijs'}/>
      </div>
    </div>
  )
}

// <div className={styles.authorBio}>
//   <div className={styles.avatar}>
//     <Image
//       src={require('../../../assets/img/monokaijs.jpg')}
//       alt={'MonokaiJs'}
//     />
//   </div>
//   <div className={styles.story}>
//     <p>
//       Hello there!<br/>
//     </p>
//     <p>
//       I'm Nguyen Anh Nhan, technically MonokaiJs.<br/>
//       <br/>
//       Currently working at some companies as Full-stack Web Developer, DevOps Engineer, Mobile Developer & Software
//       Architect. Truly inspired by technologies, I'm working in Software Engineering as one of my hobbies.<br/>
//       I also play some music instruments in my free-time (Guitar, piano, flute).
//     </p>
//     <p>
//       I have PS5 and Nintendo Switch, but League of Legends is the only game that I interested.
//     </p>
//     <div className={styles.socialLinks}>
//       {socialLinks.map((sLink, index) => (
//         <a className={styles.refLink} href={sLink.url} key={index}>
//           <FontAwesomeIcon icon={sLink.icon}/> {sLink.title}
//         </a>
//       ))}
//     </div>
//   </div>
// </div>
