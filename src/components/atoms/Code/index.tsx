import React from 'react';
import clsx from 'clsx';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const exampleCode = `
import React, { FC } from 'react';

const ExampleComponent: FC = ({ children }) => {

  return (
    <div>
      {children}
    </div>
  );
};

export default ExampleComponent;

`.trim();

const Code = () => (
  <Highlight {...defaultProps} code={exampleCode} language="tsx" theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={clsx('text-left m-0 p-3 leading-5 rounded', className)}
        style={style}
      >
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className="inline-block w-4 opacity-30 [user-select: none]">
              {i + 1}
            </span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default Code;
