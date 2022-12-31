import {AuthorBio} from "../components/app/AuthorBio";
import {Card, Text} from "@nextui-org/react";


export default function Home() {
  return (
    <div>
      <AuthorBio/>
      <div>
        <Text h3 weight={'bold'}>
          Spotlight Projects
        </Text>
      </div>
      <Card
        isHoverable variant={'bordered'}
        isPressable
        css={{
          background: 'transparent',
          marginTop: '24px'
        }}
      >
        <Card.Body>
          <Text>A pressable card.</Text>
        </Card.Body>
      </Card>
    </div>
  )
}
