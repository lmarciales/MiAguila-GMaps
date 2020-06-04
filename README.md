# Mi Aguila - Get a Ride - Google Maps

## Description

This project is about a platform where the user can get a ride and see the route from the origin address to the destination address. Some of the features implemented are the following:

### JSON-Server

All the data used come from a fake REST API:

+ User data.
+ Nav links items.
+ Ride profile type.
+ Steps data.
+ Favorite list.
+ Default route.

### Sidebar

+ Item list are functionable, but for this case only the "Pedir Aguila" item works (shows the ride view).
+ Converts to a navbar when is a mobile device.

### Ride View

+ Shows the ride profile type.
+ Shows the steps: Can switch between step 1 (origin) and step 2 (destination). This also changes the url.
+ Shows an input address.
+ Shows the favorite list: Each favorite can be selected to change the address. The address changed depends on the current step.

### Maps

+ Shows the map with a default current address.
+ Shows the route drawn between 2 default address.

## Use

Once the page is opened, you will see the sidebar with the "Pedir Aguila" item selected. This means the ride view will be open too.

The map will show by default a route between 2 address.

## Technical Specifications

+ Programming language: JavaScript (Using TypeScript).
+ Framework: Angular.
+ Angular CLI: 9.1.7
+ Angular: 9.1.9
+ CSS Pre-processors: Sass (SCSS).
+ Linter: TSLint + Prettier. SonarLint as a IDE plugin.
+ IDE: WebStorm (JetBrains).
+ Version control: Git – GitHub.
+ Git Client: GitKraken.

## Project setup

### Clone this repo

```
git clone https://github.com/lmarciales/MiAguila-GMaps.git
```

### From the root of the project, install the dependencies

```
npm install
```

### Run angular

```
ng serve --o
```

The server will be at localhost:4200

### Run the json-server

```
npm run json-server
```

The server will be at localhost:3000

## More about the project development

### Gitflow

The control version of this project was based in a Gitflow base, where the following branches were created:

+ master: main branch, and the only one where the code is deployed to the hosting.
+ develop: main development branch.
  + feature/{feature-name}: specific branch for a feature to implement.

Also, each integration was done using Pull Request to the "parent" branch.

### Development

The development of this project was planned showing the best practices and standards that I've been seen in my experience. This means, even if this project is a small project to show my skills as a Front-End Developer with Angular, this project brings a little bit more:

+ Compodoc as a documentation manager.
+ Prettier + Linter + Husky as a good way to improve the code integration for the team.
+ Module structure based: 
  + A little bit complicated structure than the default, but it's more scalable and maintainable.
  + Directory structure easy to understand.
  + Lazy loading approach.
  + Main modules:
    + Core: Initial resources loaded (http interceptors, guards, services...)
    + Data: Models and services for the data.
    + Modules: Modules that are independent of each other.
    + Shared: Resources used in different part of the application (components, pipes, directives...)

## License

MIT License

Copyright (c) 2020 Felipe Marciales

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
