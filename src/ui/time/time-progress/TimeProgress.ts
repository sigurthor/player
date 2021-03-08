import {
  CSSResultArray,
  html,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';

import { timeProgressStyles } from './time-progress.css';

/**
 * Formats and displays the progression of playback. The output is displayed as
 * `{currentTime}{timeSeparator}{duration}`.
 *
 * ## Tag
 *
 * @tagname vds-time-progress
 *
 * ## CSS Parts
 *
 * @csspart current-time - The `vds-time-current` component.
 * @csspart current-time-root - The `vds-time-current` component's root element (`<time>`).
 * @csspart duration - The `vds-time-duration` component.
 * @csspart duration-root - The `vds-time-duration` component's root element (`<time>`).
 * @csspart separator - The time separator element (`<span>`).
 *
 * ## Examples
 *
 * @example
 * ```html
 * <vds-time-progress
 *   current-time-label="Current time"
 *   duration-label="Duration"
 *   pad-hours
 *   always-show-hours
 * ></vds-time-progress>
 * ```
 *
 * @example
 * ```css
 * vds-time-progress::part(current-time) {
 *   font-size: 16px;
 * }
 *
 * vds-time-progress::part(duration) {
 *   font-size: 16px;
 * }
 *
 * vds-time-progress::part(separator) {
 *   margin: 0 2px;
 *   font-size: 16px;
 * }
 * ```
 */
export class TimeProgress extends LitElement {
  static get styles(): CSSResultArray {
    return [timeProgressStyles];
  }

  /**
   * **ARIA** The `aria-label` property for the current time.
   */
  @property({ attribute: 'current-time-label' })
  currentTimeLabel = 'Current time';

  /**
   * **ARIA** The `aria-label` property for the duration.
   */
  @property({ attribute: 'duration-label' })
  durationLabel = 'Duration';

  /**
   * A string that is used to separate the current time and duration.
   */
  @property({ attribute: 'time-separator' })
  timeSeparator = '/';

  /**
   * Whether the time should always show the hours unit, even if the time is less than
   * 1 hour.
   *
   * @example `20:30` -> `0:20:35`
   */
  @property({ type: Boolean, attribute: 'always-show-hours' })
  alwaysShowHours = false;

  /**
   * Whether the hours unit should be padded with zeroes to a length of 2.
   *
   * @example `1:20:03` -> `01:20:03`
   */
  @property({ type: Boolean, attribute: 'pad-hours' })
  padHours = false;

  render(): TemplateResult {
    return html`
      ${this.renderCurrentTime()}${this.renderTimeSeparator()}${this.renderDuration()}
    `;
  }

  protected renderCurrentTime(): TemplateResult {
    return html`
      <vds-time-current
        label="${this.currentTimeLabel}"
        part="${this.getCurrentTimePartAttr()}"
        ?always-show-hours="${this.alwaysShowHours}"
        ?pad-hours="${this.padHours}"
        exportparts="${this.getCurrentTimeExportPartsAttr()}"
      ></vds-time-current>
    `;
  }

  protected getCurrentTimePartAttr(): string {
    return 'current-time';
  }

  protected getCurrentTimeExportPartsAttr(): string {
    return 'root: current-time-root';
  }

  protected renderDuration(): TemplateResult {
    return html`
      <vds-time-duration
        label="${this.durationLabel}"
        part="${this.getDurationPartAttr()}"
        ?always-show-hours="${this.alwaysShowHours}"
        ?pad-hours="${this.padHours}"
        exportparts="${this.getDurationExportPartsAttr()}"
      ></vds-time-duration>
    `;
  }

  protected getDurationPartAttr(): string {
    return 'duration';
  }

  protected getDurationExportPartsAttr(): string {
    return 'root: duration-root';
  }

  protected renderTimeSeparator(): TemplateResult {
    return html`
      <span part="${this.getTimeSeparatorPartAttr()}">
        ${this.timeSeparator}
      </span>
    `;
  }

  protected getTimeSeparatorPartAttr(): string {
    return 'separator time-separator';
  }
}