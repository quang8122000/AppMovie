# Week1\_{Vinh Quang}

**AppMovie** shows the latest movies currently playing in theaters. The app utilizes the Movie Database API to display images and basic information about these movies to the user.

Time spent: **X** hours spent in total

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies (title, poster image, and overview) currently playing in theaters from the Movie Database API.
- [x] List item with the [RecyclerView](https://guides.codepath.com/android/Using-the-RecyclerView).
- [x] For each movie displayed, user can see the following details:
  - [x] Title, Poster Image, Overview (Portrait mode)
  - [x] Title, Backdrop Image, Overview (Landscape mode)

The following **optional** features are implemented:

- [] Display a nice default [placeholder graphic](https://guides.codepath.com/android/Displaying-Images-with-the-Glide-Library) for each image during loading.

The following **bonus** features are implemented:

- [x] Allow user to view details of the movie including ratings and popularity within a separate activity or dialog fragment.
- [] When viewing a popular movie (i.e. a movie voted for more than 5 stars) the video should show the full backdrop image as the layout. Uses [Heterogenous RecyclerView](http://guides.codepath.com/android/Heterogenous-Layouts-inside-RecyclerView) to show different layouts.
- [x] Allow video trailers to be played in full-screen using the YouTubePlayerView.
  - [x] Overlay a play icon for videos that can be played.
  - [] More popular movies should start a separate activity that plays the video immediately.
  - [] Less popular videos rely on the detail page should show ratings and a YouTube preview.
- [ ] Apply the popular [Butterknife annotation library](http://guides.codepath.com/android/Reducing-View-Boilerplate-with-Butterknife) to reduce boilerplate code.
- [] Apply rounded corners for the poster or background images using [Glide transformations](https://bumptech.github.io/glide/doc/transformations.html)

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app functionality!
  - Search for videos by name use SearchView

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![59y156](https://user-images.githubusercontent.com/67914761/118588312-59a10880-b7c8-11eb-864e-dc5436c73971.gif)



GIF created with [AZ Screen Recorder](https://play.google.com/store/apps/details?id=com.hecorat.screenrecorder.free&hl=en).

## Notes

Describe any challenges encountered while building the app.

## Open-source libraries used

-

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
