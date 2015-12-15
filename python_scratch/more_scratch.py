import sympy
import numpy

r, thet, a, b = sympy.symbols("r thet a b ")
mu, mc, mt, l, v0, r0 = sympy.symbols("mu mc mt l v0 r0")
# radial = (a/(1+b*sympy.cos(thet)))
radial = (((mc*mt)**2/(mc+mt))/(mt*v0*r0)**2+a-1/r0)
sympy.init_printing()
print radial
print sympy.solve(radial, [a, v0, r0, mc, mt])[0][a]
# print sympy.diff(radial, thet)
