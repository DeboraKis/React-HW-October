Context and MUI Homework Exercise

open the todo-app folder in your VS Code and run npm install in the terminal to add the required node modules.

Then run npm run dev to start the development server, and open it in your browser if it hasn't done automatically.

Here you will see a very simple todo list app, with 3 pages and nav links operated with React Router. There is a list component which holds a list of todo items in its state and has a few subcomponents that handle displaying the list and accepting inputs. Have a look through the code and components and familiarise yourself with how the app works. It's very simple and shouldn't have anything you haven't seen before.

go ahead and try adding some tasks to the to do list, then navigate away to either the home or about page. Come back to the list page and you will see your list has disappeared leaving only the two default tasks. This is because when you navigated away the list component was unmounted and the data it was holding in its state was lost. So to prevent this happening we are going to convert this app to using Context instead.

Start off by creating a folder called contexts directly inside src. In this folder create a new file called todo.context.jsx and add the following code to it

import React, { createContext, useState, useCallback } from "react";

export const TodoContext = createContext({
addTodo:() => [],
todoList: [],
});

This creates our context which we export so we can draw data from it later. Next add the following code to the same file to create our provider.

export const TodoProvider = (props) => {
return (
<TodoContext.Provider value={{ addToDo, todoList }}>
{props.children}
</TodoContext.Provider>
);
}

Now we can import TodoProvider to our Main.jsx component and wrap it around the Routes like this :

<TodoProvider>
    <Routes>
        //................
    </Routes>
</TodoProvider>

At this stage you broswer will probably error, this is fine, it is because we exporting addToDo and todoList from the provider and they haven't been defined yet. We can create todoList using setState and define the function addtodo as follows :

const [todoList, setTodoList] = useState([]);

const addTodo = (item) => {
item && setTodoList([...todoList, item]);
};

You can insert these between export const TodoProvider ........etc

and the return section, same place you would add functions in a standard React component. Once this is done your browser page should start rendering again. Now this is all in place we can bring this data into our components using useContext. Open your todoList component and import useContext from React. You can then destructure the variables from your context using useContext into your component. So in the todoList component add the line

const { todoList } = useContext(TodoContext)

NB TodoContext should have its reference added automatically by VS Code but check you don't need to do this manually before proceeding. You now have todoList from your context available to use in the component so delete all the references to list (which was the original prop passed from List.jsx) and replace them with todoList. Now if you check your browser you will see the two default todo items from the original list are gone, replaced with the empty array in the context.

Now do the same thing in the Input.jsx component, bring in addTodo from the context and use it to replace addtoList, which was the original prop passed. If you have done everything correctly you should now be able to add items to the todo list. Even better you should be able to navigate to the home or about pages, and then back to your list and the list data be preserved! All without having to manage all of your data and functions in the Main.jsx component and having to prop drill everything to where it is needed.

Final challenges.

1. In the file that holds the context and provider, useCallback has been imported - improve the efficiency of your app by adding useCallback to the addTodo function.

2. Go through your app and remove all the redundant code for the original list and addToList.

3. Update the app to include a delete function for each todo item.
