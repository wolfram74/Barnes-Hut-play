# Barnes-Hut-play
experimenting with barnes-hut methods for n-body simulations and other related concepts.

# precision
to test precision I'll simulate the solar system with most of the major bodies starting at 1000 AD and proceeding towards 2000 ad and intend to get an error of less than 1 part per million.

# Units and Math
Given newtonian gravity, F = G (m1*m2)/r12**2

In MKS we get a gravitational constant of 6.67384 E -11 in m^3 kg^-1 s^-2

I'd like to choose units Plmt (Peter units of length, mass and time) such that a few things are true

* G = 1
* the moon is about 1000 units of mass (vs 7.347673E+22) : implies 7.347673E+19
* the moon is about 1000 units of distance away from the earth (vs 3.844000E+08) : implies 3.844000E+05
* one year is about 100 units of time (vs 3.153600E+07) : implies 3.153600E+05

if kg/alpha = Pm, meter/beta = Pl and s/gamma = Pt then the surface described by 

1/(6.67384 E -11)= 14,983,877,348 = (alpha*gamma^2)/(beta^3) will satisfy G being 1.