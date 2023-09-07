'use client';

import { useEffect, useState } from 'react';

type ThemeValue = 'auto' | 'light' | 'dark';

type InputProps = {
  value: ThemeValue;
  currentValue: ThemeValue;
  setTheme: (value: ThemeValue) => void;
};

function Input({ value, setTheme, currentValue }: InputProps) {
  return (
    <label>
      <input
        type="radio"
        name="theme"
        value={value}
        checked={value === currentValue}
        onChange={() => setTheme(value)}
      />
      {value}
    </label>
  );
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeValue>('auto');

  useEffect(
    () => document.firstElementChild?.setAttribute('data-theme', theme),
    [theme]
  );

  return (
    <fieldset>
      <legend>Theme</legend>

      <Input value="light" currentValue={theme} setTheme={setTheme} />
      <Input value="auto" currentValue={theme} setTheme={setTheme} />
      <Input value="dark" currentValue={theme} setTheme={setTheme} />
    </fieldset>
  );
}
