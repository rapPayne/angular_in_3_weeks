
# Creating components
<!-- Time: YYmin -->

Let's create all the components your web app will need. Get out to a command prompt/terminal window so you can run the ng command. 

1. Generate the landing "page" (It's not really a page, just a component)
```bash
ng generate component Home
```

2. We need to allow wait staff to select the area they're serving. Generate the areas component
```bash
ng generate component Areas
```

3. The most important view is where they can see a list of all the food orders so they know what to get from the kitchen and take to the customers. Generate the orders component.
```bash
ng generate component Orders
```

4. Once they get a food order, they need to view the details and mark it as picked up. Generate the order component.
```bash
ng generate component Order
```
So we have an OrderComponent (singular) and an OrdersComponent (plural)

5. Generate all the rest
```bash
ng generate component Login
ng generate component Logout
ng generate component NotFound
```

6. Don't forget to restart the development server!
```bash
npm run start
``` 

## Viewing the components
Now let's view one or two in the browser.
1. Edit app.component.html Find where it says this
```html
<h1>YOUR REAL CONTENT WILL GO HERE</h1>
```

2. And change it to say this
```html
<app-home />
```

3. View your site in a browser. Notice that it says "Home works"

4. Edit app.component.html once again. Now make it say this
```html
<app-areas />
```

5. View again. See how it changed?
