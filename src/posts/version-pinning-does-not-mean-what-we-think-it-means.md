---js
{
	title: "Version pinning does not mean what we think it means",
	tags: ["revision-control-system", "perspective"],
}
---

There is for sure something wrong going on with how dependencies are managed, and it's obviously breaking a lot of things, wasting a lot of time and making a lot of people angry:

- Poorly maintained docker images breaking because of unpinned dependencies
- Almost any package manager that allows native code bundling where you can have a system library that's either incompatible with the runtime or your system. 
> This also holds true for non-native code.

**Why would you ever expect people to guess the requirements of your software?**

Version pinning is no Whac-A-Mole game, it's about giving real meaning to versioning.

[Most][1] version control softwares insist on allowing [semver][2] as if it ever could possibly achieve its intended goal. A version number says nothing about a software integrity which is all anyone should care for, it's not a date (which would actually means something) and it's not a checksum either (which would say a lot about its integrity).

Do not fool yourself, dependencies do not auto-manage themselves and never will, all the elements that make up the stacks should be interoperable which can only be the result of careful testings.

Manifests are not just a mean to create automated builds, they are a mean for softwares to be platform-agnostic because no end user should ever be expected to reverse-engineer a stack in order to make things interoperable (again).

## The (obvious) solution

Hard pin all your dependencies and make your requirements clear however you can.

[1]: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
[2]: https://semver.org
