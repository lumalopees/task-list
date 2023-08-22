# Hello!

I am excited to request the creation of a more advanced task management page using HTML, CSS and JavaScript technologies. I would like a modern and functional look. Here are the full details of what I have in mind:

HTML:

 Create a basic HTML structure with <html>, <head> and <body> tags.
 In the <head>, add meta tags for the character set and viewport, and set the page title to "To Do List".

css:

 In the <head>, include a <style> tag to add the CSS code.
 Style the <body> with zero margin and a standard font such as "Helvetica Neue" or Arial.
 Create a <header> with a gradient background using the linear-gradient property. Set the text color to white and center the "My Task List" text.
 Use a .container class for the main container. Set a maximum width of 800px, margins of 80px at the top and bottom, and inner padding of 2em. Add a soft shadow to the container.

Task Add Form:

 Create a form with a <form> tag inside the .container.
 Inside the form, add an <input> of type "text" for the task's text input. Set a width of 100% and style with border, rounded border and drop shadow.
 Add a <button> with the text "Add Task" inside the form. Style it with a background color (#007BFF), white text, a rounded border, and inner spacing.

Task List:

 Create an <ul> (unordered list) inside the .container.
 Add some <li> (list items) manually to represent the tasks. Each item must contain an <input> of type "checkbox" for the selection of the task and a <span> for the text of the task.
 Style the list items (<li>) to have inner spacing, a hover effect with a lighter background color, and a cursor icon when hovering over them.

JavaScript:

 Underneath the HTML structure, add a <script> tag to enclose the JavaScript code.
 Use JavaScript to create interactions with to-do list elements:
     When the checkbox is checked, apply the .completed class to the <li> to mark the task as completed.
 Add a "Delete Completed" button that, when clicked, removes <li> elements with the .completed class.

