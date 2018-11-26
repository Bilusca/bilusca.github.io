import React, { Component } from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import { BigCard } from '../components/ui/BigCard'
import { NameText } from '../components/ui/NameText'
import { Separator } from '../components/ui/Separator'
import { InfoText } from '../components/ui/InfoText'
import { SocialMedia } from '../components/ui/SocialMedia'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { purpleBlue } from '../components/ui/colors'
import Logo from '../images/icon.png'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rendered: false,
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ rendered: true }), 1000)
  }

  render() {
    if (!this.state.rendered) {
      return (
        <div className="loading">
          <img src={Logo} alt="Logo Lucas Vieira" />
        </div>
      )
    }

    return (
      <Layout>
        <BigCard>
          <Image />
          <Separator />
          <NameText>LUCAS VIEIRA</NameText>
          <InfoText>Front-end developer</InfoText>
          <Separator />
          <SocialMedia>
            <a
              href="https://github.com/Bilusca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={'1.8em'} color={purpleBlue} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-assis-vieira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={'1.8em'} color={purpleBlue} />
            </a>
          </SocialMedia>
        </BigCard>
      </Layout>
    )
  }
}

export default IndexPage
