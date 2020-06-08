import { addStyle } from "@tomato-js/element";
export function addCss(cssStr: string) {
  addStyle(cssStr);
}

export function openEdit() {
  document.body.contentEditable = 'true';
}
