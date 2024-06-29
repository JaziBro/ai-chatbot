import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button' // Adjust the import path based on your project structure
import { CheckIcon } from '@/svgs/check' // Adjust the import paths for your icons
import { CopyIcon } from '@/svgs/copy'

interface CopyToClipboardProps extends React.HTMLAttributes<HTMLDivElement> {
  onCopy: () => void
  isCopied: boolean
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ className, onCopy, isCopied, ...props }) => (
  <div className={cn('', className)} {...props}>
    <Button
      variant='secondary'
      size='icon'
      className='h-8 w-8'
      onClick={onCopy}
    >
      {isCopied ? (
        <CheckIcon />
      ) : (
        <CopyIcon />
      )}
      <span className='sr-only'>Copy message</span>
    </Button>
  </div>
)

export default CopyToClipboard
