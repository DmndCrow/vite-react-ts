import { useState } from 'react';

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <p>Settings</p>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

export default Settings;
