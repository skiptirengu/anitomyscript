#include <emscripten/bind.h>
#include <vector>
#include <string>
#include "../anitomy/anitomy/anitomy.h"

using namespace emscripten;
using namespace anitomy;
using namespace std;

vector<string_t> *vectorFromIntPointer(uintptr_t vec)
{
    return reinterpret_cast<vector<string_t> *>(vec);
}

EMSCRIPTEN_BINDINGS(Anitomy)
{
    register_vector<string_t>("VectorString_t")
        .constructor(&vectorFromIntPointer, allow_raw_pointers());

    class_<Anitomy>("Anitomy")
        .constructor<>()
        .function("parse", &Anitomy::Parse)
        .function("elements", &Anitomy::elements)
        .function("options", &Anitomy::options)
        .function("tokens", &Anitomy::tokens);

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
