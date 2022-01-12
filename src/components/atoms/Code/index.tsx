import React from 'react';
import { ICodeProps } from './types';
import clsx from 'clsx';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';

const Code = ({ language = 'tsx', snippet = '' }: ICodeProps) => (
  <Highlight
    {...defaultProps}
    code={snippet.trim()}
    language={language}
    theme={theme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={clsx(
          'text-left m-0 p-3 leading-5 rounded overflow-y-scroll',
          className
        )}
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
