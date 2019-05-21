'use strict';

const expect = require('chai').expect;
const logger = require('mocha-logger');
const anitomyscript = require('../index');

const fixtures = require('./fixtures.data.json');
const fixtureKeys = Object.keys(fixtures);

describe('anitomyscript', function () {

  it(`parse - single file (${fixtureKeys.length} test cases)`, async function () {
    expect(fixtureKeys.length).to.be.greaterThan(0);

    for (const key of fixtureKeys) {
      logger.log(key);
      const fixture = fixtures[key];
      const res = await anitomyscript(key);
      expect(res.anime_season).to.deep.eq(fixture.anime_season);
      expect(res.season_prefix).to.deep.eq(fixture.season_prefix);
      expect(res.anime_title).to.deep.eq(fixture.anime_title);
      expect(res.anime_type).to.deep.eq(fixture.anime_type);
      expect(res.anime_year).to.deep.eq(fixture.anime_year);
      expect(res.audio_term).to.deep.eq(fixture.audio_term);
      expect(res.device_compatibility).to.deep.eq(fixture.device_compatibility);
      expect(res.episode_number).to.deep.eq(fixture.episode_number);
      expect(res.episode_prefix).to.deep.eq(fixture.episode_prefix);
      expect(res.episode_title).to.deep.eq(fixture.episode_title);
      expect(res.file_checksum).to.deep.eq(fixture.file_checksum);
      expect(res.file_extension).to.deep.eq(fixture.file_extension);
      expect(res.file_name).to.deep.eq(fixture.file_name);
      expect(res.language).to.deep.eq(fixture.language);
      expect(res.other).to.deep.eq(fixture.other);
      expect(res.release_group).to.deep.eq(fixture.release_group);
      expect(res.release_information).to.deep.eq(fixture.release_information);
      expect(res.release_version).to.deep.eq(fixture.release_version);
      expect(res.source).to.deep.eq(fixture.source);
      expect(res.subtitles).to.deep.eq(fixture.subtitles);
      expect(res.video_resolution).to.deep.eq(fixture.video_resolution);
      expect(res.video_term).to.deep.eq(fixture.video_term);
      expect(res.volume_number).to.deep.eq(fixture.volume_number);
      expect(res.volume_prefix).to.deep.eq(fixture.volume_prefix);
      expect(res.unknown).to.deep.eq(fixture.unknown);
    }
  });

  it(`parse - array of files (${fixtureKeys.length} test cases)`, async function () {
    this.timeout(3000);
    const resArr = await anitomyscript(fixtureKeys);

    expect(resArr).to.be.a('array');
    expect(fixtureKeys.length).to.be.greaterThan(0);
    expect(resArr.length).to.deep.eq(fixtureKeys.length);

    resArr.forEach((res, index) => {
      const testKey = fixtureKeys[index];
      const fixture = fixtures[testKey];
      logger.log(testKey);
      expect(res.anime_season).to.deep.eq(fixture.anime_season);
      expect(res.season_prefix).to.deep.eq(fixture.season_prefix);
      expect(res.anime_title).to.deep.eq(fixture.anime_title);
      expect(res.anime_type).to.deep.eq(fixture.anime_type);
      expect(res.anime_year).to.deep.eq(fixture.anime_year);
      expect(res.audio_term).to.deep.eq(fixture.audio_term);
      expect(res.device_compatibility).to.deep.eq(fixture.device_compatibility);
      expect(res.episode_number).to.deep.eq(fixture.episode_number);
      expect(res.episode_prefix).to.deep.eq(fixture.episode_prefix);
      expect(res.episode_title).to.deep.eq(fixture.episode_title);
      expect(res.file_checksum).to.deep.eq(fixture.file_checksum);
      expect(res.file_extension).to.deep.eq(fixture.file_extension);
      expect(res.file_name).to.deep.eq(fixture.file_name);
      expect(res.language).to.deep.eq(fixture.language);
      expect(res.other).to.deep.eq(fixture.other);
      expect(res.release_group).to.deep.eq(fixture.release_group);
      expect(res.release_information).to.deep.eq(fixture.release_information);
      expect(res.release_version).to.deep.eq(fixture.release_version);
      expect(res.source).to.deep.eq(fixture.source);
      expect(res.subtitles).to.deep.eq(fixture.subtitles);
      expect(res.video_resolution).to.deep.eq(fixture.video_resolution);
      expect(res.video_term).to.deep.eq(fixture.video_term);
      expect(res.volume_number).to.deep.eq(fixture.volume_number);
      expect(res.volume_prefix).to.deep.eq(fixture.volume_prefix);
      expect(res.unknown).to.deep.eq(fixture.unknown);
    });
  });

  // it('parse - invalid values', async function () {
  //   const errorMessage = 'Input must be either an Array or a string';
  //   expect(() => anitomyscript.parse(null)).to.throw(errorMessage);
  //   expect(() => anitomyscript.parse('')).to.throw(errorMessage);
  //   expect(() => anitomyscript.parse(0)).to.throw(errorMessage);
  //   expect(() => anitomyscript.parse(undefined)).to.throw(errorMessage);
  // });

  it('parse - should not exceed heap size', async function () {
    this.timeout(40000);
    let maxIterations = 1000;
    let currIteration = 1;
    for (; currIteration < maxIterations; currIteration++) {
      expect(await anitomyscript(fixtureKeys)).to.have.lengthOf(fixtureKeys.length);
      logger.log(`Iteration ${currIteration}`);
    }
  });
});