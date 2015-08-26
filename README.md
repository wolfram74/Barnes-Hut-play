# Barnes-Hut-play
experimenting with barnes-hut methods for n-body simulations and other related concepts.

# precision
to test precision I'll simulate the solar system with most of the major bodies starting at 1000 AD and proceeding towards 2000 ad and intend to get an error of less than 1 part per million.

# Units and Math
Given newtonian gravity, F = G0 (m1*m2)/r12**2

In MKS we get a gravitational constant of 6.67384 E -11 in m^3 kg^-1 s^-2

I'd like to choose units Plmt (Pseudo units of length, mass and time) such that a few things are true

* G = 1
* the moon is about 1000 units of mass (vs 7.347673E+22) : implies 7.347673E+19
* the moon is about 1000 units of distance away from the earth (vs 3.844000E+08) : implies 3.844000E+05
* one year is about 100 units of time (vs 3.153600E+07) : implies 3.153600E+05

if kg/alpha = Pm, meter/beta = Pl and s/gamma = Pt and Gp has the same dimensionality but a numerical value of 1 

then G0/Gp will be dimensionless with the same numerical value and 

6.67384 E -11 = (beta^3)/(alpha*gamma^2) will satisfy Gp being 1.

putting the values of the "wouldn't it be nice" things in for alpha, beta and gamma we get 5.521660E-01, about 19 orders of magnitude over, as G = 1 is the most important parameter.

This could take a lot of stupid fiddling.

Better might be to set special emphasis on 1 AU, define that to be 1000000 Pl, define the Pt and Pm such that escape velocity from a 1 solar mass object at 1 AU was 10000 Pl/Pt and that Gp = 1.

With those constraints we get conversion factors of 
2.51369966316425e-17 for mass, 6.68458712226845e-6 for length, 421956.122865024 for time

for context, this means the sun is 5*(10**13) pseudo mass units, interestingly
an AU is 1*(10**6) pseudo length units by definition
and a year is 13306808290671.4 pseudo time units