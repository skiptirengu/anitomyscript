declare module "anitomyscript" {
  export interface AnitomyResult {
    file_name: string;
    anime_season?: string;
    season_prefix?: string;
    anime_title?: string;
    anime_type?: string;
    anime_year?: string;
    audio_term?: string;
    device_compatibility?: string;
    episode_number?: string;
    episode_number_alt?: string;
    episode_prefix?: string;
    episode_title?: string;
    file_checksum?: string;
    file_extension?: string;
    language?: string;
    other?: string;
    release_group?: string;
    release_information?: string;
    release_version?: string;
    source?: string;
    subtitles?: string;
    video_resolution?: string;
    video_term?: string;
    volume_number?: string;
    volume_prefix?: string;
    unknown?: string;
  }

  function parse(
    input: string | string[]
  ): Promise<AnitomyResult[] | AnitomyResult>;

  export default parse;
}
