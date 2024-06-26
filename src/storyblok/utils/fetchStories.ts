import type { ISbStoriesParams, ISbStoryData } from '@storyblok/astro'
import { useStoryblokApi } from '@storyblok/astro'

// Fetches stories from the Storyblok API.
// https://www.storyblok.com/docs/api/content-delivery/v2#core-resources/stories/retrieve-multiple-stories
export async function fetchStories(
  query: ISbStoriesParams = {},
): Promise<ISbStoryData[] | undefined> {
  const storyblokApi = useStoryblokApi()
  const storyblokEntryVersion =
    import.meta.env.PUBLIC_STORYBLOK_VERSION ?? 'published'

  try {
    const finalQuery = {
      version: storyblokEntryVersion,
      resolve_links: 'url' as const,
      ...query,
    }
    let stories: ISbStoryData[] = []
    if (query.per_page) {
      const result = await storyblokApi.get('cdn/stories', finalQuery)
      stories = result.data.stories
    } else {
      stories = await storyblokApi.getAll('cdn/stories', finalQuery)
    }
    // console.log('fetchStories', finalQuery, stories.length, stories)

    return stories ?? []
  } catch (error) {
    console.error(JSON.stringify(error))
    // return error as ISbError
  }
}

// Fetch a single story from Storyblok
// https://www.storyblok.com/docs/api/content-delivery/v2#core-resources/stories/retrieve-one-story
export async function fetchStory(
  slug: string,
  query = {},
): Promise<ISbStoryData | undefined> {
  const storyblokApi = useStoryblokApi()
  const storyblokEntryVersion =
    import.meta.env.PUBLIC_STORYBLOK_VERSION ?? 'published'

  try {
    const response = await storyblokApi.getStory(slug, {
      version: storyblokEntryVersion,
      ...query,
    })
    return response.data.story
  } catch (error) {
    console.error(error)
  }
}
