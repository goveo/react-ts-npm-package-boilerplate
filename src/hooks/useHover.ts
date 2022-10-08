import { RefObject, useEffect } from 'react';

import { useBoolean } from './useBoolean';

export const useHover = (ref: RefObject<HTMLElement>) => {
  const { value, on, off } = useBoolean(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', on);
      node.addEventListener('mouseout', off);

      return () => {
        node.removeEventListener('mouseover', on);
        node.removeEventListener('mouseout', off);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return { ref, isHovered: value };
};
