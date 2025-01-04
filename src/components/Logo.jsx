import { useState, useEffect } from 'preact/hooks';

const Logo = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {!isDarkMode ? (
        <img
          src="/WebFitPro.jpeg"
          alt="WebFitPro Logo"
          className="w-250 h-250 object-contain max-w-full"
        />
      ) : (
        <img
          src="/WebFitProDarkMode.jpeg"
          alt="WebFitPro Dark Logo"
          className="w-250 h-250 object-contain max-w-full"
        />
      )}
    </div>
  );
};

export default Logo;
