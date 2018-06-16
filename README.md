# lukehansford.me

## Setup
- `nvm use`
- `npm install wintersmith@2.2.0 -g` (Later versions of wintersmith aren't working for me)
- `npm i`

## Developing Locally
- `wintersmith build`
- `cd  build`
- `python -m SimpleHTTPServer`

## Updating
- Push changes to git
- Run `./update-remote.sh`

OR

- ssh into blog
- cd /lukehansford.me
- git pull
- wintersmith build