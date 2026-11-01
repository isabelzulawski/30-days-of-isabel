# Neural network walkthrough

A toy binary classifier with two inputs, one hidden layer of three sigmoid units, and one sigmoid output. Values are calculated from fixed example parameters. The final stage shows one actual gradient descent update on one labeled example, not a trained model or evidence of generalization.

The gradient is computed with the chain rule for binary cross-entropy and checked against central finite differences in check-math.cjs. Displayed values are rounded; calculations use full precision.

References

- https://www.3blue1brown.com/lessons/gradient-descent/
- https://www.3blue1brown.com/lessons/backpropagation-calculus/

The network illustrates one common feedforward architecture, not every neural network design.
