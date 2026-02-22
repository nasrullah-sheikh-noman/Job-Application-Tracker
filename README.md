## Question-1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-- Ans: GetElementById select one special element, it's use for catch one element. GetElementByClassName select one or multiple elements, it's use for catch same type multiple elements. QuerySelector select first element, it's use for catch first element from multiple elements. QuerySelectorAll select multiple elements in different type of selectors. 

## Question-2. How do you create and insert a new element into the DOM?

-- Ans: document.createElement("div"); and parent.appendChild("newDiv");

## Question-3. What is Event Bubbling? And how does it work?

-- Ans: Event Bubbling is a method, it's work from down to up like child to parent to document.

## Question-4. What is Event Delegation in JavaScript? Why is it useful?

-- Ans: Event delegation is a technique where a parent element handle events for child elements using event bubbling, easier to manage.

## Question-5. What is the difference between preventDefault() and stopPropagation() methods?

-- Ans: preventDefault stop default action and stopPropagation method stops event flow like bubbling or capturing.