#!/bin/bash

# Functions

error_catched() {
 echo "\033[0;31m Error on line $1 \033[0m"
 exit 255
}
check_v86() {
 if [ -Z $( echo $TEST_NPM | grep v86 ) ]; then
  echo "v86 dep not installed, installing"
  npm install v86
 fi
}
check_xterm() {
 if [ -Z $( echo $TEST_NPM | grep xterm ) ]; then
  echo "xterm dep not installed, installing"
  npm install xterm
 fi
}
 check_vite() {
 if [ -Z $( echo $TEST_NPM | grep vite ) ]; then
  echo "vite dep not installed, installing"
  npm install vite
 fi
}
install_deps() {
 TEST_NPM=$(npm ls)
 check_v86
 check_vite
 check_xterm
}
move_files() {
 if [ ! -d public/v86 ]; then
  mkdir -p public/v86
 fi
 V86_DIR="node_modules/v86/build"
 cp $V86_DIR/libv86.js public/v86
 cp $V86_DIR/v86.wasm public/v86
}
download_linux() {
 if [ ! -d public/linux ]; then
  mkdir -p public/linux
 fi
 curl --compressed --remote-name-all https://i.copy.sh/linux.iso
 mv linux.iso public/linux
}

# Main logic

NODE=$(command -v npm)
trap 'error_catched $LINENO' ERR
if [ -Z $NODE ]; then
 echo "Please install npm on your machine to init the project"
 exit 255
else
 install_deps
 move_files
fi
if [ ! -f public/linux/linux.iso]; then
 download_linux
fi
echo "\033[0;32m Installation finished! \033[0m"
