import React from 'react'
import Layout from '../components/layout'
import { BigCard } from '../components/ui/BigCard';
import { NameText } from '../components/ui/NameText';
import { InfoText } from '../components/ui/InfoText';

const NotFoundPage = () => (
  <Layout>
    <BigCard>
      <NameText>NOT FOUND</NameText>
      <InfoText>You just hit a route that doesn&#39;t exist... the sadness.</InfoText>
    </BigCard>
  </Layout>
)

export default NotFoundPage
