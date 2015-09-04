import sympy
import numpy

r, thet, a, b = sympy.symbols("r thet a b ")
radial = (a/(1+b*sympy.cos(thet)))
print radial
print sympy.diff(radial, thet)