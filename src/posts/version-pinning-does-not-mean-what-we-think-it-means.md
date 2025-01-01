---js
{
	title: "Version pinning does not mean what we think it means",
	tags: ["revision-control-system", "perspective"],
	date: "2024-11-04"
}
---

## Why this article

Mostly because of:

- (Unmaintained) Docker images breaking because of unpinned dependencies
- npm, pip, or almost any package manager that allows native code bundling. The fun part is when you have a library that's either incompatible (not meant to run with a certain version of Node.js for example) with the runtime or your system. This is also true for non-native requirements that are not interoperable.

**Why would you ever expect people to guess the requirements of your software?**

## Introduction

I'll start by stating the obvious, being:

- Version pinning is no Whac-A-Mole game, it's about giving real meaning to our versioning.
- Version pinning is not the product of a carefully planned decision, it is the only possible real technical choice in terms of versioning.

Manifests are great tools, they are not about drawing ascii on a text document, they are about giving as many guarantees as possible to the people that will be building and running our software.

## The problem

The thing that bothers me most is that [some][1] RVS backends stubbornly persist on using [semver][2] as if it ever could possibly achieve its intended goal. 

In an ideal galaxy, in an ideal world, in an ideal city, things would work out for semver because people who do the versioning would never, ever make any mistakes, but that's not the case. While semver is good at abstracting the complexity of versioning when we, as users, are managing our dependencies, but the thing is, once we have "managed them", which essentially mean we, saying "as a result of careful testing I proclaim this version compatible", which in itself is already hard enough (try to imagine doing this for a stack that keeps moving forward at a great pace) then there is no longer any use to keep tracking them using versions or tags, and still, a lot of effort is put into trying to fight an invisible enemy, which is the inevitable moment where things break because they are no longer interoperable. 

When we, as developers,  are writing our manifests for our software to build and run from, what we want really is, all the security that can be offered to make sure we have as much control over the environment our software will be running on as possible, nothing should have to be guessed because we already took care of that. 
That's what manifest are for: reproducible builds. The more "extra spaces" we leave for our toolchain to guess anything on, the more are the chances that when (they will) something goes wrong, none of the indicators will be obvious enough not to waste days trying to get on top of it. 

All of this essentially boils down to fighting the true nature of semver which is evil. Any software attempting to "solve" a problem bigger than himself should never be trusted in the first place.

While we're at it, if we're talking about a human representation of how up-to-date the software in question is we might benefit from using a date instead of random digits that have absolutely no meaning. 

## The (obvious) solution

Freeze/Pin all the dependencies and make your requirements clear however you can.

## The ending theme

The time of praying for software to build and run properly are long gone, I pray that we stop praying and start producing true reproducible builds.

Thank you.

[1]: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
[2]: https://semver.org
