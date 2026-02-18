---js
{
	title: "Why is there still no standard way to express external programs as dependencies?"
}
---

What's the point of shebangs anyway? Some will tell you that you better use /usr/bin/env bash over /usr/bin/bash, they will argue that env does not directly point to a path instead it looks for the bash binary in your existing PATH variable. Truth to be told, no one cares, they both fail at the very basic thing at which they aim for.

That is, expressing an external program as a dependency, one who writes a shell script and want to share it, better make make as little assumptions as possible, this starts with expressing dependencies.

When we think of dependencies, more than often we think of pkgconf, autotool, cmake, C libraries and such, leaving out the important fact that there might be need for x/y external program, however, for some reason, it is never explicitly expressed. It's as if it would already be magically installed in the exact version that is needed for the task at hand.

The better anyone could come up with so far is not caring about it, leaving it up to someone else, probably at at lower level of stack (hello evil packagers), ultimately condemning the user to face a software failure sometime even as soon as the [building process](https://github.com/mesonbuild/meson/issues/15539). Yes, you read that right, a build system that expect its users to have already assembled the pieces of the software they're building. Meson is not the only wrong in this case, Python is tool, for it is well-known for its poor dependencies management, I won't get too deep into that part but let's say that they cannot decide on a common way to do things and their package manager, pip, is known to introduce breaking changes every single update. Anyway, who did not once try to run a Python script only to have to reverse engineer its entire dependencies tree in order to be able to run it? This does not happen "just because", it happens because Python users are bad at expressing their script's dependencies, they often overlook the [managing my dependencies versions](/version-pinning-does-not-mean-what-we-think-it-means) part of having dependencies. Python packager are also under the false pretense that suffixing Python binary with its major and minor version is enough. For Python, [things do seems to be getting better](https://www.pkgsrc.org) on the standardization part that is. 

So, as you can see lots of wrong from lots of people, that makes for a poor UX/DX, so what can be done about that?

We need two things: 

1. A standard, common way, to express external program as dependencies, a manifest of some sort, 
2. A intermediate program that is able to lookup dependencies, in this case external program mostly 

This way this give both the user, maintainers and developers more freedom while keeping us sane. I should be clear that it is not the program's job to install anything, that is part of the build process, its job is only to tell the build process about the dependency that it can actually use. In contrast to the current state of things where a path means a dependency, the program would look at the user intents from previously installed packages and match a hash, that is, the clearest form of a dependency, against a registry.

Another more present option would be to create that said program yourself, through a POSIX compliant shell script, make sure that the program exists and in the exact version that you need it. Needless to say that it's not as simple as `find_program("python_module")` huge shout-out to the dumbest of all: meson.

That's it I will no longer be fooled by semver, paths and /usr/bin/env, suffixes or anything of the sort.

