# Documentation for Git
- Initialize the project 

This should be done at the begin of the project only.

```bash
git init
```


- Check the user name & email
if user name & email is not set, set them.
```bash
git config user.name "<github user name>"
git config user.email "<github user email>"
```

- Checking the status of the Project

This the must used command
```bash
git status
```

-Adding files to staging area 

```bash
git add <file_or_folder_path>
```


- Commit the changed files / folders

```bash
git commit -m "<your mesage>"
```

-Amend the last commit message
```bash
git commit --amend
```

Message should be in present tense. For e.g. setup the initial git project

-See the logs
```bash
git log --oneline
```

-Adding remote to our repository

```bash
git remote add origin <repository_url>
```

-Check current branch
```bash
git branch
```

- Rename current branch
```bash
git branch -M <new_branch_name>
```

- Push latest changes to the remote

```bash
git push origin <branch_name>
```

- Checkout new branch
```bash
git checkout -b <branch_name>
```

- Checkout existing branch
```bash
git checkout <branch_name>
```

-Pull latest code from remote

```bash
git pull origin <branch_name>
```

-Add multiple files

```bash
git .
```
