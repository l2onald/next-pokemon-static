import { Image, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>
        
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt="App Icon"
            width={70}
            height={70}
        />

        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>
        </NextLink>
        
        <Spacer css={{ flex: 1 }} />

        <NextLink href="/favorites" passHref legacyBehavior>
          <Link css={{marginRight: 10}}>
            <Text color="white">Favorites</Text>
          </Link>
        </NextLink>


    </div>
  )
}
