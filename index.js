'use strict';

let AnitomyNative = require('./build/anitomyscript');
let anitomyModule = undefined;

module.exports = function (file) {
  if (!Array.isArray(file) && typeof file !== 'string') {
    return Promise.reject(new Error('Input must be either an Array or a string'));
  }

  if (anitomyModule) {
    return Promise.resolve(parse(file));
  }

  return new Promise((resolve, reject) => {
    try {
      AnitomyNative().then((actualModule) => {
        anitomyModule = actualModule;
        resolve(parse(file));
      });
    } catch (err) {
      reject(err);
    }
  });
}

function parse(file) {
  if (Array.isArray(file)) {
    const vector = mapArray(file);
    const result = mapVector(anitomyModule.parseMultiple(vector));
    vector.delete();
    return result.map((each) => elements(each));
  } else {
    return elements(anitomyModule.parseSingle(file));
  }
}

function elements(elements) {
  const returnObj = {
    anime_season: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeSeason),
    season_prefix: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeSeasonPrefix),
    anime_title: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeTitle),
    anime_type: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeType),
    anime_year: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeYear),
    audio_term: elementEntry(elements, anitomyModule.ElementCategory.kElementAudioTerm),
    device_compatibility: elementEntry(elements, anitomyModule.ElementCategory.kElementDeviceCompatibility),
    episode_number: elementEntry(elements, anitomyModule.ElementCategory.kElementEpisodeNumber),
    episode_prefix: elementEntry(elements, anitomyModule.ElementCategory.kElementEpisodePrefix),
    episode_title: elementEntry(elements, anitomyModule.ElementCategory.kElementEpisodeTitle),
    file_checksum: elementEntry(elements, anitomyModule.ElementCategory.kElementFileChecksum),
    file_extension: elementEntry(elements, anitomyModule.ElementCategory.kElementFileExtension),
    file_name: elementEntry(elements, anitomyModule.ElementCategory.kElementFileName),
    language: elementEntry(elements, anitomyModule.ElementCategory.kElementLanguage),
    other: elementEntry(elements, anitomyModule.ElementCategory.kElementOther),
    release_group: elementEntry(elements, anitomyModule.ElementCategory.kElementReleaseGroup),
    release_information: elementEntry(elements, anitomyModule.ElementCategory.kElementReleaseInformation),
    release_version: elementEntry(elements, anitomyModule.ElementCategory.kElementReleaseVersion),
    source: elementEntry(elements, anitomyModule.ElementCategory.kElementSource),
    subtitles: elementEntry(elements, anitomyModule.ElementCategory.kElementSubtitles),
    video_resolution: elementEntry(elements, anitomyModule.ElementCategory.kElementVideoResolution),
    video_term: elementEntry(elements, anitomyModule.ElementCategory.kElementVideoTerm),
    volume_number: elementEntry(elements, anitomyModule.ElementCategory.kElementVolumeNumber),
    volume_prefix: elementEntry(elements, anitomyModule.ElementCategory.kElementVolumePrefix),
    unknown: elementEntry(elements, anitomyModule.ElementCategory.kElementUnknown),
  };
  elements.delete();
  return returnObj;
}

function elementEntry(elements, key) {
  if (elements.count(key) > 1) {
    return mapVector(elements.get_all(key));
  } else {
    return elements.get(key) || undefined;
  }
}

function mapArray(array) {
  const vector = new anitomyModule.StringVector();
  array.forEach((element, index) => {
    if (typeof element !== 'string') {
      throw new Error(`Element at index ${ïndex} is not a string`);
    }
    vector.push_back(element)
  });
  return vector;
}

function mapVector(vector) {
  const array = [];
  for (let index = 0; index < vector.size(); index++) {
    array.push(vector.get(index));
  }
  vector.delete();
  return array;
}
