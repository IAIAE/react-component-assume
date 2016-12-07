# react-component-assume
##usage
```
npm install --save-dev react-component-assume
```
```javascript
import assume from 'react-component-assume';

var isShow = false;
var MaybeView = assume(isShow && DialogView);

//use the Component as you like:
ReactDOM.render(
    <MaybeView name="maybe" />,
    document.getElementById('root')
);
```

##why assume?
sometimes i want to write code like this:
```javascript
var TestView;
if(someCondition){
    TestView = DialogView;
}else{
    TestView = some_NULL_Component;
}

//and then use this Component
<TestView name="test" cb={someFunc} />
```

but what a `some_NULL_Component` should be? it can be a blank function always return false;
```javascript
var some_NULL_Component = () => false;
```

and i create a function warp all the things i need, namely `assume`.

```javascript
//if condition is true, TestView is DialogView, 
//if false, TestView is a blank View that will render nothing.
var TestView = assume((condition) && DialogView);
ReactDOM.render(
    <TestView name="test" cb={someFunc} />,
    document.getElementById('root')
)
```
