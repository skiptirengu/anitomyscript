cmake_minimum_required(VERSION 3.0.0)
project(anitomyscript)

set(CMAKE_VERBOSE_MAKEFILE on)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/build)

# thanks Xtansia for the build flags :) https://github.com/Xtansia/node.anitomy.js/blob/master/CMakeLists.txt
if (UNIX)
    if (APPLE)
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -stdlib=libc++ -mmacosx-version-min=10.7")
        set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_SHARED_LINKER_FLAGS} -stdlib=libc++")
    endif (APPLE)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fPIC -std=c++14 -fno-exceptions -Wall -Wextra -Wpedantic -Werror")
    set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -g")
    set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -O2")
else (UNIX)
    if (MSVC)
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /W4 /WX /MP")
        set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} /ZI")
        set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} /O2")
    endif (MSVC)
endif (UNIX)

set(BINDING_SOURCE_FILES
        src/anitomy_script.cpp)

set(ANITOMY_SOURCE_FILES
        anitomy/anitomy/anitomy.cpp
        anitomy/anitomy/anitomy.h
        anitomy/anitomy/element.cpp
        anitomy/anitomy/element.h
        anitomy/anitomy/keyword.cpp
        anitomy/anitomy/keyword.h
        anitomy/anitomy/options.h
        anitomy/anitomy/parser.cpp
        anitomy/anitomy/parser.h
        anitomy/anitomy/parser_helper.cpp
        anitomy/anitomy/parser_number.cpp
        anitomy/anitomy/string.cpp
        anitomy/anitomy/string.h
        anitomy/anitomy/token.cpp
        anitomy/anitomy/token.h
        anitomy/anitomy/tokenizer.cpp
        anitomy/anitomy/tokenizer.h)

source_group("binding" FILES ${BINDING_SOURCE_FILES})
source_group("anitomy" FILES ${ANITOMY_SOURCE_FILES})

add_library(${PROJECT_NAME} SHARED ${BINDING_SOURCE_FILES} ${ANITOMY_SOURCE_FILES})

set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".bc")

