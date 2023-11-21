import ClientStatesParser from './client-states-parser/ClientStatesParser';
import { Frontend } from './frontned/Frontend';

// TODO: Make it tree-shakable. It should not Frontend chunks when the debugger is not used.
/**
 * @description It should be a child component of the RecoilRoot component that you want to debug.
 * Your application's process.env.NODE_ENV value should be 'development' to enable the debugger.
 */
export default function RecoilInspector() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div id="recoil-inspector-root">
      <ClientStatesParser />
      <Frontend />
      <link
        rel="stylesheet"
        href="./src/libs/highlight.js/11.7.0/github.min.css"
      />
    </div>
  );
}