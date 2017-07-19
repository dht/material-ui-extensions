# Material-UI-extensions
A collection of UI elements based on [material-ui](https://www.npmjs.org/package/material-ui) React package.  

## Installation

material-ui-extensions is available as an [npm package](https://www.npmjs.org/package/material-ui-extensions).

rm ```sh
npm install material-ui-extensions
```

## Example
[https://dht.github.io/material-ui-extensions](https://dht.github.io/material-ui-extensions)

## Usage

Here is a quick example to get you started:

**Drawer**

A side panel, either flex or fixed.
```jsx
 import Drawer from 'material-ui-extensions/Drawer';
```

```jsx 
<Drawer
    drawerOpen={open}
    flex={false}
    left={true}
    drawerStyle={{padding: '0px'}}
    width={300}
    toggle={ () => this.setState({open: !open})}>
    
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui
    ornare....

</Drawer>
```

For the flex option, make sure to have a container:

```jsx 
<div style={{display:'flex', flexDirection:'row', alignItems:'stretch'}}>
    <Drawer    
        width={300}
        flex={true}
        left={true}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui
        ornare....
    </Drawer>
    <div style={{flex: 1}}>column</div>
    <div style={{flex: 1}}>column</div>
</div>
```

Note that if the drawer is on the right with flex on, the columns should be first:

```jsx 
<div style={{display:'flex', flexDirection:'row', alignItems:'stretch'}}>
    <div style={{flex: 1}}>column</div>
    <div style={{flex: 1}}>column</div>
    <Drawer    
        width={300}
        flex={true}
        left={false}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui
        ornare....
    </Drawer>
</div>
```

## Contribution
To run locally install all the dependencies:

dev:
```sh
npm install
```

peer:
```sh
npm install react@^15.4.1 react-dom@^15.4.1
```

run with npm:
```sh
npm start
```

first test was added as a starting point:
```sh
npm test
```

## License
This project is licensed under the terms of the MIT license
