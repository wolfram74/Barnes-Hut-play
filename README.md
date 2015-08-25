# Barnes-Hut-play
experimenting with barnes-hut methods for n-body simulations and other related concepts.

# precision
to test precision I'll simulate the solar system with most of the major bodies starting at 1000 AD and proceeding towards 2000 ad and intend to get an error of less than 1 part per million.

# Units and Math
Given newtonian gravity, F = G (m1*m2)/r12**2

In MKS we get a gravitational constant of 6.67384 E -11 in m^3 kg^-1 s^-2

I'd like to choose units Plmt (Pseudo units of length, mass and time) such that a few things are true

* G = 1
* the moon is about 1000 units of mass (vs 7.347673E+22) : implies 7.347673E+19
* the moon is about 1000 units of distance away from the earth (vs 3.844000E+08) : implies 3.844000E+05
* one year is about 100 units of time (vs 3.153600E+07) : implies 3.153600E+05

if kg/alpha = Pm, meter/beta = Pl and s/gamma = Pt then the surface described by 

1/(6.67384 E -11)= 1.498388E+10 = (alpha*gamma^2)/(beta^3) will satisfy G being 1.

putting the values of the "wouldn't it be nice" things in for alpha, beta and gamma we get 5.521660E-01, about 11 orders of magnitude short, as G = 1 is the most important parameter.

This could take a lot of stupid fiddling.

Better might be to set special emphasis on 1 AU, define that to be 1000000 Pl, define the Pt and Pm such that escape velocity from a 1 solar mass object at 1 AU was 10000 Pl/Pt and that Gp = 1.