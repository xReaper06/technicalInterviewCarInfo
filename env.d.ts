/// <reference types="vite/client" />

import { QDialogSlots } from 'quasar';

declare module 'quasar' {
  interface QDialogSlots {
    content?: () => JSX.Element | JSX.Element[];
    footer?: () => JSX.Element | JSX.Element[];
  }
}