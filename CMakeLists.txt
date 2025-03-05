set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -DANDROID_STL=c++_static")

target_link_libraries(<your-target> PRIVATE
    android
    log
    z
    ${CMAKE_SOURCE_DIR}/path/to/your/libs
)
