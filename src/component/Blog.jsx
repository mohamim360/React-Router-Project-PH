import React from 'react';

const Blog = () => {
  return (
    <div>
      <h3>When to Use Context API?</h3>
      <p>The Context API can be used to share data with multiple components, without having to pass data through props manually</p>

      <h3>What is Custom Hook?</h3>
      <p>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions</p>

      <h3>What is useRef? what is use for?</h3>
      <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>

      <h3>What is useMemo? what is use for?</h3>
      <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution</p>
    </div>
  );
};

export default Blog;