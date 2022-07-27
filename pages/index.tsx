import type { NextPage } from "next";
import { defaultTheme } from "../data/index";
import { styled } from "../stitches.config";

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading>Tailwind tokens</Heading>

      <SubHeading>
        Sensible defaults for your next project&apos;s theme
      </SubHeading>

      <Snippets>
        {defaultTheme.map((tokenSet) => (
          <Pre key={tokenSet.slice(15, 30)}>
            <code>{tokenSet}</code>
          </Pre>
        ))}
      </Snippets>
    </Layout>
  );
};

export default Home;

const Heading = styled("h1", {
  color: "$accentTextContrast",
});

const SubHeading = styled("h2", {
  color: "$accentTextLowContrast",
  fontWeight: 500,
  fontSize: "1.25rem",
});

const Layout = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  textAlign: "center",
  gap: "$spacing$4",
  padding: "$spacing$4",
});

const Snippets = styled("section", {
  display: "grid",
  gridGap: "$spacing$4",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  // add media query for laptop
  // gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
});

const Pre = styled("pre", {
  backgroundColor: "$accentBg",
  color: "$accentText",
  // color: "$accentText",
  padding: "$spacing$4",
  overflow: "auto",
  textAlign: "left",
  borderRadius: "0.5rem",
  maxHeight: "300px",
});
