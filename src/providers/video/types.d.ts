import {
	MediaProviderElementStorybookArgs,
	MediaProviderElementStorybookArgTypes
} from '../../media/index.js';
import {
	StorybookArgs,
	StorybookArgTypes
} from '../../shared/storybook/index.js';
import {
	Html5MediaElementEngine,
	Html5MediaElementMethods,
	Html5MediaElementProps
} from '../html5/index.js';
import { VideoPresentationControllerHost } from './presentation.js';

export interface VideoElementProps extends Html5MediaElementProps {
	/**
	 * 🧑‍🔬 **EXPERIMENTAL:** Whether the browser should automatically toggle picture-in-picture mode as
	 * the user switches back and forth between this document and another document or application.
	 */
	autoPiP?: boolean;

	/**
	 * 🧑‍🔬 **EXPERIMENTAL:** Prevents the browser from suggesting a picture-in-picture context menu or
	 * to request picture-in-picture automatically in some cases.
	 *
	 * @spec https://w3c.github.io/picture-in-picture/#disable-pip
	 */
	disablePiP?: boolean;

	readonly engine: HTMLVideoElement;

	/**
	 * A URL for an image to be shown while the video is downloading. If this attribute isn't
	 * specified, nothing is displayed until the first frame is available, then the first frame is
	 * shown as the poster frame.
	 */
	poster?: string;
}

export type VideoElementMethods = Html5MediaElementMethods;

export type VideoProvider = VideoElementProps &
	VideoElementMethods &
	VideoPresentationControllerHost;

export type VideoElementStorybookArgTypes =
	StorybookArgTypes<VideoElementProps>;

export type VideoElementStorybookArgs = MediaProviderElementStorybookArgs &
	StorybookArgs<VideoElementProps>;