import { Download as DownloadIcon } from 'lucide-react';

interface DownloadButtonProps {
  text: string;
  href: string;
  className?: string;
}

const Download = ({ text, href, className }: DownloadButtonProps) => {
  return (
    <a 
      href={href}
      download
      className={`inline-flex items-center gap-2 transition-colors ${className}`}
    >
      <DownloadIcon size={18} />
      <span>{text}</span>
    </a>
  );
};

export default Download;