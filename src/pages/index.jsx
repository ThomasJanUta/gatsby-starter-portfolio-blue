import React from "react";
import Layout from "../components/element/layout/Layout";
import { HeroAnimated } from "../components/hero/Hero";
import HeroContent from "../components/home/HeroContent";
import SEO from "../components/element/seo/SEO";

const seo = {
  title: "Portfolio",
  description: "Showcase your portfolio in a clean and playful manner.",
};

const IndexPage = () => (
  <Layout>
    <SEO {...seo} />
    <HeroAnimated />
    <HeroContent />
  </Layout>
);

export default IndexPage;
