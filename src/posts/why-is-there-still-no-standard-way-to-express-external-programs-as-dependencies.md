---js
{
	title: "Why is there still no standard way to express external programs as dependencies?",
	tags: ["perspective"],
}
---

What's the point of #! constructs anyway? According to the POSIX spec:

> Applications should note that the standard PATH to the shell cannot be assumed
to be either /bin/sh or /usr/bin/sh, and should be determined by interrogation 
of the PATH returned by getconf PATH, ensuring that the returned path name is an
absolute path name and not a shell built in.

It tells us that we should prefer `/usr/bin/env sh` over `/usr/bin/sh`, the spec arg
ues that `env` does not directly point to a path, instead, it looks for the sh 
binary in your existing `PATH` variable using `getconf`. Truth to be told, no one 
cares, they both fail at the very basic thing at which they aim for.

That is, expressing an external program as a dependency, one who writes a shell 
script and want to share it, better make as little assumptions as possible, this
 starts with expressing dependencies.

When we think of dependencies, more than often we think of pkgconf, 
autotool, cmake, C libraries and such, leaving out the important fact that there 
might be need for x/y external program, however, for some reason, it is never 
explicitly expressed. It's as if it would already be magically installed in the 
exact version that is needed for the task at hand.

The better anyone could come up with so far is not caring about it, leaving it 
up to someone else, probably at at lower level of stack 
(hello evil packagers), ultimately condemning the user to face a software 
failure sometime even as soon as the [building process] Yes, you read that 
right, a build system that expects its users to have already assembled the 
pieces of the software they're building. 

And there's Python too, well-known for its poor dependencies management, 
I won't get too deep into that part here but let's say that they cannot decide 
on a common way to do things and their package manager, furthermore pip, is 
known to introduce breaking changes every single update. 
Who did not once try to run a Python script only to have to reverse engineer its
entire dependencies tree just to be able to run the damn thing? 
This kind of poor DX does not happen "simply because", it happens because Python
developers do not care the least about expressing dependencies, they will keep
overlooking dependencies for as long as they can.  Distribution packagers also 
seem to be under the false pretense that suffixing a Python binary using its 
major and minor version should be enough. All of this inevitably leads to
software failures at a rather early stage.

Expressing dependencies is not easy as they are making it to be.

We need more than a symbolic path to express dependencies:

1. A very brief and standardized way to express external programs as 
dependencies through a manifest 
2. An application agnostic program that is able to lookup those dependencies 
using records from what the user installed on its system

It's about the system getting more information about what the user wants instead
of shoving packages down its mouth and hoping for the best. 

When external programs are required at any steps of that building process then 
the mechanism should be able to be read the manifest and match each dependencies
against the record system. Each dependency would amount to a checksum computed
from unique data instead of just name. It could be any form of fingerprint 
computed from the binaries and a few metadata. 

Needless to say that it is not as simple as providing an API that calls itself 
[find_program] according to meson and its best attempt at world wide domination 
through softwares enslaving its users.

That's it I will no longer be fooled by semver, paths and `/usr/bin/env`, suffixes
 or anything of the sort. 

[building process]: https://github.com/mesonbuild/meson/issues/15539
[find_program]: https://mesonbuild.com/Reference-manual_functions.html#find_program 
