---js
{
  title: "How to save and restore your programs when using i3",
  tags: ["tutorial", "i3", "dmenu", "i3-resurrect"],
  date: "2024-04-06"
}
---

## Introduction

One of the oldest problems I run into with Operating Systems in general, the lower layer of my development environment, is saving/managing my workspace.

But what does "workspace saving" mean exactly, what am I trying to achieve here?

I don't want my OS to be able to restore my windows when I restart, it's not about that, I can deal with this problem by not rebooting.

What I want is the ability to to close apps and programs in order to have a clean workspace that contains only what I need at the moment.

I also want to be able to reopen group of windows at will, to me, these group of windows basically mean the same as a projet. That's right, a group of windows and their states is a project.

So how would you go about achieving this? These are the solutions I was able to find :

1. Using a (autonomous) solution that means :
  - A full-fledged IDE (other than VSCode)
  - Paid software at the OS-level (on Windows for the most part)

2. Scripting

That is what I will be writing about.

### How to achieve workspace switching at the os-layer through scripting

The first thing I have to think about is the usage.

I want, through a script, command or whatever, be able to open a specific workspace.

Something like ``workspace.sh [project] [feature]`` for example.

I have to make a clear distinction between the project and the feature.

The project is in this case would represent the framework, the basis : the i3 layout, the setup scripts and the programs/scripts themselves.

The feature could be a specific branch in a git repository for example, or it could be as simple as a parameter that you give to your programs/scripts.

### Use case

Let's say I want to work on a project called ``foo``, on very this project I work simultaneously on 3 separate features.

The first thing would be that I want to have one terminal, right where the project lives.

I also want the shell session to start some init. scripts, that could be something like a Python venv for example.

If I'm working on a Web application I would also need my browser opened up.

### Scripting

#### Prerequisites

- i3
- i3-resurrect
- dmenu

#### Scripts

1. Prompt the user for the project it wants to work on.
2. Run the main.sh script for the selected project
> The script might prompt the user for additional information such as the feature.

```workspace.sh```
```shell
#!/usr/bin/env sh

projects_path="$HOME/.i3/i3-resurrect/projects"

project_name=$(ls "$projects_path" | dmenu -p project  -i | xargs)

if [[ "$project_name" == "" ]]; then
  echo "Invalid project"
  exit 1
fi

project_path="$projects_path/$project_name"
temp_folder="$(mktemp -d)"
workspace_number=$(i3-msg -t get_workspaces   | jq '.[] | select(.focused==true).name'   | cut -d"\"" -f2)
$project_path/main.sh "$project_path" "$temp_folder" "$workspace_number" && pipx run i3-resurrect restore -d "$temp_folder" -p current
rm -rf "$temp_folder"
```

```main.sh```
```shell
#!/usr/bin/env sh
project_path="$1"
temp_folder="$2"
workspace_number="$3"
feature_name=$(ls -t /my_project_path/.features | dmenu -p Feature -i | xargs)
if [[ "$feature_name" == "" ]]; then
  echo "Invalid feature_name"
  exit 1
fi
mkdir $temp_folder/profiles
sed -e "s/%{feature_name}/$feature_name/g" "$project_path/programs.json" > "$temp_folder/profiles/current_programs.json" && \ 
sed -e "s/%{feature_name}/$feature_name/g" "$project_path/layout.json" > "$temp_folder/profiles/current_layout.json"
```

```programs.json```
> See https://github.com/JonnyHaystack/i3-resurrect
- vscode
- firefox
- 2 xterm windows

```json
[
  {
    "command": [
      "/opt/visual-studio-code/code",
      "/my_project_path/.features/%{feature_name}/%{feature_name}.code-workspace"
    ],
    "working_directory": "/my_project_path/.features/%{feature_name}"
  },
  {
    "command": [
      "/usr/lib/firefox/firefox"
    ],
    "working_directory": "$HOME"
  },
  {
    "command": [
      "/usr/bin/xterm",
			"-class",
      "UXTerm",
      "-u8",
      "-bw",
      "0",
      "-e",
      "bash --login -i <<< 'source /home/user/.venvs/project/%{feature_name}/bin/activate; exec </dev/tty'"
    ],
    "working_directory": "$HOME"
  },
  {
    "command": [
      "/usr/bin/xterm",
			"-class",
      "UXTerm",
      "-u8",
      "-bw",
      "0",
      "-e",
      "bash --login -i <<< 'source /home/user/.venvs/project/%{feature_name}/bin/activate; exec </dev/tty'"
    ],
    "working_directory": "$HOME"
  }
]
```

```layout.json```
See https://i3wm.org/docs/layout-saving.html

---

That's about it, now you can save and restore your workspaces.


Thanks for reading.
