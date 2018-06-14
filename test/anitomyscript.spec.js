'use strict';

const expect = require('chai').expect;
const anitomyscript = require('../index');

const fixtures = require('./fixtures.json');
const fixtureKeys = Object.keys(fixtures);
const fixtureVals = fixtureKeys.map((k) => fixtures[k]);

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
      expect(anitomy.options().allowed_delimiters).to.be.eq('test123');
      expect(anitomy.options().ignored_strings.size()).to.be.eq(1);
      expect(anitomy.options().ignored_strings.get(0)).to.be.eq('test321');
    });
  });
});