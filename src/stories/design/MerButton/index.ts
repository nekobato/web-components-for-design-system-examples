import { LitElement, html, property, customElement } from "lit-element";
import style from "./style.pcss";

@customElement("mer-button")
export class MerButton extends LitElement {
  @property({ type: String }) text = "";

  render() {
    return html`
      <style>
        ${style}
      </style>
      <div class="mer-button">
        <slot class="slot" name="button"></slot>
      </div>
    `;
  }
}
