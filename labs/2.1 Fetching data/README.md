
# Fetching data
<!-- Time: YYmin -->
Finally! It's time to begin reading data from a database and an API data server. Remember that we have one in the [server](../../server/) folder. Also remember from the first lab that you should have that thing running at all times, especially now. Here's how to start it.

1. Open a command prompt/terminal window.

2. `cd` to your server folder.

3. Go `npm run start` in that folder.

If it tells you it is running on port 3008, you've got it right. You can validate that it is working by visiting [http://localhost:3008/menuItems](http://localhost:3008/menuItems). If you see JSON data, it is working.

## Preparing for any fetches

1. When doing any fetching in Angular via HTTP, we need to imports the HttpClientModule. Open `app.module.ts` and `import { HttpClientModule } from '@angular/common/http';` at the top. 

2. Then put it in the imports array:
```typescript
imports: [
  BrowserModule,
  HttpClientModule,  //  <-- Import HttpClientModule
  RouterModule,
  routing,
],
```

## Fetching an order
Now let's read an actual order from the API server!

1. Edit `order.component.ts`. Add this to the top:
```typescript
import { HttpClient } from '@angular/common/http';
```

2. In the constructor, inject HttpClient:
```typescript
constructor(
  private _activatedRoute: ActivatedRoute,
  private _http: HttpClient //  <-- Add this
) { }
```

3. In the constructor or preferably in a method called `ngOnInit`, fetch the data.
```typescript
ngOnInit(): void {
  const orderId = this._activatedRoute.snapshot.params['orderId'];
  this._http.get(`http://localhost:3008/api/orders/${orderId}`).subscribe(
    {
      next: (data) => { this.order = data; }
    });
  // this.order = { id: orderId, }; // <-- Remove your hardcoded order
}
```

4. Run and test. Navigate to [http://localhost:4200/orders/1337](http://localhost:4200/orders/1337). You should see nothing there because there is no order 1337 (unless someone added it in when we weren't looking). 

5. Test again with [http://localhost:4200/orders/1003](http://localhost:4200/orders/1003). You will see a good order, status, area, and table. Go ahead and try with some other order numbers and watch the data change.

Nifty, right? If it feels wrong to you that we've got fetching login in our component, I agree. We'll see how to fix that in the next chapter.