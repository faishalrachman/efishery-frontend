#Simple Pokémon Pokédex

    * Infinite Scroll Pokémon List every 10 elements
    * Pokémon detail page
    * Using localStorage for saving last state from PokeList
    * Using ScrollMemory for remember last scroll position
    * Using SCSS for easier color changing (create baseColor, secondColor, etc)

        

## Instructions

### How to run Web App locally

1. Make sure you already install npm and node, this Web App is using Node.js v10.16, if not refer to below.
    - Mac users: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
    - Windows users: http://blog.teamtreehouse.com/install-node-js-npm-windows
    - Linux users: https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

2. For faster dependency installation and more stable dependency experiences. You can use `yarn` instead of `npm`.
    For example
    ```
    $ yarn install
    ```
    instead of
    ```
    $ npm install
    ```
3. Clone this repository
4. Open the cloned repository
    ```
    $ cd efishery-frontend
    ```
5. Install dependencies
    ```
    $ npm/yarn install
    ```
6. Run the project in development mode
    ```
    $ npm/yarn start
    ```
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### How to build Web App Locally
1. You can build this app using npm/yarn
    ```
    $ npm/yarn run build
    ```
2. You can use nginx/apache or you can use static server
    - Install [Serve](https://github.com/zeit/serve) and let it handle the rest
        ```
        $ npm install -g serve
        $ serve -s build
        ```
    - You can customize the port of your server using `-l` or `--listen` flags
        ```
        $ serve -s build -l <port>
        ```
    - Run this command to get a full list of the options available
        ```
        $ serve -h
        ```
### How to build and deploy Web App on Docker
You need to create the image of the docker. You can customize the docker script using my `Dockerfile` for easier deployment.
This `Dockerfile` is using Node v10.16.3 for build and deploy the Web App.

Follow the instructions below:

1. Go to `efishery-frontend` folder
    ```
    $ cd efishery-frontend
    ```
2. Create docker image using `docker` command
    ```
    $ docker build -t efishery-frontend .
    ```
    or use your docker name
    ```
    $ docker build -t <image-name> .
    ```
    with the `-t` you specify the name of the image, and with the `.` you specify the build context. When the build completes, the last line should look something like this:
    ```
    Successfully tagged efishery-frontend:latest
    ```
3. Finally run the container using `docker run`
    ```
    $ docker run -it -p 8080:80 efishery-frontend
    ```
