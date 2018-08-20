# Gylio

[Live Demo](htps://gylio.herokuapp.com/)

Gylio is a project management platform that enables users to visualize their workflow by destructuring projects into modular tasks represented by cards. Users can then distribute their cards between lists to organize project phases and deadlines, as well as delegate tasks between team members. Gylio's design is intended to clone the UI/UX of [Trello](https://trello.com/).

Gylio utilizes a Rails/PostgreSQL backend compounded with a React.js and Redux frontend.

This project was designed, built, and deployed within a two-week deadline. Additional enhancements will be added.

This README covers the following:
* [Features](https://github.com/JordanYu4/Mise#features)
* [Project Design](https://github.com/JordanYu4/Mise#project-design)
* [Technologies](https://github.com/JordanYu4/Mise#technologies)
* [Future Features](https://github.com/JordanYu4/Mise#future-features)

## Current Features

* Secure backend and frontend user authentication using a BCrypt
* Users can create project boards
* Users can create lists within each board, representing project phases

### Minimized Board & List Forms

It is critical that the Gylio users are presented with the cleanest and most minimal user interface so they can focus on the project at hand. In order to minimize visual clutter, both board and list creation forms are hidden from view until the user has need of them. To this end, the board creation form is rendered as modal by selecting the "Create new board" button. The button itself is designed to blend in seamlessly with the other board index items, offering minimal distraction until required.


Similarly, each board's "Add another list" button is designed to complement the proportions of the other list index items. Clicking on the button triggers the rendering of the full form.


### Conditional Form Submission

While displaying form submission errors can be an important feature for app functionality, it can also be disruptive to the user experience. For this reason, both board and list creation form submission are disabled until the user has properly filled in all of the necessary fields. Upon form completion, the submission button is enabled along with its hover features, and transitions to an affirmative green color. This provides the user with affordances signaling that the form is ready to submit. This feature reduces user encounters with errors, thereby making the use experience smoother and more enjoyable.  

## Project Design

The build focus of Gylio was achieving a clean, intuitive user interface in a tool that would ultimately be effective and fun to use. Because of the abbreviated production timeline, it was determined that the minimum viable product should be defined by a core feature set. Producing a solid foundational codebase conducive for future development too precedence over constructing a shallow clone of every one of Trello's features. 

### Design Documents

The build progress of each feature was tracked on the project [issues page](https://github.com/JordanYu4/Mise/issues). Further details and design documents are available in the project [wiki](https://github.com/JordanYu4/Mise/wiki). The following documents are included:

+ [MVP list](https://github.com/JordanYu4/Mise/wiki/mvp-list)
+ [Schema](https://github.com/JordanYu4/Mise/wiki/schema)
+ [Backend Routes](https://github.com/JordanYu4/Mise/wiki/backend-routes)
+ [Frontend Routes](https://github.com/JordanYu4/Mise/wiki/frontend-routes)
+ [Sample State](https://github.com/JordanYu4/Mise/wiki/sample-state)

## Technologies

Because Gylio was designed to be a two-week sprint portfolio project, a framework conducive to fast initialization and turnaround was required. Rails was selected for its intuitive architecture and RESTful routes, as well as for its well-established support community. For application hosting, Heroku is expected to be sufficient for the anticipated traffic.

Because Gylio is an application utilizing fairly complex associations and constant interaction with state, it was critical to maintain a normalized state. By building separate actions and reducers for users, boards, lists, cards, comments, labels, and errors, synchronization between frontend components and database changes was streamlined.

## Future Features

* Allow users to search for and add other users to their board to form teams
* Allow users to add comments and due dates to cards
* Drag and drop reordering of lists, and redistribution of cards between lists
* Allow users to add labels to categorize cards
* Allow users to set board administrators
* Allow users to set custom board background colors and images
* Allow users to use hotkeys to quickly navigate boards
