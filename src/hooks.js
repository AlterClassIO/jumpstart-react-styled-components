import { useState, useEffect, useCallback, useRef } from 'react';

export function useEventListener(
  eventType = '',
  listener = () => null,
  target = window,
  options = null
) {
  const savedListener = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    const eventListener = event => savedListener.current(event);

    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
}

export function useMediaQuery(queries = [], values = [], defaultValue) {
  const mediaQueryList = queries.map(q => window.matchMedia(q));
  const getValue = useCallback(() => {
    const index = mediaQueryList.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [mediaQueryList, values, defaultValue]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryList.forEach(mql => mql.addEventListener('change', handler));

    return () =>
      mediaQueryList.forEach(mql => mql.removeEventListener('change', handler));
  }, [getValue, mediaQueryList]);

  return value;
}

export function useLocalStorage(key = '', initialValue = '') {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = newState => {
    try {
      const newStateValue =
        typeof newState === 'function' ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  };

  return [state, setLocalStorageState];
}

export function useDarkMode() {
  const preferDarkMode = useMediaQuery(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );

  const [enabled, setEnabled] = useLocalStorage('dark-mode', preferDarkMode);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [enabled]);

  return [enabled, setEnabled];
}
