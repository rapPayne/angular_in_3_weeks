NOTES!!
- To the server, add a flag or something --no-auth to turn off authentication until they have it implemented.
- Change the nav menu when user changes. Again, maybe use a signal? 
- Areas - App should have a state currentArea. Areas should set that value in App. It's used in Orders.component for sorting and filtering. It's used in Home to say what area you're assigned to.

# Creating and running an Angular app

## Setting up Express data server
<!-- Time: YYmin -->
1. Open a command prompt. cd to the [server](../../server) folder and run this.
```bash
npm install
npm run load-db
npm run start
```
You should see a message that the RESTful API data server is running on port 3008. 

*** Leave this server running at all times ***

2. Open any browser and browse to http://localhost:3008/menuitems
3. If you see JSON data, your server is running.

## Creating your Angular app
1. Create the app by running this from a command prompt
```bash
ng new waiters-app
```
- When it asks to set up routing, tell it **No**. 
- When it asks about styling, tell it **CSS**.
- It will tell you when it is finished. Maybe a minute or two?

2. Open your site in an editor. VS Code is the most popular choice.
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

# RAP: MAKE SURE TO TUNE THE BELOW. NO ROUTERLINKS NO SIGNALS. NO INTERPOLATION 
5. **Without stopping your server**, edit app.component.html and replace its entire contents with this:
```html
<header>
  <nav>
    <a [routerLink]="'/'">Main</a>
    <a *ngIf="user()" [routerLink]="'/orders'">Orders</a>
    <a *ngIf="user()" [routerLink]="'/areas'">Areas</a>
    <a *ngIf="user()" [routerLink]="'/logout'">Logout</a>
    <a *ngIf="!user()" [routerLink]="'/login'">Login</a>
    <span *ngIf="user()"> Hello, {{ user().first }}!</span>
  </nav>
</header>
<main>
  <h1>YOUR REAL CONTENT WILL GO HERE</h1>
</main>
<footer>
  <p>Copyright &copy; {{ today.getFullYear() }} Dinner and a Movie</p>
</footer>
```
The moment you hit 'save' in your IDE, the terminal window will recompile, the browser will refresh and you'll see your new content! Now, how cool is that?

Congrats! You're done.