/** @see https://www.gatsbyjs.org/docs/ssr-apis/ */
import React from "react";
import RootLayout from "./src/components/element/layout/RootLayout";

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;
