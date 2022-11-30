import '@emotion/react';

import type { Theme as AppTheme } from '@/types/emotion';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}
