// @flow

declare module CSSModule { // eslint-disable-line
  declare var exports: { [key: string]: string };
  declare export default typeof exports;
}
