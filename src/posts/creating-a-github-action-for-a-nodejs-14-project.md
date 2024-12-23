---js
{
	title: "Creating a Github action for a Node.js 14+ project",
	tags: ["developer-experience"],
	date: "2021-09-25"
}
---

## Introduction

Currently it is [not possible](https://github.com/actions/runner/issues/772) to create a [JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) with a version of nodejs other than 12.

This article attempt to provide a solution to this very issue.

## Workaround

First if you don't know the basics of Github Actions I recommend you go read the [Starting Guide](https://docs.github.com/en/actions/creating-actions/about-custom-actions). 

So how do I use a version of nodejs > 12? You can do so by creating a [Docker container action](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action) with the [node:16-alpine](https://hub.docker.com/_/node) image.

### action.yml
```yaml
# See https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions for more information about the action.yml syntax
---
name: 'My Action'
description: 'What it does..'
inputs:
	your-name:
		description: 'Your name'
		required: true
runs:
	using: 'docker'
	image: 'Dockerfile'

```


### Dockerfile
```yaml
# This Dockerfile is inspired from the official document see https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action
FROM node:16-alpine # you can the version of your liking see https://hub.docker.com/_/node for more information
COPY github-action-src /github/github-action-src # we need our Github action source files to be available inside the container so let's copy them to "/github/github-action-src" for now.
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```


### entrypoint.sh
```yaml
#!/bin/sh -l

# let's create a specific folder for the source files of our github action

mkdir github-action-src # "github/github-action-src" is the folder we put our Github Action source files into using our Dockerfile
cp -r /github/github-action-src . # now let's copy that folder into the folder for the entire repository "/github/workspace"

# as we are currently inside the github workspace (/github/workspace) containing the source files of the entire repository
# we will need to cd into the folder we previously created "github-action-src"
# you could also copy build files and such to "github-action-src" if you need to
cd github-action-src

npm install
node index.js
```

If you have any question please send me a mail at oss@thoughtsunificator.me.
