# Creating and running an Angular app
<!-- Time: YYmin -->

## Downloading starters and solutions
1. Make sure you have the prerequisites to install this.
- git
- node 18.11 or better

2. Get this whole repository and sub-repositories. (Note the --recurse-submodules flag. It's important)
```bash
git clone --recurse-submodule git@github.com:rapPayne/angular_in_3_weeks.git
```
[What if that submodule thing doesn't work?](#what-if-that-submodule-thing-doesnt-work)

## Setting up Express data server
1. Open a command prompt/terminal window. cd to the [server](../../server) folder and run this.
```bash
npm install
npm run load-db
npm run start
```
You should see a message that the RESTful API data server is running on port 3008. 

___Leave this server running at all times___

2. Open any browser and browse to http://localhost:3008/menuitems

3. If you see JSON data, your server is running.

## Creating your Angular app
1. Open a new command prompt/terminal window. Change directory to any directory you like *except* inside the server folder. Literally anywhere else will do.

2. Create the app by running this from a command prompt
```bash
ng new waiters-app
```
- When it asks to set up routing, tell it **No**. 
- When it asks about styling, tell it **CSS**.
- It will tell you when it is finished. Maybe a minute or two?

3. Open your site in an editor. VS Code is the most popular choice.
```bash
code waiters-app
```
Look around at the pieces.

## Connecting your waiters-app to your Express Data Server
1. Create a new file in the root (not src) called `proxy.conf.json`. Make it look like this:
```json
{
  "/api/*": {
    "target": "http://localhost:3008",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```
2. And to use it each time, edit package.json. Make this:
```json
"start": "ng serve",
```
look like this:
```json
"start": "ng serve --proxy-config proxy.conf.json",
```

3. Run the app from a command prompt:
```bash
npm run start
``` 
It'll tell you it is running on port 4200.

4. Open a browser and navigate to http://localhost:4200.
You should see your out-of-the box Angular application running!

5. **Without stopping your server**, edit app.component.html and replace its entire contents with this:
```html
<header>
  <nav>
    <a href="/">Main</a>
    <a href="/orders">Orders</a>
    <a href="/areas">Areas</a>
    <a href="/logout">Logout</a>
    <a href="/login">Login</a>
  </nav>
</header>
<main>
  <h1>YOUR REAL CONTENT WILL GO HERE</h1>
</main>
<footer>
  <p>Copyright &copy; 1995 Dinner and a Movie</p>
</footer>
```
The moment you hit 'save' in your IDE, the terminal window will recompile, the browser will refresh and you'll see your new content! Now, how cool is that?

Congrats! You're done.

## What if that submodule thing doesn't work?

Here are a couple of options.

### You could try these commands
1. From the empty server folder...
```bash
git submodule init
git submodule update
```

### You can download the server project separately
1. cd to literally anywhere else.
1. `git clone git@github.com:rapPayne/daam-server.git`
1. Then do the server parts in that folder. Namely, 
```bash
npm install
npm run load-db
npm run start
```

