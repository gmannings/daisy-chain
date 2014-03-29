daisy-chain
===========

This is an experiment in JavaScript object chaining and data manipulation. Please feel
free to use and to provide any feedback.

## Aims of daisy-chain

Data manipulation in JavaScript is inherently more difficult than a strongly typed language
as the programmer cannot determine a variable type without performing type checking.

For functional work this increases the load of each function or the risk of an incorrect
manipulation being applied to a variable.

Daisy-chain is a wrapper object that aims to reduce the risk of incorrect manipulations.

## Examples

### Summing the values of an array

    dc([1, 2, 3])
        .sum()
            .result(); // returns 6

Daisy-chain is called with the initial data array of `[1, 2, 3]`. The object then
references this as the original data value. After any successful manipulation is applied
the `.result()` method will return the manipulated data whilst keeping the initial value
in memory.

The `.sum()` method determines the type of initial data or that of the manipulated data
depending on stage of the chain that it is called in. If the data is an `Array` then
the results are mapped and the sum total becomes the manipulated data value.

To retrieve the value, the `.result()` method is called.

#### Removing the burden of type checking

Type checking gets in the way of readable code, so each method in daisy-chain will perform
this for the programmer,apply the method or leave the manipulated data untouched.

In this way we can supply the data for `.sum()` in object literal format and it will
work in exactly the same way:

    dc({
        item: 1,
        anotherItem: 2,
        aString: "Hello" // This will be ignored
    })
        .sum()
            .result(); // returns 3
