'use strict';

const anitomy_native = require('./build/anitomy-build');

function createObjectFromElements(elements) {
  // "anime_season", elements, anitomy:: kElementAnimeSeason
  // "season_prefix", elements, anitomy:: kElementAnimeSeasonPrefix
  // "anime_title", elements, anitomy:: kElementAnimeTitle
  // "anime_type", elements, anitomy:: kElementAnimeType
  // "anime_year", elements, anitomy:: kElementAnimeYear
  // "audio_term", elements, anitomy:: kElementAudioTerm
  // "device_compatibility", elements, anitomy:: kElementDeviceCompatibility
  // "episode_number", elements, anitomy:: kElementEpisodeNumber
  // "episode_number_alt", elements, anitomy:: kElementEpisodeNumberAlt
  // "episode_prefix", elements, anitomy:: kElementEpisodePrefix
  // "episode_title", elements, anitomy:: kElementEpisodeTitle
  // "file_checksum", elements, anitomy:: kElementFileChecksum
  // "file_extension", elements, anitomy:: kElementFileExtension
  // "file_name", elements, anitomy:: kElementFileName
  // "language", elements, anitomy:: kElementLanguage
  // "other", elements, anitomy:: kElementOther
  // "release_group", elements, anitomy:: kElementReleaseGroup
  // "release_information", elements, anitomy:: kElementReleaseInformation
  // "release_version", elements, anitomy:: kElementReleaseVersion
  // "source", elements, anitomy:: kElementSource
  // "subtitles", elements, anitomy:: kElementSubtitles
  // "video_resolution", elements, anitomy:: kElementVideoResolution
  // "video_term", elements, anitomy:: kElementVideoTerm
  // "volume_number", elements, anitomy:: kElementVolumeNumber
  // "volume_prefix", elements, anitomy:: kElementVolumePrefix
  // "unknown", elements, anitomy:: kElementUnknown
  return {};
}

function newArrayFromElementVector(vector) {
  const array = [];
  for (let i = 0; i < vector.size(); i++) {
    array.push(
      createObjectFromElements(vector.get(i))
    );
  }
  return array;
}

function newStringVector(array, validate) {
  const vec = new anitomy_native.VectorString_t();
  for (let value of array) {
    if (validate && typeof value !== 'string') {
      throw new Error('value should be a string');
    } else {
      vec.push_back(value);
    }
  }
  return vec;
}

function newAnitomyOptions(options) {
  const anitomyOpts = anitomy_native._createOptions();
  anitomyOpts.allowed_delimiters = typeof options.allowed_delimiters === 'string' ? options.allowed_delimiters : anitomyOpts.allowed_delimiters;
  anitomyOpts.ignored_strings = Array.isArray(options.ignored_strings) ? newStringVector(options.ignored_strings, true) : anitomyOpts.ignored_strings;
  anitomyOpts.parse_episode_number = options.parse_episode_number !== undefined ? !!options.parse_episode_number : anitomyOpts.parse_episode_number;
  anitomyOpts.parse_episode_title = options.parse_episode_title !== undefined ? !!options.parse_episode_title : anitomyOpts.parse_episode_title;
  anitomyOpts.parse_file_extension = options.parse_file_extension !== undefined ? !!options.parse_file_extension : anitomyOpts.parse_file_extension;
  anitomyOpts.parse_release_group = options.parse_release_group !== undefined ? !!options.parse_release_group : anitomyOpts.parse_release_group;
  return anitomyOpts;
}

function parse(file, options, cb) {
  return new Promise((resolve) => {
    let param = file;
    let parsed;

    options = newAnitomyOptions(options || {});

    if (Array.isArray(file)) {
      parsed = anitomy_native._parseArray(newStringVector(file, true), options);
    } else {
      parsed = anitomy_native._parseFile(file, options);
    }

    parsed = newArrayFromElementVector(parsed);
    resolve(parsed);

    if (cb) {
      cb(parsed);
    }
  });
}

module.exports = {
  parse: parse,
  AnitomyNative: anitomy_native
};