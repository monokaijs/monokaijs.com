import React from "react";
import {Navbar, Text, Button, Link} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrightness, faMoon} from "@fortawesome/pro-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {BlogLinks} from "../../configs/app.config";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setTheme} from "../../redux/slices/theme.slice";
import {useRouter} from "next/router";
import {AppLogo} from "../app/Logo";

export const BlogNavbar = () => {
  const dispatch = useAppDispatch();
  const {theme} = useAppSelector(state => state.theme);
  const router = useRouter();
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  }
  const openLogin = async () => openLink('/login');

  const openLink = async (link: string) => router.replace(link);

  return (
    <Navbar
      isBordered={false}
      variant="sticky"
      maxWidth={'sm'}
    >
      <Navbar.Brand>
        <AppLogo/>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {BlogLinks.map(link => (
          <Navbar.Link href={'#'} onClick={() => openLink(link.path)} key={link.path}>{link.title}</Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Link css={{color: '$accent6'}} onClick={switchTheme}>
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon: faBrightness} fontSize={24}/>
        </Link>
        <Link css={{color: '$accent6'}} href={'https://github.com/monokaijs/monokaijs.com/'} target={'_blank'}>
          <FontAwesomeIcon icon={faGithub} fontSize={24}/>
        </Link>
        <Button
          auto size={'md'} css={{backgroundColor: '$gray50', color: '$text'}}
          onClick={openLogin}
        >
          Sign In
        </Button>
      </Navbar.Content>
    </Navbar>
  )
}
