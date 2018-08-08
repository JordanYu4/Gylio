- What views are required?
- What do those views look like?
- How can these views be broken down into React components? Think boxes-in-boxes.
- Which components can be reused in different components?
- What data does each component need to display properly?

Does it need a container to connect to the store or can the data be passed down from a parent as props?
Create a rough-draft of your component hierarchy with wireframes (starting from App), which will include drawings of every view and a list of the needed components (per view). Each component should also show the data it needs from the redux store.

Note: Any component ending in Container will connect its nested component to the Redux store.
