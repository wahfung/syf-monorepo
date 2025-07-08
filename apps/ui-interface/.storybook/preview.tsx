import type { Preview } from "@storybook/react";
import React from "react";
import "@syf/syf-ui/dist/index.css";
import { Theme } from "@syf/syf-ui";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
