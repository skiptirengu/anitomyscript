#include <emscripten/bind.h>
#include <vector>
#include <string>
#include "../anitomy/anitomy/anitomy.h"

using namespace emscripten;
using namespace anitomy;
using namespace std;

class AnitomyCompat : public Anitomy
{
  public:
    void setOptions(Options newOptions)
    {
        Options &opts = options();
        opts.allowed_delimiters = newOptions.allowed_delimiters;
        opts.ignored_strings = newOptions.ignored_strings;
        opts.parse_episode_number = newOptions.parse_episode_number;
        opts.parse_episode_title = newOptions.parse_episode_title;
        opts.parse_file_extension = newOptions.parse_file_extension;
        opts.parse_release_group = newOptions.parse_release_group;
    }
};

vector<string_t> *string_tVectorFromIntPointer(uintptr_t vec)
{
    return reinterpret_cast<vector<string_t> *>(vec);
}

vector<Elements> *elementVectorFromIntPointer(uintptr_t vec)
{
    return reinterpret_cast<vector<Elements> *>(vec);
}

Options createOptions()
{
    return Options();
}

vector<Elements> parseArray(vector<string_t> vec, Options options)
{
    vector<Elements> ret;
    AnitomyCompat an;
    an.setOptions(options);
    for (string_t filename : vec)
    {
        an.Parse(filename);
        ret.emplace_back(an.elements());
    }
    return ret;
}

Elements parseFile(string_t filename, Options options)
{
    AnitomyCompat an;
    an.setOptions(options);
    an.Parse(filename);
    return an.elements();
}

EMSCRIPTEN_BINDINGS(Anitomy)
{
    emscripten::function("_parseArray", &parseArray);
    emscripten::function("_parseFile", &parseFile);
    emscripten::function("_createOptions", &createOptions);

    register_vector<string_t>("VectorString_t")
        .constructor(&string_tVectorFromIntPointer, allow_raw_pointers());

    register_vector<Elements>("VectorElements")
        .constructor(&elementVectorFromIntPointer, allow_raw_pointers());

    class_<Anitomy>("AnitomyRaw")
        .constructor<>()
        .function("parse", &Anitomy::Parse)
        .function("elements", &Anitomy::elements)
        .function("options", &Anitomy::options)
        .function("tokens", &Anitomy::tokens);

    class_<AnitomyCompat, base<Anitomy>>("Anitomy")
        .constructor<>()
        .function("setOptions", &AnitomyCompat::setOptions);

    class_<Elements>("Elements")
        .constructor<>()
        .function("size", &Elements::size)
        .function("empty_capacity", select_overload<bool() const>(&Elements::empty))
        .function("empty_lookup", select_overload<bool(ElementCategory) const>(&Elements::empty))
        .function("get", &Elements::get)
        .function("count", &Elements::count)
        .function("get_all", &Elements::get_all);

    value_object<Options>("Options")
        .field("allowed_delimiters", &Options::allowed_delimiters)
        .field("ignored_strings", &Options::ignored_strings)
        .field("parse_episode_number", &Options::parse_episode_number)
        .field("parse_episode_title", &Options::parse_episode_title)
        .field("parse_file_extension", &Options::parse_file_extension)
        .field("parse_release_group", &Options::parse_release_group);

    enum_<ElementCategory>("ElementCategory")
        .value("kElementIterateFirst", ElementCategory::kElementIterateFirst)
        .value("kElementAnimeSeason", ElementCategory::kElementAnimeSeason)
        .value("kElementAnimeSeasonPrefix", ElementCategory::kElementAnimeSeasonPrefix)
        .value("kElementAnimeTitle", ElementCategory::kElementAnimeTitle)
        .value("kElementAnimeType", ElementCategory::kElementAnimeType)
        .value("kElementAnimeYear", ElementCategory::kElementAnimeYear)
        .value("kElementAudioTerm", ElementCategory::kElementAudioTerm)
        .value("kElementDeviceCompatibility", ElementCategory::kElementDeviceCompatibility)
        .value("kElementEpisodeNumber", ElementCategory::kElementEpisodeNumber)
        .value("kElementEpisodeNumberAlt", ElementCategory::kElementEpisodeNumberAlt)
        .value("kElementEpisodePrefix", ElementCategory::kElementEpisodePrefix)
        .value("kElementEpisodeTitle", ElementCategory::kElementEpisodeTitle)
        .value("kElementFileChecksum", ElementCategory::kElementFileChecksum)
        .value("kElementFileExtension", ElementCategory::kElementFileExtension)
        .value("kElementFileName", ElementCategory::kElementFileName)
        .value("kElementLanguage", ElementCategory::kElementLanguage)
        .value("kElementOther", ElementCategory::kElementOther)
        .value("kElementReleaseGroup", ElementCategory::kElementReleaseGroup)
        .value("kElementReleaseInformation", ElementCategory::kElementReleaseInformation)
        .value("kElementReleaseVersion", ElementCategory::kElementReleaseVersion)
        .value("kElementSource", ElementCategory::kElementSource)
        .value("kElementSubtitles", ElementCategory::kElementSubtitles)
        .value("kElementVideoResolution", ElementCategory::kElementVideoResolution)
        .value("kElementVideoTerm", ElementCategory::kElementVideoTerm)
        .value("kElementVolumeNumber", ElementCategory::kElementVolumeNumber)
        .value("kElementVolumePrefix", ElementCategory::kElementVolumePrefix)
        .value("kElementIterateLast", ElementCategory::kElementIterateLast)
        .value("kElementUnknown", ElementCategory::kElementUnknown);
}
