# Decomposition
<!-- Time: YYmin -->

Take a look at `order.component.html`. We're displaying some cool summary data but we can't currently see the the menu items that the diners ordered. We *could* iterate all of those like this:
```html
  <div *ngFor="let item of order().items">
    <p class="firstName">For {{item.firstName}}</p>
    <p class="price">{{item.price | currency }}</p>
    <p class="name">{{item.name}}</p>
    <img [src]="item.imageUrl" alt="" class="imageUrl" />
    <p *ngIf="item.notes" class="notes">Notes: {{ item.notes }}</p>
  </div>
```
Wow! That's some complex code. Hey, if we decompose that to a component on its own, it could be much simpler:
```html
<app-menu-item *ngFor="let item of menuitems" [item]="item" />
```
Isn't that nicer? Let's create the MenuItemComponent and then use it.

1. First, escape to a command prompt/terminal and ...
```bash
ng generate component MenuItem
```
Don't forget to restart the Angular dev server.
```bash
npm start
```

2. Edit menu-item.component.html. Replace its contents with this:
```html
<div>
  <p class="firstName">For {{ item.firstName }}</p>
  <p class="price">{{ item.price }}</p>
  <p class="name">{{ item.name }}</p>
  <img [src]="item.imageUrl" alt="" class="imageUrl" />
  <p *ngIf="item.notes" class="notes">Notes: {{ item.notes }}</p>
</div>
```
Whoa! There's an error! What's up with `item`? Obviously that's a property that we must add to its TypeScript class.

3. Edit menu-item.component.ts. Add this to the top.
```typescript
@Input() item: any;
```
Remember, you'll need to `import { Input } from '@angular/core`.

The error should be gone. 

4. Add these to order.component.html.
```html
<h3>Items</h3>
<section id="items">
  <app-menu-item *ngFor="let item of order().items" [item]="item" />
</section>
```

5. Test it out. In addition to the order summary, you can now also see the menu items that were ordered by each party at the table and any special instructions on the order.

6. Bonus!! This will make for some really nice styling. Make `menu-item.component.css` look like this:
```css
div {
  border: 1px solid var(--dark2);
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-areas:
    'firstName firstName firstName'
    'imageUrl name price'
    'imageUrl notes notes'
  ;
  grid-column-gap: 20px;

  &>* {
    margin: 10px;
  }

  &>.firstName {
    grid-area: firstName;
    font-size: 1.1em;
    font-weight: bold;
  }

  &>.imageUrl {
    grid-area: imageUrl;
    width: 100%;
  }

  &>.name {
    grid-area: name;
  }

  &>.price {
    grid-area: price;
    text-align: right;
  }

  &>.notes {
    grid-area: notes;
  }
}
```

Once it is looking the way you like you can be finished.
