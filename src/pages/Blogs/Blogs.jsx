/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <div className='mb-3'>
                <p>1.The differences between uncontrolled and controlled components. </p>
                <br />
                <p>Ans: Uncontrolled components operate without external regulation, while controlled components are managed through external control mechanisms.
                    Uncontrolled components are more flexible but less stable, while controlled components are subject to fixed rules and constraints but more reliable.
                    Uncontrolled components have a higher risk of failure, while controlled components are less risky due to oversight and management.</p>
            </div>
            <div className='mb-3'>
                <p>2.How to validate React props using PropTypes?</p>
                <br />
                <p>Ans: React PropTypes is a feature of React that allows developers to validate the props being passed to a component. PropTypes are used to ensure that the correct data type is being passed to a component, and to catch potential errors or bugs before they occur. Here are the steps to validate React props using PropTypes:

                    React PropTypes is a feature of React that allows developers to validate the props being passed to a component. PropTypes are used to ensure that the correct data type is being passed to a component, and to catch potential errors or bugs before they occur. Here are the steps to validate React props using PropTypes:
                    Import PropTypes at the top of your file.
                    Define your component and its props.
                    Add a PropTypes validation for each prop, using the PropTypes object.
                    Use .isRequired to make a prop required.
                    Invalid props will generate a warning in the console.</p>
            </div>
            <div className='mb-3'>
                <p>3. The difference between nodejs and express js?</p>
                <br />
                <p>Ans: Node.js is a server-side JavaScript runtime environment, while Express.js is a web application framework built on top of Node.js.

                    Node.js provides a platform for running JavaScript code outside of a browser environment, allowing developers to use JavaScript for server-side programming. Express.js provides a set of tools and features for building web applications and APIs on top of Node.js.

                    Node.js is a low-level platform that provides basic functionality for building servers and handling network requests, while Express.js is a higher-level framework that provides a more complete and structured approach to building web applications.

                    Node.js provides basic HTTP functionality, while Express.js provides a more advanced HTTP routing and middleware system, making it easier to handle complex requests and responses.

                    Node.js is more general-purpose and can be used for a variety of applications, while Express.js is specifically designed for building web applications and APIs.</p>
            </div>
            <div className='mb-3'>
                <p>4. What is a custom hook, and why will you create a custom hook?</p>
                <br />
                <p>Ans: A custom hook is a reusable JavaScript function that utilizes existing React hooks to provide custom functionality. Custom hooks allow developers to encapsulate and share logic between components, reducing code duplication and improving code organization. Here are some reasons why you might want to create a custom hook:

                    Reusability: Custom hooks can be reused across multiple components and projects, making it easier to maintain and update your code.

                    Abstraction: Custom hooks allow you to abstract complex logic and functionality into a simple, reusable function, making your code easier to understand and reason about.

                    Code organization: Custom hooks allow you to organize your code more effectively by separating concerns into distinct functions.

                    Testing: Custom hooks can be tested in isolation, making it easier to ensure that your code is working correctly.

                    Convenience: Custom hooks can simplify the process of writing complex functionality by providing a simple, reusable interface.</p>
            </div>
        </div>
    );
};

export default Blogs;