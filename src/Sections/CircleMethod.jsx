import React from 'react';
import {
  Container, Typography, Card, CardMedia, CardContent, Link,
} from '@material-ui/core';
import graph from './graph.png';

const CircleMethod = () => (
  <Container maxWidth="sm">
    <Typography variant="h2">The Circle Method</Typography>
    <Typography variant="body1">
    What would you say if somebody asked you to prove that if 2 + 𝑥 = 4, then 𝑥 must be 2? You’d probably give the answer that you learned in middle school: subtract 2 from both sides, which leaves you with the equality 𝑥 = 2. Doing that might feel intuitive to you; after all, you probably spent a lot of time learning the basics of addition and subtraction, what the equals sign means, and how to approach problems that give you an equation with a missing piece and ask you to fill in the blank.
    </Typography>
    <Typography variant="body1">
    Those who have the interest and put in the effort spend their time considering much more complicated problems, hoping to find unexpected connections between the abstract ideas that these problems rely on, trying to discover creative arguments that allow them to know more and more about the abstract objects under study. One such object is the integers, what you might know as whole numbers.
    </Typography>
    <Typography variant="body1">
    The storied field of number theory concerns itself with the study of the integers, and over the millennia,
a truly staggering amount of work has been done in order to better understand the underlying structure
of the integers, their properties, and the relationships between them. But the questions number theory
asks are rarely as simple as if 2 + 𝑥 = 4, and so researchers create inventive new arguments and
techniques to lead them to new insights.
    </Typography>
    <Typography variant="body1">
    One such technique is the circle method, pioneered by notable mathematicians Hardy, Littlewood, and
Ramanujan. They were interested in studying additive problems, which ask questions about how
integers can be written as sums of numbers taken from a smaller set. Often, that smaller set is the set of
prime numbers, which cannot be divided evenly by any positive whole number other than themselves
and 1. The circle method translates those additive problems into a question of solving a complicated
integral.
    </Typography>
    <Typography variant="body1">
    The first step is to define an infinite sequence, which is just some never-ending list of numbers, that
reveals something about the problem under study; typically, the nth term of the series corresponds to
the number of ways to represent n as the sum of some limited number of primes, or prime numbers
raised to some power. For example, if you wanted to define a sequence for the number of ways that you
can write n as the sum of at most two prime numbers, the first four terms would be 0, 1, 1, 1, since you
can’t write 1 as the sum of a prime number, 2 and 3 are themselves prime, and can’t be expressed as
the sum of any other prime numbers, while 4 can be written as 2 + 2.
    </Typography>
    <Typography variant="body1">
    Then, you must find a generating function. These functions need to be able to be written as the sum of
a power series, which is a sum of a special kind of infinite sequence frequently studied by
mathematicians. But the generating function must have another property- the coefficients of each term
in that infinite sum must be the terms of the sequence you started with! Fortunately, while the infinite
sequence you choose depends on the problem you’re trying to solve, there are a few commonly used
ways to obtain a generating function for it.
    </Typography>
    <Typography variant="body1">
    After finding that function, some facts from the field of analysis allow you transform that power series
into an integral, which you might remember from high school calculus as a tool to calculate areas. The
integral you get from your generating function looks a lot more complicated, but the core idea is still the
same: integrating a function over an interval; of input values calculates the area under that function
over those input values. If that doesn’t ring a bell, see the picture below for an example.
    </Typography>
    <Card raised>
      <CardMedia
        component="img"
        title="a graph"
        src={graph}
      />
      <CardContent>
        <em>
            The red line is the graph of a function; the integral represents the green shaded area above the x-axis, which is denoted by the thick horizontal line.
        </em>
      </CardContent>
    </Card>
    <br />
    <Typography variant="body1">
    In the original use of the circle method, the interval used was essentially a very odd kind of circle; while the method has since been used with difficult intervals, the name stuck.
    </Typography>
    <Typography variant="body1">
    But we’re not done just yet. Now we need to actually calculate this integral; doing so will let us show that the values of the infinite sequence we started with aren’t zero, which would mean that we can always express numbers as sums of whatever form we were interested in. Unfortunately, the integral is so complicated that we can’t just plug it into a computer. What can be done?
    </Typography>
    <Typography variant="body1">
    Hardy, Ramanujan, and Littlewood found that the integral could be split into two smaller integrals, each working with two completely separate sets of the interval that they started with. They called the first set the major arcs, because the value of the integral over those arcs would be much larger than the integral over the second set, known as the minor arcs.
    </Typography>
    <Typography variant="body1">
    With the circle method, the major arcs are chosen to be the places where the generating function is large, and you can use other clever techniques to estimate the value of the integral precisely. Then the remaining pieces are the minor arcs. But the value of the integral over the minor arcs isn’t calculated precisely, but only bounded to be much smaller than the contribution over the major arcs; we may not even need to know if it is positive or negative! Then we’ve established that the integral isn’t zero, which tells us that the values of our original sequence are also not zero.
    </Typography>
    <Typography variant="body1">
    The last step- figuring out how to get a good enough bound for the minor arcs- is where the greatest difficulty lies. Fortunately, in the decades since Hardy, Ramanujan, and Littlewood first introduced the technique, other mathematicians have shown themselves to be more than up to the task, using the circle method to investigate many problems in number theory, such as
      {' '}
      <Link href="https://mathworld.wolfram.com/GoldbachConjecture.html" target="blank">Goldbach’s conjectures</Link>
,
      {' '}
      <Link href="https://mathworld.wolfram.com/WaringsProblem.html" target="blank">Waring’s problem</Link>
,
      {' '}
    the
      {' '}
      <Link href="https://mathworld.wolfram.com/Partition.html" target="blank">partition function</Link>
,
      {' '}
      <Link href="https://mathworld.wolfram.com/SophieGermainPrime.html" target="blank">Germain primes</Link>
, and more. But there are still many connections unfound, structure undiscovered, and properties undetermined, and the circle method may still be of use for years to come.
    </Typography>
  </Container>
);

export default CircleMethod;
