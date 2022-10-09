import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface useBooleanReturnType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export const useBoolean = (defaultValue?: boolean): useBooleanReturnType => {
  const [value, setValue] = useState(!!defaultValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, on, off, toggle };
};
