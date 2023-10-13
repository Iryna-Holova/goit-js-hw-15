# goit-js-hw-15

**Task 6**

Write a script that checks content of input for the correct number of characters on blur event.

1. How many characters should be in the input is specified in its data-length attribute.
2. If the correct number of characters is entered, the border of the input becomes green, if the number is incorrect - red.

To add styles, use the CSS classes valid and invalid, which we have already added to the source files of the task.

**Task 7**

Write a script that responds to a change in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, dragging the slider will change the size of the text.

**Task 8**

Write a script for login form.

1. Processing of form.login-form submission should occur according to the submit event.
2. The page should not reload when submitting the form.
3. If the form has blank fields, display an alert with a warning that all fields must be filled.
4. If the user filled in all the fields and sent the form, collect the field values into an object, where the field name will be the property name, and the field value will be the property value. To access form elements, use the elements property.
5. Display the object with the entered data in the console and clear the values of the form fields using the reset method.

**Task 9**

Write a script that changes the background color of the body element through inline styling when button.change-color is clicked and displays the color value in span.color.
To generate a random color, use the getRandomHexColor() function.

**Task 10**

Write a script for creating and cleaning a collection of elements. The user enters the number of elements in input and clicks the Create button, after which the collection is rendered. Clicking the Clear button clears the collection of items.

Create the createBoxes(amount) function, which accepts one parameter - a number. The function creates as many div as specified in amount and adds them to div#boxes.

1. The dimensions of the very first div are 30px by 30px.
2. Each element after the first must be wider and higher than the previous one by 10px.
3. All elements should have a random background color in HEX format. Use the getRandomHexColor() function to get the color.

Create a destroyBoxes() function that clears the contents of the div#boxes, removing all created elements.
