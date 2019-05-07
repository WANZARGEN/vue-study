# Vue Study


1. Props and Data
   - **Data** is the private memory of each component where you can store any variables you need. 
   - **Props** are how you pass this data from a parent component down to a child component.
     - we can't change them.

2. Inheritance using ```extends```
   - Full inheritance isn’t available within the design of Vue.
   - The component system is purposely built to avoid components being coupled to one another.

3. ```extends``` or ```v-slot```
   - I think... it's proper to use ```extends``` in the case that we need to override template or style, and only need to reuse the parent component's methods.
     - Use ```extends``` to reuse parent's methods.
   - In case of ```v-slot``` which replaced ```slot```, it's proper to use in the case that we need to reuse template & style and customize them by inserting new items into the base template. 