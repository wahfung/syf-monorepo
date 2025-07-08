import React, { createContext, useContext, ReactNode } from 'react';
import { Theme } from '@radix-ui/themes';

// 创建上下文来跟踪主题是否已经提供
const ThemeContext = createContext<boolean>(false);

interface ThemeProviderProps {
  children: ReactNode;
}

// 内部主题提供者，确保只有一个 Theme 实例
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isThemeProvided = useContext(ThemeContext);
  
  // 如果已经有 Theme 了，直接返回 children
  if (isThemeProvided) {
    return <>{children}</>;
  }
  
  // 否则提供 Theme
  return (
    <ThemeContext.Provider value={true}>
      <Theme>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

// Hook 来检查是否在 Theme 上下文中
export const useTheme = () => {
  return useContext(ThemeContext);
};