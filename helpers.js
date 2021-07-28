import React from 'react';
import { LiveCode as LiveCodeBase } from 'mdx-deck-live-code';

export const LiveCode = (editorProps, ...props) => (
  <LiveCodeBase
    editorProps={{
      onKeyDown: (e) => e.nativeEvent.stopImmediatePropagation(),
      ...editorProps,
    }}
    {...props}
  />
);
