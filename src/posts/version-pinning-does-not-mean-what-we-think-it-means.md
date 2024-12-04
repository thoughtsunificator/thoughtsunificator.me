---js
{
	title: "Version pinning does not mean what we think it means",
	tags: ["revision-control-system"],
	date: "2024-11-04"
}
---

I'll start by saying that:

- Version pinning is no Whac-A-Mole game, it's about giving real meaning to our versioning.
- Version pinning is not the product of a carefully planned decision, it is the only possible real technical choice in terms of versioning.

Manifests are great tools, they are not about drawing ascii on a text document, they are about giving as many guarantees as possible to the people that will be building and running our software.

The fact that some RVS backends stubbornly persist on using semver as if it ever could possibly achieve its intended goal, well flash news, it can't. Sure, in an ideal galaxy, in an ideal world, in an ideal city, things would work out for semver because people who do the versioning would never, ever make any mistakes, but that's not earth, that's not me and that's not you either. Semver is good at abstracting the complexity of versioning when we, as a user, are managing dependencies. But the thing is, once we have "managed them", which essentially mean we, saying "as a result of careful testing I proclaim this version compatible", which in itself is already hard enough (try to imagine doing this for a stack that keeps moving forward at a great pace) then there is no longer any use to keep tracking them using versions or tags, and still, a lot of effort is put into trying to fight an invisible enemy, which is the inevitable moment where things break because they are no longer interoperable. So RVS backends put their best dark sorcery at play to make sure we all get the sleep we need, but at this point we already guessed that they are not doing us any favor.

When we, as developers,  are writing our manifests for our software to build and run from, what we want really is, all the security that can be offered to make sure we have as much control over the environment our software will be running on as possible, nothing should have to be guessed because we already took care of that, the whole point of it is to kill anything that would surprise our end-users? And that's what manifest aims for: reproducible builds, which is the only thing anyone should ever care about. The more "extra spaces" we leave for our toolchain to guess anything on, the more are the chances that when (they will) something goes wrong, none of the indicators will be obvious enough not to waste days trying to get on top of it. 

All of this essentially boils down to fighting the true nature of semver which is evil. Any software attempting to "solve" a problem bigger than himself should never be trusted in the first place.

We cannot possibly only trust that our optimism that the world of tomorrow surely will be a better place as a condition, a requirement for our software to be able to run in the best possible conditions, and even more, we should not expect users to accommodate our failures to produce reproducible builds.

The time of praying for software to build and run properly are long gone, I pray that we stop praying and start producing true reproducible builds.

