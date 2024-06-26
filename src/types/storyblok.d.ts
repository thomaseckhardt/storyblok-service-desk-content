import {StoryblokStory} from 'storyblok-generate-ts'

export interface LoomVideoStoryblok {
  title: string;
  embedCode: string;
  _uid: string;
  component: "LoomVideo";
  [k: string]: any;
}

export interface LoomVideoPageStoryblok {
  title?: string;
  loomLink?: string;
  transcriptSrt?: string;
  _uid: string;
  component: "LoomVideoPage";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (LoomVideoStoryblok | LoomVideoPageStoryblok | PageStoryblok)[];
  _uid: string;
  component: "Page";
  [k: string]: any;
}
