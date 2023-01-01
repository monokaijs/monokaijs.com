import styles from './Login.module.css';
import {Button, Card, Container, Grid, Input, Spacer, Text} from "@nextui-org/react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.pageOuter}>
      <Grid.Container>
        <Grid md={6}>
          <Container className={styles.loginForm}>
            <h3>
              Sign In
            </h3>
            <div>
              Sign in to explore more features...
            </div>
            <Spacer y={2} />
            <Input label={'Username'} placeholder={'Username'} fullWidth/>
            <Spacer y={1} />
            <Input label={'Username'} placeholder={'Password'} type={'password'} fullWidth/>
            <Spacer y={1} />
            <Button auto>
              Continue <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: 8}}/>
            </Button>
            <Spacer y={2}/>
            <Text small>
              Having trouble logging in? <Link href={'/register'}>Create account</Link> now. Or <Link href={'/recover'}>reset your password</Link>.
            </Text>
          </Container>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default LoginPage;
