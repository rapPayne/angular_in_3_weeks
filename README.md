# Angular in 3 Weeks

Resources to support @RapPayne's O'Reilly course.

In this course we'll learn together to create a simple Angular application.

## Labs
We'll be creating a small application for the wait staff (servers) at a  restaurant. When the servers show up for work, they will log on to our app and pick an area. The app will then begin assigning them meals that are ready to be delivered to guests in their area. They will mark the meal like so:

| status    | meaning                                       |
| --------- | --------------------------------------------- |
| picked up | It looks accurate. I'm taking it to the guest |
| delivered | Guest is happy with the order                 |
| problem   | The order has one or more issues              |

If there's a problem, they'll write how to solve it in the comments. 

## The API data server
Obviously we need a place to get the data so we've provided a RESTful server that will be serving the data.
You can find it [here](server).

This server is from a separate git project which we've submoduled with this:
```bash
git submodule add git@github.com:rapPayne/daam-server.git server
```
So as a separate project, you won't make changes here, you'll make changes in the https://github.com/rapPayne/daam-server project.

## The pages/views

### Dashboard
url: /
API calls needed: GET /api/orders

Shows a greeting, the user's current area, and the number of open orders.


### Login view
url: /login
API calls needed: POST /api/login

Server enters their ID and password. Once logged in they're forwarded to the Orders view.
- All other views will redirect here if a user isn't logged in.
- Here are a few username/password combos that will work:
  - username: admin password: pass
  - username: me password: pass
  - username: server2 password: password
  - username: server3 password: password

### Orders view
url: /orders
API calls needed: GET /api/orders/open

Server see a list of all orders that aren't 'complete'. They can see their orders and everyone else's. Their orders are sorted at the top of the list. They can click/tap on any order to see the Order view.

### Order view
url: /orders/1234
API calls needed: PATCH /api/orders

Server sees just that one order. They and can change status and add comments. The view has these buttons:
If readyForGuest ...
- Picked up
- Problem
If pickedUp ...
- Delivered
- Problem
If delivered ...
- Complete
- Problem

### Pick area view
url: /areas
API calls needed: None (Area isn't stored on the server)

They see all areas as links. Clicking on one changes the current area. Note that the user's area is not stored on the server but only locally. So no API call is needed.

### The top view (App)
url: N/A
API calls needed: ???

AppComponent will host all the other views. In it, you'll have a navigation menu with these choices
- Main (Dashboard)
- Orders
- Log in (if logged out)
- Log out (if logged in)



<!-- You can give it a test drive here.  -->

# Connect with Rap
- Twitter: [@RapPayne](https://twitter.com/RapPayne)
- LinkedIn: [RapPayne](https://www.linkedin.com/in/rappayne/)
- Github: [RapPayne](https://github.com/rapPayne)
- Reddit: [RapPayne](https://www.reddit.com/u/rapPayne)

Copyright &copy; 2023 Agile Gadgets LLC. 
All rights reserved. You may not republish or copy any part of this repository except for your own personal learning. If you want to use this as courseware for a Angular course, contact [@RapPayne](http://github.com/RapPayne) to obtain a license. 