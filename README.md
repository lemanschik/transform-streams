# transform-streams
A Collection of Transform Streams that get Highly Often reused.


Streaming Elements 
- they take a string as signal and send the text representation including scripts.
- they take a el as signal and append into the el as also apply scripts to the appendedElement.

they mainly consist out of ecmascript modules that may apply additional css directly on the Elements
for compatability they are loading styles into the header and depdupe the header styles if needed
also if no module left on page they will remove the style from the header.

style only modules are easy do able via a none visible style component even if it is not visble 
the styles will get applyed this also allows easy themes.


```html
<my-theme-component style="visible:none"></my-theme-component>
<my-other-theme-component style="visible:none"></my-other-theme-component> // Overwrites prev as the styles get added after the prev styles
// when removed restores the prev styles. 
<my-effect-component class="xs" style="visible:none"></my-effect-component> // used for eg: menus and media layout switching.
// use the class of the effect component everywhere as signal
```


```ts
const functionThatTakesTargetAsFirstParm = (target,options) => {};

//allows api construction like a class
const createTarget = target=>(opts)=>functionThatTakesTargetAsFirstParm(target,opts) && ({ target, next: (opts)=>functionThatTakesTargetAsFirstParm(target,opts)});
const myTarget = createTarget(target);
const { target: result } = myTarget(opts).next(opts).next(opts).next(opts)
console.log(result);
// allways operating onTheSame target get the final result on the const
// It is much more performant then a class and returns still a constant shape for the engine.
```
