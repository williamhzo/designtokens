import type { NextPage } from "next";
import { styled } from "../stitches.config";

const Home: NextPage = () => {
  return <Text>setting up stitches hommyyy</Text>;
};

export default Home;

const Text = styled("p", {
  fontSize: "36px",
  fontWeight: "700",
});
