import React from 'react';

const Blog = () => {

  return (
    <div className='blog'>
      <h2 class='subHeading'>Intro</h2>
      <p className='blog-item'>
        My posts won’t be tutorials or how-tos. This will be more along the lines of the outpouring of emotions when I build a todo app, an app that plays my uploaded YouTube videos, and other assorted projects. Occasionally, intelligent moments when I solve a problem. By occasionally, I mean “rare as hen’s teeth” moments. Expect lots or words describing how I plan and plot my app projects. As well, I will spend too much time playing with hex codes and my markers coming up with colour schemes that won’t end up looking like 1990’s era Sunice ski jackets.
      </p>

      <h2 class='subHeading'>How To Come Up With A Project</h2>
      <p className='blog-item'>
        This is always the toughest part for me. There are lots of lists in GitHub suggesting projects at every coding level and language. Pong game with Python. Todo list with React. Clones of WhatsApp or Yelp or Reddit using Angular.
      </p>
      <p className='blog-item'>
        I scroll thru the lists and say ‘no’, ‘no’, ‘umm no’, and then a few more noes until my scrolling finger gets sore. It took awhile for me to figure out what parts of app making I liked the best.
      </p>
      <p className='blog-item'>
        Buttons. I like buttons. Scrounging APIs for interesting information and composing the info into a useful app. Filling scrollable lists for other people to strengthen their scrolling fingers. Occasionally databases but I prefer the built-in Sqlite in Android devices to offline databases used for web apps. And as I mentioned earlier, I love figuring out what colours I’ll use in an app. A close second is picking out fronts from Fonts Google. I try and keep my layouts pretty simple. A button to click. Background images for interest sake. Scrollable list. Clickable list items that open in a new window. And once in a while, a bit of animation for interest's sake/
      </p>

      <h2 class='subHeading'>The Good Old Standards</h2>
      <p className='blog-item'>
        When I’m learning a new library or framework, I like trying it out by re-making a previous project. If I can build it once, I can build it multiple times in different ways!
      </p>
      <p className='blog-item'>
        My standard projects I like to make over are to do apps, weather apps, and random quoter apps. The layouts are straight forward, they either save user inputs to a database or save to local storage (ToDo apps), or display API information to the user (weather, random quoter apps). So far, I’ve re-made a to do app with jQuery, vanilla JavaScript, React (save to dos to local storage and MongoDB), and React Native (SqliteDB built into device).
      </p>
      <p className='blog-item'>
        Same with my many flavours of a weather app: I started with jQuery then tried it in vanilla JavaScript. I much preferred coding in JavaScript compared to jQuery. One big leap I made with my weather apps was making it for iOS and Android devices. The iOS version was my final project in the iOS section completing the Seneca College/YWCA program. Writing it in Swift was challenging but it made me realize how flexible my learning abilities had become in only a couple of months after knowing only JavaScript. I liked the layout of it and re-used it when I made the weather app again in React Native for Android.
      </p>
      <p className='blog-item'>
        The evolution of the random quoter apps was fun. First, I used an array full of quotes and authors and made a function that randomly chose a quote/author and displayed it when the button was clicked with jQuery. I re-did it in vanilla JavaScript because it was much more fun than jQuery. But I think the really interesting part was learning how to make my own RESTful JSON API and fetching a random quote when the button was clicked. It was shockingly easy. I used that same API when I re-built it in Java for Android. I was chuffed to the power of 3!
      </p>

      <h2 class='subHeading'>Learning Goals</h2>
      <p className='blog-item'>
        Ultimately, my learning goals are to understand the concepts behind making whatever function I need, and displaying information for my app’s users. Why a for loop works. How to use a switch statement. Splitting my code into modules to make them re-usable. Why objects are excellent. And how to make it all look nice and accessible to everyone regardless of the platform. And knowing multiple languages help you become a better programmer and a more confident learner.
      </p>
      <p className='blog-item'>
        I think I'm fairly equal with Java and JavaScript. Starting JavaScript was definitely challenging -- no way I'm ever saying it was easy for me to learn. Took me forever to get used to for loops and if statements, and getting tangled up in infinite loops with while statements. Then the return keyword hurt my brain. The lesions left by arrays and APIs... I can go on forever.
      </p>
      <p className='blog-item'>
        Java just felt so similar to JavaScript that it clicked nicely. Returning to JavaScript for this project has been smooth. I always look up MDN docs, like I did for Java docs, and Android docs. React docs have been fine too. Even a seriously handy syntax library I found that will display code in this blog was pretty straight forward because I realized a while ago I can go into the open source files and look around at how the programmer used their library for demos and testing.
      </p>

      <h2 class='subHeading'>Final Word</h2>
      <p className='blog-item'>
        Guacamole.
      </p>
      <p className='blog-item'>
        No, wait.
      </p>
      <p className='blog-item'>
        Practice! If you enjoy coding, then code. Great artists don’t happen in a single moment, they practice.
      </p>
    </div>
  )
}

export default Blog;
