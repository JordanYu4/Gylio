### `users`

|**Column name**   |**Data type**    |**Details**                        
|:-----------------|:----------------|:---------------------------------
| `id`             | integer         | not null, primary key       
| `username`       | string          | not null, indexed, unique
| `email`          | string          | not null, indexed, unique
| `password_digest`| string          | not null
| `session_token`  | string          | not null, indexed, unique
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* Index on `:username, unique: true`
* Index on `:session_token, unique: true`
* Each user `has_many :card_memberships`
* Each user `has_many :cards` through `card_memberships`
* Each user `has_many :board_memberships`
* Each user `has_many :boards` through `board_memberships`

### `card_memberships`

|**Column name**   |**Data type**    |**Details**                        
|------------------|:----------------|:----------------------------------
| `id`             | integer         | not null, primary key   
| `member_id`      | integer         | not null, indexed
| `card_id`        | integer         | not null, indexed
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* `member_id` references `users`
* `card_id` references `cards`
* Index on `[:member_id, :card_id], unique: true`

### `board_memberships`

|**Column name**   |**Data type**    |**Details**                        
|------------------|:----------------|:----------------------------------
| `id`             | integer         | not null, primary key   
| `member_id`      | integer         | not null, indexed
| `board_id`       | integer         | not null, indexed
| `admin`          | boolean         | not null
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* `member_id` references `users`
* `board_id` references `boards`
* Index on `[:member_id, :board_id], unique: true`


## **Board Components**

### `boards`

|**Column name**    |**Data type**    |**Details**                        
|-------------------|:----------------|:----------------------------------
| `id`              | integer         | not null, primary key
| `title`           | string          | not null, indexed
| `background_color`| string          |
| `created_at`      | datetime        | not null
| `updated_at`      | datetime        | not null

* Each board `has_many :memberships`
* Each board `has_many :members` through `board_memberships`
* `author_id` references `users`

### `lists`

|**Column name**   |**Data type**    |**Details**                        
|------------------|:----------------|:----------------------------------
| `id`             | integer         | not null, primary key            
| `title`          | string          | not null                          
| `board_id`       | integer         | not null, indexed
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* `board_id` references `boards`
* Each list `has_many` cards

### `cards`

|**Column name**   |**Data type**    |**Details**                        |
|------------------|:----------------|:----------------------------------|
| `id`             | integer         | not null, primary key, indexed    |
| `title`          | string          | not null
| `board_id`       | integer         | not null
| `list_id`        | integer         | not null, indexed
| `description`    | text            | not null
| `due_date`       | datetime        | indexed
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* `list_id` references `lists`
* Each card `has_many` comments
* Each card `has_many :labelings`
* Each card `has_many :labels` through `labelings`
* Each card `has_many :card_memberships`
* Each card `has_many :members` through `card_memberships`


## **Card components**

### `comments`

|**Column name**   |**Data type**    |**Details**                        
|------------------|:----------------|:----------------------------------
| `id`             | integer         | not null, primary key   
| `body`           | text            | not null
| `card_id`        | integer         | not null, indexed
| `author_id`      | integer         | not null, indexed
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* `card_id` references `cards`
* `author_id` references `users`

### `labels`

|**Column name**   |**Data type**    |**Details**                        
|------------------|:----------------|:----------------------------------
| `id`             | integer         | not null, primary key   
| `description`    | string          | not null
| `color`          | string          | not null
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* Each label `has_many :labelings`
* Each label `has_many :cards` through `labelings`

### `labelings`

|**Column name**   |**Data type**    |**Details**                        
|------------------|:----------------|:----------------------------------
| `id`             | integer         | not null, primary key   
| `card_id`        | integer         | not null, indexed
| `label_id`       | integer         | not null, indexed
| `created_at`     | datetime        | not null
| `updated_at`     | datetime        | not null

* `card_id` references `cards`
* `label_id` references `labels`
* Index on `[:card_id, :label_id], unique: true`
