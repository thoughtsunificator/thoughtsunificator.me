---js
{
	title: "Version pinning does not mean what we think it means",
	tags: ["revision-control-system", "perspective"],
	date: "2024-11-04"
}
---

## Introduction

I made this article mostly because of:

- (Unmaintained) Docker images breaking because of unpinned dependencies
- npm, pip, or almost any package manager that allows native code bundling where you can have a system library that's either incompatible with the runtime or your system. This also holds true for non-native code.

**Why would you ever expect people to guess the requirements of your software?**

- Version pinning is no Whac-A-Mole game, it's about giving real meaning to our versioning.
- Version pinning is not the product of a carefully planned decision, it is the only possible real technical choice in terms of versioning.

Manifests are great tools, they are not about drawing ascii on a text document, they are about giving as many guarantees as possible to the people that will be building and running our software.

## The problem

[Most][1] RVS backends insist on abusing [semver][2] as if it ever could possibly achieve its intended goal. A version number says nothing about a software integrity which is all anyone should care for, it's not a date (which would actually means something) and it's not a checksum either (which would say a lot about its integrity).

Do not fool yourself, dependencies do not auto-manage themselves and never will, all the elements that make up the stacks shoul dbe interoperable which can only be the result of careful testings.

Manifests are not just a meant to create automated builds, they are a mean for softwares to be platform-agnostic because no end user should ever be expected to reverse-engineer a stack in order to make things interoperable (again).

## The (obvious) solution

Hard pin all your dependencies and make your requirements clear however you can.

## The ending theme

The time of praying for software to build and run properly are long gone, I pray that we stop praying and start producing true reproducible builds.

[1]: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
[2]: https://semver.org
