
# Handling forms
<!-- Time: 15min -->


## Binding the area
We've been able to display the area a waiter is assigned to but we haven't been able to have them select it yet. When we're finished with this next exercise, they'll choose an area from the dropdown box and you can watch it change.

1. Edit `areas.component.ts` and inject the `AreaService` we created earlier. Create a new property called area and tie it to the AreaService's area:
```typescript
export class AreasComponent {
  area = this._areaService.area;                    // <-- Add this
  areas: Array<string> = [
    "Theater 1", "Theater 2", "Theater 3", "Theater 4", "Theater 5", "Theater 6",
  ];
  constructor(public _areaService: AreaService) { }  // <-- Add this
}
```

2. Edit `areas.component.html` 
```html
<h1>Your area</h1>
<label for="area">Select your area</label>
<select [ngModel]="area()" (ngModelChange)="_areaService.area.set($event)" id="area">
  <option *ngFor="let a of areas" [value]="a">{{a}}</option>
</select>
```
As soon as you type that in, you're reminded that we haven't imported the FormsModule yet.

3. Edit `app.module.ts`. Import FormsModule at the top:
```typescript
import { FormsModule } from '@angular/forms';
```
and add it to the imports array:
```typescript
imports: [
  BrowserModule,
  FormsModule,      //  <-- Import FormsModule
  HttpClientModule,
  RouterModule,
  routing,
],
```
Now if you look, you'll find your error messages about ngModel have been satisfied. Let's test it out now.

4. Log in.
5. Navigate to /orders. The message says no area is chosen.
6. Navigate to /areas. Select an area from the dropdown.
7. Navigate to /orders again.
8. Does it say your Area? It should!


## Login form
Up to now we've been authenticating to the server with hardcoded credentials. It's time to get those credentials from the user through the Login form.

1. Create a couple of class properties in `login.component.ts`
```typescript
  username: string = "";
  password: string = "";
```

2. Change the `login()` function to use them instead of our hardcodes:
```typescript
login() {
  this._authService.login(this.username, this.password);
}
```

3. Using ngModel, bind them to the username and password input boxes:
```html
<h1>Login</h1>
<form (ngSubmit)="login()">
  <div>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" [(ngModel)]="username" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" [(ngModel)]="password" />
  </div>
  <button type="submit">Login</button>
</form>
<div *ngIf="error()" class="danger alert">{{error()}}</div>
```

4. Try to login with bad credentials. Do you see an error message?
5. Try to login with good credentials. Do you get navigated to the home component?

If the answer to both of those questions is yes, congratulations! You're finished.
