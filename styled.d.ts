import 'styled-components';
import { ThemeDB } from './src/interfaces/db';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDB {}
}
