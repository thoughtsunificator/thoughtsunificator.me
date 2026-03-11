---js
{
  title: "How to save and restore programs with i3wm",
  tags: ["window-manager"],
}
---

One of the oldest and unresolved issue I often run into with Operating Systems 
in general, is saving and restoring the state of my work. 

But what does "saving" mean exactly? 

It's not about restoring windows and programs it is about the ability to to 
defining dynamic workflows that can be parameterized easily. To be able to open 
group of windows and programs at will, to me, these group of windows often  
mount to a project. That's right, a group of windows and their states is a 
project.

**Achieving decent workspace state management through shell scripting**

First thing to think about is the usage, it is often overlooked but it's the
most important thing, it should be easy to achieve saving and restoring.
Something like ``workspace.sh [project] [feature]`` for example.

A clear distinction between projects features should be made though.

The project is in this case would represent the framework, the basis : the i3 la
yout, the setup scripts and the programs/scripts themselves. The feature could b
e a specific branch in a git repository for example, or it could be as simple as
 a parameter that you give to your programs/scripts.

**Use case**

One might want to start working on a project called ``foo``, on very this 
project there is need to work simultaneously on 3 different features. 
One terminal that cd into the project directly, the shell session should be able
to source scripts for initiatilization purposes that could be something like a 
Python venv for example. 

**Scripting**

<u>Prerequisites</u>

- i3wm
- i3-resurrect
- dmenu

<u>Goals</u>

1. Prompt the user for the project it wants to work on.
2. Run the main.sh script for the selected project
  The script might prompt the user for additional information such as the 
  feature name etc..

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
workspace_number=$(i3-msg -t get_workspaces   | jq '.[] | select(.focused==true)
.name'   | cut -d"\"" -f2)
$project_path/main.sh "$project_path" "$temp_folder" "$workspace_number" && pipx
 run i3-resurrect restore -d "$temp_folder" -p current
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

sed -e "s/%{feature_name}/$feature_name/g" "$project_path/programs.json" > "$tem
p_folder/profiles/current_programs.json" && \ 
sed -e "s/%{feature_name}/$feature_name/g" "$project_path/layout.json" > "$temp_
folder/profiles/current_layout.json"
```

```programs.json```
> See https://github.com/JonnyHaystack/i3-resurrect

```json
[
  {
    "command": [
      "/opt/visual-studio-code/code",
      "/my_project_path/.features/%{feature_name}/%{feature_name}.code-workspace
"
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
      "bash --login -i <<< 'source /home/user/.venvs/project/%{feature_name}/bin
/activate; exec </dev/tty'"
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
      "bash --login -i <<< 'source /home/user/.venvs/project/%{feature_name}/bin
/activate; exec </dev/tty'"
    ],
    "working_directory": "$HOME"
  }
]
```

```layout.json```

After setting up your layout manually you can save it using i3.

**Refences**:
- https://i3wm.org/docs/layout-saving.html
- https://github.com/JonnyHaystack/i3-resurrect?tab=readme-ov-file#usage
