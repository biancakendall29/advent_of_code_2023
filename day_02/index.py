import re

file = open("input.txt", "r")
gamesArr = file.read().split('\n')

patternGame = r'Game (\d+)'
patternRed = r'(\d+) red'
patternGreen = r'(\d+) green'
patternBlue = r'(\d+) blue'

maxRed = 12
maxGreen = 13
maxBlue = 14

total1 = 0
total2 = 0

def addColoursCubes(cubes):
    sum = 0
    for cube in cubes:
        sum += int(cube.split(' ')[0])
    return sum

def getMaxCubes(matches):
    max = 0
    for match in matches:
        num = int(match.split(' ')[0])
        if num > max:
            max = num
    return max

for game in gamesArr:
    gameNumber = re.search(patternGame, game)
    # Part 1
    rounds = game.split(';')
    for round in rounds:
        if addColoursCubes(re.findall(patternRed, round)) > maxRed:
            allowed = False
            break
        elif addColoursCubes(re.findall(patternGreen, round)) > maxGreen:
            allowed = False
            break
        elif addColoursCubes(re.findall(patternBlue, round)) > maxBlue:
            allowed = False
            break
        else:
            allowed = True

    if gameNumber and allowed:
        total1 += int(gameNumber.group().split(' ')[1])

    # Part 2
    power = getMaxCubes(re.findall(patternRed, game)) * getMaxCubes(re.findall(patternGreen, game)) * getMaxCubes(re.findall(patternBlue, game))
    total2 += power

print("Total part 1: ", total1)
print("Total part 2:", total2)
        
    