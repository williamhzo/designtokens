import type { NextPage } from "next";
import { defaultTheme } from "../data/index";

const Home: NextPage = () => {
  const { colors, screens, spacing } = defaultTheme;

  console.log("spacing", spacing);

  return (
    <div>
      <h1>tailwind tokens!</h1>

      <a
        href="https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js"
        target="_blank"
        rel="noreferrer"
      >
        tailwindcss default theme repository
      </a>

      {/* see https://ped.ro/writing/code-blocks-but-better !! */}
      <pre>
        <code>{screens.test}</code>
      </pre>

      <pre>
        <code>{JSON.stringify(spacing)}</code>
      </pre>

      {/* {Object.entries(spacing).map(([key, value]) => (
        <p key={value}>
          {key} - {value}
        </p>
      ))}

      {Object.entries(colors).map(([key, value]) => {
        if (typeof value === "string") {
          return (
            <p key={value}>
              {key} - {value}
            </p>
          );
        } else {
          return Object.entries(value).map(([nestedKey, nestedValue]) => (
            <p key={nestedValue}>
              {key} - {nestedKey} - {nestedValue}
            </p>
          ));
        }
       })} */}
    </div>
  );
};

export default Home;
