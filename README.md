## What is this?
A simple react stater application

Started with `https://github.com/alicoding/react-webpack-babel`

## What is available?

### Branches
* basic-react - just basic-react
* intl-react - basic + internationalization using react-intl
* full-stack - basic + express api server

## To Run

* install the dependencies:

```
> $ npm install
```

* Run development server:

```
> $ npm start
```

Open the web browser to `http://localhost:3000/`

## To build production package

```
> $ npm run build
```

## Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* styles having /node_modules|global/ in their absolute path are considered global styles used by many components and are included in the css bundle directly.
