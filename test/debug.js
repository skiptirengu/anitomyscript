const  anitomyscript = require("../build/build.js");

let instance = new anitomyscript.Anitomy();

console.log(instance.options());
let newOptions = instance.options();
newOptions.parse_episode_number = false;
newOptions.allowed_delimiters = "HI:)";
instance.setOptions(newOptions);

console.log(instance.options());
console.log(instance.parse("Detective Conan - 316-317 [DCTP][2411959B].mkv"));
console.log(instance.elements().empty_capacity());
console.log(instance.elements().empty_lookup(anitomyscript.ElementCategory.kElementAnimeTitle));
console.log(instance.elements().size());
console.log(instance.elements().get(anitomyscript.ElementCategory.kElementAnimeTitle));
console.log(instance.elements().get_all(anitomyscript.ElementCategory.kElementEpisodeNumber).size());
console.log(instance.elements().count(anitomyscript.ElementCategory.kElementEpisodeNumber));