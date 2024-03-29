# Recoil Inspector 🔍 &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Ever had a hard time debugging a Recoil state update bug? <br/>
Try Recoil Inspector to visualize which components are using which states, and get to the source of the bug quickly. <br/>
It supports both Next.js 13 and 14.

## Contents

- [Demo](#demo)
- [Features](#features)
- [Installation Guide](#installation-guide)
- [Acknowledgement](#acknowledgement)

<a name="demo"></a>

## Demo 📼

https://github.com/PeterByun/recoil-inspector-project/assets/47588056/74eff88e-adf3-4703-8156-2e3d754c2d7e

<a name="features"></a>

## Features ⚡️

- <strong>State and Components Visualization ⚛️</strong>
  - See which components are referencing which Recoil states and props.
- <strong>State Changes History ⏺</strong>
  - See how states have been changed over time. You can compare two changes to see exactly which properties have been updated, deleted, or added.
- <strong>Enabled Only On Development Mode </strong>
  - It is activated only when `process.env.NODE_ENV` is `development`, and to avoid increasing your application's bundle size, it is lazily loaded only when enabled.

<a name="installation-guide"></a>

## Installation Guide 💿

1. Install the [React Devtool extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US&utm_source=ext_sidebar) if you have not already.

2. Install the NPM package.
   ```zsh
   npm install recoil-inspector
   ```
3. Import the package in your entry point like the below examples.

### Next.js App Router

```tsx
// layout.ts
// NOTE: "use client" will not be needed in the future. We will keep the "use client" directive in the RecoilInspector component.
'use client';

import { RecoilInspector } from 'recoil-inspector';

if (process.env.NODE_ENV === 'development') {
  import('recoil-inspector/public/index.css');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <RecoilRoot>
        <body>
          <RecoilInspector />
          {children}
        </body>
      </RecoilRoot>
    </html>
  );
}
```

### Next.js Pages

```tsx
import { RecoilInspector } from 'recoil-inspector';

if (process.env.NODE_ENV === 'development') {
  import('recoil-inspector/public/index.css');
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      {children}
      <RecoilInspector />
    </RecoilRoot>
  );
}
```

<a name="acknowledgement"></a>

## Acknowledgement

This project is inspired by many other great devtools, including Redux DevTools, React Developer Tools, Recoil Dev Tools, and Recoilize.
