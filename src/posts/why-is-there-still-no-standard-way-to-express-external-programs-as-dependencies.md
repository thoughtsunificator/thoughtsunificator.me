---js
{
	title: "Why is there still no standard way to express external programs as dependencies?"
}
---

What's the point of shebangs anyway? Some will tell you that you better use /usr/bin/env bash over /usr/bin/bash, they will argue that env does not directly point to a path instead it looks for the bash binary in your existing PATH variable. Truth to be told, no one cares, they both fail at the very basic thing at which they aim for.

That is, expressing an external program as a dependency, one who writes a shell script and want to share it, better make make as little assumptions as possible, this starts with expressing dependencies.

When we think of dependencies, more than often we think of pkgconf, autotool, cmake, C libraries and such, leaving out the important fact that there might be need for x/y external program, however, for some reason, it is never explicitly expressed. It's as if it would already be magically installed in the exact version that is needed for the task at hand.

The better anyone could come up with so far is not caring about it, leaving it up to someone else, probably at at lower level of stack (hello evil packagers), ultimately condemning the user to face a software failure sometime even as soon as the [building process](https://github.com/mesonbuild/meson/issues/15539). Yes, you read that right, a build system that expects its users to have already assembled the pieces of the software they're building. Meson is not the only one wrong in this case, Python is too, for it is well-known for its poor dependencies management, I won't get too deep into that part but let's say that they cannot decide on a common way to do things and their package manager, pip, is known to introduce breaking changes every single update. Who did not once try to run a Python script only to have to reverse engineer its entire dependencies tree just to be able to run the damn thing? This kind of poor DX does not happen "simply because", it happens because Python users are very bad at expressing their scripts dependencies, they more than often overlook the [managing my dependencies versions](/version-pinning-does-not-mean-what-we-think-it-means) part of having dependencies at all. And that's not all! Python packagers also seem to be under the false pretense that suffixing any Python binary with its major and minor version is enough. 

On another hand, for Python's own packaging ecosystem, [things do seems to be getting better](https://peps.python.org/pep-0723) on the standardization part that is. 

So, as you can see lots of wrong from lots of people, that makes for a poor UX/DX, so what can be done about that?

We need more than just a single unified symbol to express dependencies, we need the at the very least: 

1. A very brief and standardized way to express external programs as dependencies through a manifest 
2. An (neutral) intermediate program that is able to lookup dependencies through some sort of universal registry that records user intents on any given system

This way this gives both the final user, maintainers and developers more freedom while keeping us sane. 

When external programs are required at any steps of that building process then it should be able to be lookup the information whether a given program is available, what exactly it is and how it can use it. In contrast to the current state of things where a path, symbolically, means a dependency, the program would look at the user intents from previously installed packages and test their hashes, that is, the clearest form to express a dependency. The hash would be made ouf of their name, their exact and precise version. A clear distinction should be made between programs that the user himself compiled and installed programs, unless again, it expressed its intent to compile a precise version as-is without chaining its behavior. It's all about what the user want.

Needless to say that it is not as simple as providing an API that calls itself [find_program](https://mesonbuild.com/Reference-manual_functions.html#find_program): huge shout-out to the dumbest of all: [meson](https://github.com/mesonbuild/meson) which by the way looks like another attempt at world wide domination through softwares enslaving its users.

That's it I will no longer be fooled by semver, paths and /usr/bin/env, suffixes or anything of the sort. 

