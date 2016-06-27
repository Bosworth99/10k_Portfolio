
![alt text][logo]

# 10k Portfolio | Redux/React Demo app

This project is intended to be an eventual portfolio module for my company website.    
It is the culmination of several days of work and study on the React/Redux stack.     
The goal was to create a complete application; a scalable, maintainable codebase     
from scratch, which incorporated a number of critical technologies.

 - Complex view layer with React
 - Application state management with Redux
 - Route management with React-router
 - React CSS modules with SCSS for crazy specificity
 - Responsive layout for mobile devices
 - Async API interactions with Redux-Thunk
 - Version control with Git
 - Unit testing with Mocha, Chai, and Enzyme
 - Asset and script compilation with Webpack
 - Hapi.js / Webpack-Dev-Server local development environment
 - NPM piping to keep Node up and running
 - Coherent editor linting with Atom and ESlint

## Tooling
This project started with research. My goal was to build the stack up from scratch   
and that meant getting a number of technologies installed and configured. First  was   
the hapi / webpack-dev-server configuration, and just getting hot reloading working.   

It was a bit tricky getting a back-end and a front-end server running locally to    
handle both hot reloading and api request. As with any project like this, persistence   
and tinkering goes a long way.

## View / State Logic
Once set up, React views went in pretty easily. Redux took a little longer to get set    
up. There happens to be a fair amount of philosophy surrounding best practices, so   
it took a bit of consideration to determine how best to get views wired up to actions   
and for those actions to get synced up with reducers.

## API Integration
This application consumes static JSON data modeling a set of work items and related   
images. There are just a couple of async API calls, and I used Redux-Thunk and the    
fetch API to wire it together.

## Application Architecture
Once I got a basic life-cycle of views and logic in place, I took a step back and gave   
more consideration to how the application architecture should be developed. I chose  
to go with the Domain-First directory pattern, because the efficiency of looking at   
related files in a single directory has been effective in the past. I understand that   
a file-type-first pattern is a popular choice in this stack.

## UX / Prototyping
Finally I took some time to work out a bit of UX design, and did some rough mockups.   
My goal on this project was really about getting the codebase constructed and elaborated   
but outward appearance and user experience flow is always important.

#### Basic UX overview
![UX Flow][UX_Flow]

#### Work Item Mockup
![Work Item][WorkItem]

#### Component Lifecycle
![Component Lifecycle][Procedure]

## Container Components / View complexity
Once I had an infrastructure and a plan going forward, the build was fairly straightfoward.  
I focused on the implementation of smart components that parent presentational components   
and found that the separation of logic and markup, here, was quite effective.

## CSS Modules / Sass build
As the application codebase started coming together, I spent some time focusing on   
styles and the integration of a .scss compile and bundle. There seems to be some   
conflicts between normal Sass syntax and CSS modules, at times, but largely, this   
is a very effective method of delivering incredibly specific classes to modules.

## Asset bundling / more Webpack configuration
If I'm being honest, Webpack is a bit more fiddly to use than, say, Gulp or Grunt.    
But the fact that you can incorporate a coherent build process for assets of all types   
makes it a very powerful choice in tooling. Once I had some assets integrated into the   
works, including a file into a component is quite straightfoward.

## Mobile optimization
I didn't spend a huge amount of time considering layout. I have been working with some   
patterns lately, that just seemed like a good fit. I incorported a two-column,   
centered box layout for content, and a columnar approach to work items. There are,   
currently only three items active in data, but the notion is that this will contain    
"many" items, as the application grows. I spent a bit of time getting mobile layout   
working, but I think it can be improved.

## Unit testing
Normally, tests would direct the build of the application. In this case, there   
was a lot of exploratory code being written, and it made sense to follow up with unit  
testing in the later stages. I have tests written for the logical portions of the   
application, and am working on incorporating tests for components.

## Further work
This project will likely be the prototype for a more elaborate website for my sCorp,    
10k Interactive. From here, I would like to develop the API out to include basic CRUD operations  
on a couple different data types (work items and pages). I'll need to generate   
some interfaces to make this happen, and, ultimately smart front-end to handle page  
requests and SEO concerns. At that point, I have an efficient foundation for a growing website.

Thank you for your interest -   
Josh

josh@joshbosworth.com



[UX_Flow]: ./public/dist/images/process/UX_flow.jpg  "UX Flow"
[WorkItem]: ./public/dist/images/process/work_item_mock.jpg  "Work Item Mockup"
[Procedure]: ./public/dist/images/process/procedural_flow.jpg  "Procedural Flow"
[logo]: ./public/dist/images/10k_325x131_red.png  "10k-Interactive Logo"
