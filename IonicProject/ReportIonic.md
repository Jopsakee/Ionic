# 1. Description
I have made an app that will allow you to create a user profile, view this profile and ultimately delete it.
# 2. Steps followed
1 - Install all prerequisite packages with `npm-install -g @ionic/cli` (globally)
2 - Generate Angular project with Tabs via `ionic start IonicProject tabs --type=angular`. After this intergrate capacitor with `ionic intergrations enable capacitor` and run `npm install @capacitor/android` if it ain't installed yet. Also follow this up with `npm install @capacitor/camera` if you're planning to use this plugin like I did. A `ionic cap sync` can also be useful after installing new plugins.
3 - Open a terminal and type `ionic serve` to host your project locally in your web browser.
4 - Add functionality (in respective .ts files) and html to each of the tabs.
5 - Create a service with `ng generate service data` and add code to provide data transfer across all tabs (I did this on a tab by tab basis along with step 4).
6 - After writing and testing your code it's time to prepare it for the Android platform. Before you do all this make sure to cd to your project directory(IonicProject). Now use `npx cap add android` to initialize android configuration for your project. Directly after this use `ionic build` to build your Ionic app and also type `npx cap copy` to copy your web assets to the Android project. Now you can open the project in Android Studio with `npx cap open android`.
7 - Now you can add a device to host your app on. Because I have an Android phone I decided to use my own phone but to be able to
do that I needed to configure some things. I followed the guide provided from Android studio here: [Android guide](https://developer.android.com/studio/run/device?utm_source=android-studio-2021-1-1)
8 - Now make sure to sync and build your project if you haven't yet and then you can test it by pressing Run.
# 3. Concept changes
Since my concept was quite simple I did not need to change anything to my original idea.
# 4. Link to theory lesson
Everything required for the setup of Ionic and Android studio I've found to be quite useful.
# 5. Screenshots

# 6. Conclusion
So far I have found that transitioning from PC to Android with Ionic was extremely smooth and not complicated. Everything I had made for PC worked on the first try on Android except I had to change some permissions but that was really all that I had to do. I've found it to be much more straight forward than using the Qt cross-compiler from the previous assignment.
# 7. Comparison
As mentioned in step 6 I've found Ionic to be much less time-consuming/evident than using the Qt cross-compiler. It took much longer to get the app working on both Linux and Windows than it did to get it working on Android. Especially since there's much more information regarding Android to be found in my experience. It also runs quite smoothly on my phone but I can imagine that it depends on the device you are testing it on.