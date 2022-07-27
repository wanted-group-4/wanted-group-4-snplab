import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void,
) => {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as Node;

    if (ref.current && !ref.current.contains(target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick as EventListener);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick as EventListener);
    };
  });
};
