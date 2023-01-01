import React from "react";
import {Text} from "@nextui-org/react";
import Link from "next/link";

export const AppLogo = () => {
  return (
    <Link href={'/'}>
      <Text
        size={20}
        css={{
          marginBottom: 0,
          display: "inline"
        }}
        weight={'bold'}
      >
        Monokai
      </Text>
      <Text
        size={20}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
          display: 'inline'
        }}
        weight="bold"
      >
        Js
      </Text>
    </Link>
  )
}
