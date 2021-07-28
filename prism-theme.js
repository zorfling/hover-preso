import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

console.log(vscDarkPlus);

export const getLanguage = (className) => {
  const match = /language-(\w*)/.exec(className || 'language-javascript');
  let lang = 'javascript';
  if (match && match.length > 1) {
    lang = match[1];
  }
  return lang;
};

export const pre = (props) => props.children;

export const code = (props) => {
  const language = getLanguage(props.className);
  return (
    <Prism
      language={language}
      style={vscDarkPlus}
      codeTagProps={{
        className: language ? `language-${language}` : undefined,
        style: {
          ...vscDarkPlus['code[class*="language-"]'],
          fontSize: '24px',
          fontFamily: '"Fira Code"',
        },
      }}
      {...props}
    />
  );
};

export default {
  components: {
    pre,
    code,
  },
};
