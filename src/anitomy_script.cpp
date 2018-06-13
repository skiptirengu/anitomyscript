#include <emscripten/bind.h>
#include <vector>
#include <string>
#include "../anitomy/anitomy/anitomy.h"

using namespace emscripten;
using namespace anitomy;
using namespace std;

class AnitomyBinding
{
  private:
    Anitomy _anitomy;

  public:
    AnitomyBinding() {}

    void _setOptions(Options newOptions)
    {
        Options options = _anitomy.options();
        options.allowed_delimiters = newOptions.allowed_delimiters;
        options.ignored_strings = newOptions.ignored_strings;
        options.parse_episode_number = newOptions.parse_episode_number;
        options.parse_episode_title = newOptions.parse_episode_title;
        options.parse_file_extension = newOptions.parse_file_extension;
        options.parse_release_group = newOptions.parse_release_group;
    }

    bool _getOption()
    {
        return _anitomy.options().parse_episode_number;
    }
};

extern "C"
{
    vector<string_t> *vectorFromIntPointer(uintptr_t vec)
    {
        return reinterpret_cast<vector<string_t> *>(vec);
    }
}

EMSCRIPTEN_BINDINGS(Anitomy)
{
    class_<AnitomyBinding>("AnitomyBinding")
        .constructor<>()
        .function("_setOptions", &AnitomyBinding::_setOptions)
        .function("_getOption", &AnitomyBinding::_getOption);

    register_vector<string_t>("StringVector")
        .constructor(&vectorFromIntPointer, allow_raw_pointers());

    value_object<Options>("Options")
        .field("allowed_delimiters", &Options::allowed_delimiters)
        .field("ignored_strings", &Options::ignored_strings)
        .field("parse_episode_number", &Options::parse_episode_number)
        .field("parse_episode_title", &Options::parse_episode_title)
        .field("parse_file_extension", &Options::parse_file_extension)
        .field("parse_release_group", &Options::parse_release_group);
}
