import React from "react";
import {Navbar, Text, Button, Link} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/pro-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {BlogLinks} from "../../configs/app.config";

export const BlogNavbar = () => {
  return (
    <Navbar
      isBordered={false}
      variant="sticky"
      maxWidth={'sm'}
    >
      <Navbar.Brand>
        <div>
          Logo
        </div>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {BlogLinks.map(link => (
          <Navbar.Link href={link.path}>{link.title}</Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Link css={{color: '$accent6'}}>
          <FontAwesomeIcon icon={faMoon} fontSize={24}/>
        </Link>
        <Link css={{color: '$accent6'}}>
          <FontAwesomeIcon icon={faGithub} fontSize={24}/>
        </Link>
        <Button auto size={'md'} css={{backgroundColor: '$gray50', color: '$text'}}>
          Sign In
        </Button>
      </Navbar.Content>
    </Navbar>
  )
}
