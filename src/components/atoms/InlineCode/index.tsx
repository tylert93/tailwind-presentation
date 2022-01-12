import React, { FC } from 'react';

const InlineCode: FC = ({ children }) => (
  <code className="text-base bg-gray-200 py-0.5 px-1 mx-0.5 rounded-sm">
    {children}
  </code>
);

export default InlineCode;
