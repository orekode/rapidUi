powers = input()
sizes = input()
powers =  powers.split()
sizes = sizes.split()

g1 = 0
g2 = 0

for i in range(3):
	g1 += int(powers[i]) * int(sizes[i])
	
for i in range(3,5):
	g2 += int(powers[i]) * int(sizes[i])
	
if g1 > g2:
	print('WIN')
elif g1 < g2:
	print('LOOSE')
else:
	print('DRAW')