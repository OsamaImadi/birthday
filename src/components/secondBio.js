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
    Baaqi yahan tu ne jo wish krna hai woh likh dun ga.
    Plus pictures ko jo bhi caption deni hain woh bta den
    warna isi caption k saath deploy hogi,
    Adjacent pics ki caption word count same honi chahye.
    <br/>
      Here are some of your pictures please take a look.
    </Heading.h4>
  </Container>
)
export default SecondBio


