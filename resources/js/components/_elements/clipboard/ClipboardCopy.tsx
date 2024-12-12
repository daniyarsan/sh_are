import { CopyToClipboard } from 'react-copy-to-clipboard';
import React from 'react';
import { showToast } from '@/lib/showToast';

type ClipboardCopyProps = {
  text: string;
  children?: React.ReactNode;
};
const ClipboardCopy = ({ text, children }: ClipboardCopyProps) => {
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        showToast('success', <span>Скопировано</span>);
      }}>
      {children}
    </CopyToClipboard>
  );
};

export default ClipboardCopy;
