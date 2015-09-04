import sympy
import numpy

Au, Msol, G0= sympy.symbols("Au Msol G0")
Pm, Pl, Pt, Gp = sympy.symbols("Pm Pl Pt Gp")
kg, m, s = sympy.symbols("kg, m, s")
c1, c2, c3, c4, c5, c6, c7 = sympy.symbols("c1 c2 c3 c4 c5 c6 c7")
Vep = sympy.symbols("Vep")
defins = []
defins.append( sympy.Eq(Pm, kg/c1)) # starts at 0, just subtract 10.
defins.append( sympy.Eq(Pl, m/c2))
defins.append( sympy.Eq(Pt, s/c3))
defins.append( sympy.Eq(Au, c5*m))
defins.append( sympy.Eq(c5, 149597870700.0)) #c5 defined
defins.append( sympy.Eq(Msol, c6*kg))
defins.append( sympy.Eq(c6, 1.9891*(10**30))) # c6 defined
defins.append( sympy.Eq(6.67384*10**-11,G0))
defins.append( sympy.Eq(Gp,(Pl**3)/(Pm*Pt**2) ))
defins.append( sympy.Eq(c4*Pl, Au)) #Pl in terms of AU
defins.append( sympy.Eq( (2*Gp*Msol)/Au, Vep**2 )) #relationship between escape velocity and a sun mass at 1Au
defins.append( sympy.Eq( Vep, c7*(Pl/Pt)  ) ) #characteristic velocity
defins.append( sympy.Eq(c3, ((c2**3)/(c1*G0))**0.5))
defins.append( sympy.Eq(c2, c4/c5))
defins.append( sympy.Eq(c1, c4*c7**2/(2*c6)))
defins.append( sympy.Eq(1.0/(6.67384*10**-11),(c1*c3**2)/(c2**3) ) )
defins.append( sympy.Eq(c4, 1e6)) #c4 defined (scale of length)
defins.append( sympy.Eq(c7, 1e4)) #c7 defined (scale of speed)


# defins.append( sympy.Eq(c1, 2.51369966316e-17))
# defins.append( sympy.Eq(c2, 6.68458712226845e-6))
# defins.append( sympy.Eq(c3, 421956.122865380))
# defins.append( sympy.Eq(c1, 2.51369966316e-17))
# defins.append( sympy.Eq(c3, 421956.122865380))
constants = [c1, c2, c3, c4, c5, c6, c7, G0]

# print defins
# print sympy.solve([defins[1], defins[3], defins[4], defins[9]], [c2, m, Pl]) #expresses c2
# print sympy.solve([defins[0], defins[1], defins[8], defins[5], defins[9], defins[10], defins[11], defins[11]], [c1, m, Pl, Pt, Pm, Gp, Msol]) #expreses c1
results = sympy.solve([defins[4], defins[6], defins[7], defins[12], defins[13], defins[14], defins[16], defins[17], ], constants)
conversions = results[0][:3]
# print conversions
# print (1.9891*(10**30)*conversions[0])
# print len(str(int(1.9891*(10**30)*conversions[0])))
# print 149597870700.0*conversions[1]
# print len(str(int(149597870700.0*conversions[1])))
# print (365*24*3600)*conversions[2]
# print len(str(int((365*24*3600)*conversions[2])))
# print sympy.solve([defins[1], defins[8], defins[9], defins[10], defins[11], defins[11]], [c1, m, Pl, Pt, Pm, Gp, Msol])
# print (10**6*(10**4)**2)/(2*1.9891*10**30)

