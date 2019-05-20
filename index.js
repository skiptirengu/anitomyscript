'use strict';

const AnitomyNative = require('./build/anitomyscript');
const anitomy_native = new AnitomyNative();

function elementEntry(elements, key) {
  if (elements.count(key) > 1) {
    return newArrayFromStringVector(elements.get_all(key));
  } else {
    const val = elements.get(key)
    return val == '' ? undefined : val;
  }
}

function createObjectFromElements(elements) {
  const ret = {
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
  elements.delete();
  return ret;
}

function mapVector(vector, cb) {
  const array = [];
  for (let i = 0; i < vector.size(); i++) {
    array.push(
      cb(vector.get(i))
    );
  }
  vector.delete();
  return array;
}

function newArrayFromElementVector(vector) {
  return mapVector(vector, (val) => createObjectFromElements(val));
}

function newArrayFromStringVector(vector) {
  return mapVector(vector, (val) => val);
}

function validateInput(value) {
  if (typeof value !== 'string' || !value) {
    throw new Error('value should be a non empty string');
  }
}

function newStringVector(array, validate) {
  const vec = new anitomy_native.VectorString_t();
  for (let value of array) {
    if (validate) {
      validateInput(value);
    }
    vec.push_back(value);
  }
  return vec;
}

function newAnitomyOptions(options) {
  const anitomyOpts = anitomy_native._createOptions();
  if (typeof options.allowed_delimiters === 'string') {
    anitomyOpts.allowed_delimiters = options.allowed_delimiters;
  }
  if (Array.isArray(options.ignored_strings)) {
    anitomyOpts.ignored_strings = newStringVector(options.ignored_strings, true);
  }
  if (options.parse_episode_number !== undefined) {
    anitomyOpts.parse_episode_number = !!options.parse_episode_number;
  }
  if (options.parse_episode_title !== undefined) {
    anitomyOpts.parse_episode_title = !!options.parse_episode_title;
  }
  if (options.parse_file_extension !== undefined) {
    anitomyOpts.parse_file_extension = !!options.parse_file_extension;
  }
  if (options.parse_release_group !== undefined) {
    anitomyOpts.parse_release_group = !!options.parse_release_group;
  }
  return anitomyOpts;
}

function parse(file, options) {
  let parsed;

  options = newAnitomyOptions(options || {});

  if (Array.isArray(file)) {
    let vector = newStringVector(file, true);
    parsed = anitomy_native._parseArray(vector, options);
    parsed = newArrayFromElementVector(parsed);
    vector.delete();
  } else {
    validateInput(file);
    parsed = anitomy_native._parseFile(file, options);
    parsed = createObjectFromElements(parsed);
  }

  return parsed;
}

module.exports = {
  parse: parse,
  AnitomyNative: AnitomyNative
};