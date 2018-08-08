### HTML

* `GET /` `StaticPagesController#root`

### API Endpoints

#### `users`

* `POST /api/users` - sign up
* `GET /api/users/:user_id` - returns the user information of recently viewed boards and personal boards

#### `session`

* `POST /api/session` - log in
* `DELETE /api/session` - log out

#### `boards`

* `GET /api/boards/` - returns boards (filtered by current page's `user_id`)
* `GET /api/boards/:id` - returns a board
* `POST /api/boards` - creates a board
* `PATCH /api/boards/:id` - edits a board
* `DELETE /api/boards/:id` - removes a board

#### `lists`

* `GET /api/lists` - returns lists (filtered by current board)
* `GET /api/lists/:id` - returns a list
* `POST /api/lists` - creates a list
* `PATCH /api/lists/:id` - edits a list
* `DELETE /api/lists/:id` - removes a list

#### `cards`

* `GET /api/cards` - returns cards (filtered by current board)
* `GET /api/cards/:id` - returns a card
* `POST /api/cards` - creates a card
* `PATCH /api/cards/:id` - edits a card
* `DELETE /api/cards/:id` - removes a card

#### `labels`

* `GET /api/labels` - returns all labels for current board
* `PATCH /api/labels/:id` - edits a label
* `DELETE /api/labels/:id` - removes a label
