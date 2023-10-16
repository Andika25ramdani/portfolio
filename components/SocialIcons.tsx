'use client';
import { SOCIAL_INFO } from '@/constants/contactLinks';
import IconButton from './IconButton';

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_INFO.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
