* If search results are being displayed, is the query string in the URL bar?
* For the frontend, try to model your app's routes to the one you are cloning. Remember, our frontend routes are being used to dictate what components will be rendered, so make sure to consider your route params.

---

Our components are organized as follows:
* `Root`
  * `App`
    * `NavBar`
    * (main component)

The following routes, defined in `App`, will render components below `NavBar`.

* `/`
  * `Splash`
  * `Home`
    * `LeftSidebar` (nav to board index)
    * `RightSidebar` (recently viewed boards)
* `/login`
  * `SessionForm`
* `/signup`
  * `SessionForm`
* `/users/:userId`
  * `ProfileComponent`
  * `BoardIndex`
    * `BoardIndexItem`
* `/boards/new`
  * `BoardForm`
* `/boards/:boardId`
  * `BoardShow`
    * `BoardHeader`
      * `BoardMenu`
    * `BoardCanvas`
      * `ListShow`
        * `CardShow`
        * `CardForm`
    * `ListForm`
* `/cards/:cardId`
  * `CardShow`
    * `CardHeader`
    * `CardSidebar`
    * `CardBody`
      * `CardAttributes`
      * `DescriptionForm`
      * `CommentForm`
      * `CardComments`
