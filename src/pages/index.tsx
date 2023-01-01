import {AuthorBio} from "../components/app/AuthorBio";
import {Card, Grid, Text} from "@nextui-org/react";
import { SpotlightProjects } from "../configs/app.config";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/pro-solid-svg-icons";


export default function Home() {
  let div = <>
    <div>
      <AuthorBio/>
      <div className={styles.sectionHeader}>
        <Text h3 weight={'bold'}>
          Spotlight Projects
        </Text>
        <Link href={'/projects'}>
          <Text small css={{color: '$accents6'}}>
            View all projects
            <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: 8}}/>
          </Text>
        </Link>
      </div>
      <Grid.Container gap={2}>
        {SpotlightProjects.map(project => (
          <Grid xs={6} key={project.name}>
            <Card
              isHoverable variant={'bordered'}
              isPressable
              css={{
                background: 'transparent',
              }}
              borderWeight={'bold'}
            >
              <Card.Body className={styles.projectCard}>
                <Text h5>{project.name}</Text>
                <Text
                  small
                  css={{
                    color: '$accents7'
                  }}
                >
                  {project.description}
                </Text>
                {project.icon && (
                  <img src={project.icon} alt={project.name} className={styles.projectFigure}/>
                )}
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  </>;
  return div
}
