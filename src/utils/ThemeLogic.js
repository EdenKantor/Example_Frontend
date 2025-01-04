// Utility function to handle theme toggling and persistence
export const initializeTheme = () => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Function to toggle the theme
  export const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
  
    // Save the theme preference to localStorage
    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };
  