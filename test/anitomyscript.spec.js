'use strict';

const expect = require('chai').expect;
const logger = require('mocha-logger');
const anitomyscript = require('../index');

const fixtures = require('./fixtures.data.json');
const fixtureKeys = Object.keys(fixtures);

describe('anitomyscript', function () {
  describe('AnitomyNative', function () {
    it('Anitomy.setOptions', function () {
      const defaultOptions = anitomyscript.AnitomyNative._createOptions();
      const anitomy = new anitomyscript.AnitomyNative.Anitomy();
      const newOpts = anitomyscript.AnitomyNative._createOptions();
      const ignored = new anitomyscript.AnitomyNative.VectorString_t();
      ignored.push_back('test321');
      newOpts.ignored_strings = ignored;
      newOpts.allowed_delimiters = 'test123';
      newOpts.parse_episode_number = false;
      newOpts.parse_episode_title = false;
      newOpts.parse_file_extension = false;
      newOpts.parse_release_group = false;
      anitomy.setOptions(newOpts);
      expect(anitomy.options().parse_episode_number).to.be.false;
      expect(anitomy.options().parse_episode_title).to.be.false;
      expect(anitomy.options().parse_file_extension).to.be.false;
      expect(anitomy.options().parse_release_group).to.be.false;
      expect(anitomy.options().allowed_delimiters).to.deep.eq('test123');
      expect(anitomy.options().ignored_strings.size()).to.deep.eq(1);
      expect(anitomy.options().ignored_strings.get(0)).to.deep.eq('test321');
    });
  });

  describe('Anitomy JS', function () {
    it(`parse - single file (${fixtureKeys.length} test cases)`, function () {
      const deferreds = fixtureKeys.map((key) => {
        logger.log(key);
        const fixture = fixtures[key];
        return anitomyscript.parse(key).then((res) => {
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
      return Promise.all(deferreds);
    });
    it(`parse - array of files (${fixtureKeys.length} test cases)`, function () {
      return anitomyscript.parse(fixtureKeys).then((resArr) => {
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
    });
  });
});