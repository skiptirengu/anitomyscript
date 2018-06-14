'use strict';

const anitomy_native = require('./build/anitomy-build');

function elementEntry(elements, key) {
  if (elements.count(key) > 1) {
    return newArrayFromStringVector(elements.get_all(key));
  } else {
    const val = elements.get(key)
    return val == '' ? undefined : val;
  }
}

function createObjectFromElements(elements) {
  return {
    anime_season: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeSeason),
    season_prefix: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeSeasonPrefix),
    anime_title: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeTitle),
    anime_type: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeType),
    anime_year: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeYear),
    audio_term: elementEntry(elements, anitomy_native.ElementCategory.kElementAudioTerm),
    device_compatibility: elementEntry(elements, anitomy_native.ElementCategory.kElementDeviceCompatibility),
    episode_number: elementEntry(elements, anitomy_native.ElementCategory.kElementEpisodeNumber),
    episode_prefix: elementEntry(elements, anitomy_native.ElementCategory.kElementEpisodePrefix),
    episode_title: elementEntry(elements, anitomy_native.ElementCategory.kElementEpisodeTitle),
    file_checksum: elementEntry(elements, anitomy_native.ElementCategory.kElementFileChecksum),
    file_extension: elementEntry(elements, anitomy_native.ElementCategory.kElementFileExtension),
    file_name: elementEntry(elements, anitomy_native.ElementCategory.kElementFileName),
    language: elementEntry(elements, anitomy_native.ElementCategory.kElementLanguage),
    other: elementEntry(elements, anitomy_native.ElementCategory.kElementOther),
    release_group: elementEntry(elements, anitomy_native.ElementCategory.kElementReleaseGroup),
    release_information: elementEntry(elements, anitomy_native.ElementCategory.kElementReleaseInformation),
    release_version: elementEntry(elements, anitomy_native.ElementCategory.kElementReleaseVersion),
    source: elementEntry(elements, anitomy_native.ElementCategory.kElementSource),
    subtitles: elementEntry(elements, anitomy_native.ElementCategory.kElementSubtitles),
    video_resolution: elementEntry(elements, anitomy_native.ElementCategory.kElementVideoResolution),
    video_term: elementEntry(elements, anitomy_native.ElementCategory.kElementVideoTerm),
    volume_number: elementEntry(elements, anitomy_native.ElementCategory.kElementVolumeNumber),
    volume_prefix: elementEntry(elements, anitomy_native.ElementCategory.kElementVolumePrefix),
    unknown: elementEntry(elements, anitomy_native.ElementCategory.kElementUnknown),
  };
}

function mapVector(vector, cb) {
  const array = [];
  for (let i = 0; i < vector.size(); i++) {
    array.push(
      cb(vector.get(i))
    );
  }
  return array;
}

function newArrayFromElementVector(vector) {
  return mapVector(vector, (val) => createObjectFromElements(val));
}

function newArrayFromStringVector(vector) {
  return mapVector(vector, (val) => val);
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
      parsed = newArrayFromElementVector(parsed);
    } else {
      parsed = anitomy_native._parseFile(file, options);
      parsed = createObjectFromElements(parsed);
    }

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