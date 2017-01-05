import sympy
import numpy
import random

'''
r, thet, a, b = sympy.symbols("r thet a b ")
mu, mc, mt, l, v0, r0 = sympy.symbols("mu mc mt l v0 r0")
# radial = (a/(1+b*sympy.cos(thet)))
radial = (((mc*mt)**2/(mc+mt))/(mt*v0*r0)**2+a-1/r0)
sympy.init_printing()
print radial
print sympy.solve(radial, [a, v0, r0, mc, mt])[0][a]
# print sympy.diff(radial, thet)
'''

main = '''
{
  "name":"inputSimple",
  "Constants": {
    "MINMASS": 1e2,
    "MAXMASS": 1e5,
    "G": 1,
    "ETA": 10,
    "GFACTOR": 1.3
  },
  "Bodies": {
    "N": %d,
    "BodyData": [
%s
      ]

  }
}

'''
radius = 150
vel = 70
mass = 10000
count = 500
bodies = []
for i in range(count):
    thet = random.random()*2*numpy.pi
    posx = numpy.cos(thet)*radius + 300
    posy = numpy.sin(thet)*radius + 200
    velx = -numpy.sin(thet)*vel
    vely = numpy.cos(thet)*vel
    bodies.append('[%d, %f, %f, %f, %f, 0, 0]' %(mass, posx, posy, velx, vely))
# print(main % (count, (',\n').join(bodies)))
output = open('./textdata.json', 'w')
output.write(main % (count, (',\n').join(bodies)))
output.close()
