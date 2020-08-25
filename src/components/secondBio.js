import React from 'react'
import { Container, Heading } from '@hackclub/design-system'

const SecondBio = () => (
  <Container px={3} pt={[3, 4, 5]} pb={[3, 4]}>
    <Heading.h1 color="white" align="center" f={[4, 5, 6]}>
      💖 Happy Birthday, Fatima Ahsen
      ! 🎉
    </Heading.h1>
    <Heading.h2 color="white" align="center" f={[3, 4]} mt={3} regular>
    Wishing you a day filled with happiness and a year filled with joy!
    </Heading.h2>
    <Heading.h4  color="white" align="center" f={[3, 4]} mt={3} regular>
      Here are some of your pictures please take a look.
    </Heading.h4>
  </Container>
)
export default SecondBio


