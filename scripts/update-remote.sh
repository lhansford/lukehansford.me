SCRIPT="cd lukehansford.me; git pull; yarn release"
# Note: blog needs to be set in `~/.ssh/config`
ssh blog "${SCRIPT}"
