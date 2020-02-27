import React from "react";
import Layout from "../components/element/layout/Layout";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { ContentDiv } from "../components/element/layout/ContentContainers";
import CheckContacts from "../components/home/CheckContacts";
import SEO from "../components/element/seo/SEO";

const Container = styled(ContentDiv)`
  margin: 4rem auto;
  text-align: left;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const seo = {
  title: "Contact",
  description: null,
};

const Contact = () => {
  return (
    <Layout showSideSvg>
      <SEO {...seo} />
      <Container>
        <Typography variant="h2" align="center" paragraph>Contact</Typography>
        <div>
          <CheckContacts />
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;