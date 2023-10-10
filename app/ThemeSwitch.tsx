'use client';

import styles from './ThemeSwitch.module.scss';

import { useEffect, useState } from 'react';

type ThemeValue = 'auto' | 'light' | 'dark';

type InputProps = {
  value: ThemeValue;
};

function Input({ value }: InputProps) {
  return (
    <label>
      <input
        type="radio"
        className={styles.input}
        name="theme"
        value={value}
        defaultChecked={value === 'auto'}
      />
      <span className={styles.label}>{value}</span>
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
    <form
      className={styles.form}
      onChange={(event) => {
        const target = event.target as HTMLInputElement;
        const value = target.value as ThemeValue;
        setTheme(value);
      }}
    >
      <Input value="light" />
      <Input value="auto" />
      <Input value="dark" />
    </form>
  );
}
