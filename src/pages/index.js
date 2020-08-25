import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
  Container,
  Box,
  Card,
  Heading,
  Text,
  LargeButton
} from '@hackclub/design-system'
import Body from '../components/Body'
import Cards from '../components/Cards'
import Bio from '../components/Bio'
import Example from '../components/Textbox'

Card.a = Card.withComponent('article')

export default () => (
  <Box.main align="center">
    <Helmet title={`Hello, Fatima Ahsen!`} />
    
    <Bio /> 
    <Example /> 
  </Box.main>
)

