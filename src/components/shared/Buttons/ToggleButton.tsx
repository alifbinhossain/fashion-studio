import React from 'react';
import clsx from 'clsx';
import * as BsIcons from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import ToggleButtonTooltip from './ToggleButtonTooltip';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  duration: 2,
};

type Colors =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

type Sizes = 'sm' | 'md' | 'lg';

const ToggleButton: React.FC<{
  light?: Colors;
  dark?: Colors;
  size?: Sizes;
}> = ({ light = 'amber', dark = 'indigo', size = 'lg' }) => {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    if (theme == 'light') {
      setTheme('dark');
    } else if (theme == 'dark') {
      setTheme('light');
    }
  };

  if (!theme) return null;

  return (
    <button
      onClick={handleToggle}
      className={clsx(
        `group  rounded-full  relative  flex border-[1px] shadow-md`,
        size === 'sm'
          ? 'p-[2px] w-12'
          : size === 'md'
          ? 'p-1 w-[60px]'
          : size === 'lg'
          ? 'p-1 w-20'
          : '',
        theme === 'light'
          ? `justify-start bg-${light}-200 border-${light}-400`
          : `justify-end bg-${dark}-200 border-${dark}-400`
      )}
    >
      {/* Comment this out to enable tooltip  */}
      <div className='hidden group-hover:block'>
        <ToggleButtonTooltip theme={theme} dark={dark} light={light} />
      </div>

      <motion.div
        layout
        transition={spring}
        className={clsx(
          '  flex items-center justify-center rounded-full shadow-2xl',

          size === 'sm'
            ? 'h-5 w-5 p-1'
            : size === 'md'
            ? 'h-6 w-6 p-1'
            : size === 'lg'
            ? 'h-8 w-8 p-[6px]'
            : '',
          theme === 'light'
            ? `bg-${light}-600 bg-opacity-50 text-${light}-900 `
            : `bg-${dark}-600 bg-opacity-50 text-${dark}-900 `
        )}
      >
        {theme == 'light' ? <BsIcons.BsSun /> : <BsIcons.BsMoonStars />}
      </motion.div>
    </button>
  );
};

export default ToggleButton;
