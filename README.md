# IDEA9103 Creative coding major project
## Individual Task

**Iteration 1**

Use frameCount to randomly change the colour of the big circle and the small pearls around it at a certain time.


**Iteration 2**

1. Changed the animation frame rate value to a larger value to slow down the animation transitions.
2. Add drawPatterns() function to mobilise all the patterns stored in the patterns array to increase the modularity and readability of the code.
3. Makes the colour of the canvas background also change randomly following the timer.


**Iteration 3**

1. Draw the patterns array directly inside the drawPatterns() function to simplify repetitive mobilisation of code, and increase the modularity and readability of the code.
2. Changes the range of random colours for the canvas background.


**Iteration 4**

Use alpha() to make the transparency of the pattern decrease with the timer, then increase with the timer when it reaches 0, and so on.


**Iteration 5**

I noticed that the transparency of some of the shapes did not change, and modified the code so that the transparency of all the shapes changed normally with the timer.


**Iteration 6**

1. add the randomColor function to the code and use it wherever I need to generate random colours to avoid writing random(255), random(255), random(255) multiple times.
2. since there were too many random colours, I changed the size, colour, position and number of shapes to avoid the image being too cluttered.
3. rearranged and removed some duplicate code.

**Iteration 7**

Increase the size of the pattern transparency change to reduce the time spent waiting for the pattern to disappear or appear.