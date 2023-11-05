# IDEA9103 Creative coding major project_Individual Task

## Iterations

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

**Iteration 8**

Combine the generatePatterns() function and the createPatterns() function to simplify the code.


## Conclusion

- Time-based colour animation: Use frameCount as a timer so that the colour of all patterns, including the canvas background, changes according to the timer. This change adds life and visual interest to the animation.

- Time-based transparency animation: Extract the transparency of the pattern by using alpha () to gradually decrease the transparency with the timer, and then gradually increase it again, creating the effect of the pattern fading in and out. This creates a more complex and layered visual effect.

- Variation in size and number: As there were too many random colours on the canvas, I modified the size, colour, position and number of patterns to achieve a more balanced and visually appealing effect.

- Modularity and readability: The initial code could be quite lengthy, so I encapsulated the drawing logic for the different parts of the pattern in separate functions and then called them with the drawPatterns() function. In addition, I introduced functions such as randomColor(), generatePatterns() and updatePatterns() to improve the modularity and readability of the code. This makes it easier to manage and understand the code.

- Code optimisation: Redundant and unoptimised code is removed or reorganised in subsequent iterations, making the code more efficient and easier to maintain.