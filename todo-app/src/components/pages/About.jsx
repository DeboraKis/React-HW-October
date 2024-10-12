const About = () => {
  return (
    <>
      <h2 className="page-header">About</h2>
      <p className="page-text">
        Welcome to the about page of the ToDo List app. Please use the
        navigation to proceed to the list page of this app. This page only
        exists to illustrate the point that when you use Context in React to
        handle your data, it doesn't matter if the component rendering the data
        unmounts because the data exists at a higher level with out the need for
        prop drilling. You can demonstrate this by creating a todo list and then
        visiting this, or the Home page, and returning to see your todo items
        still exist.
      </p>
    </>
  );
};

export default About;
