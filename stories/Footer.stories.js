import { createFooter } from './Footer';
// import { addCodeExample } from './helpers/code-example'

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Footer',
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createFooter({ label, ...args });
};

export const Primary = Template.bind({});