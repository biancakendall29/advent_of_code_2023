package main

import (
	"fmt"
	"log"
	"strings"

	"github.com/biancakendall29/advent_of_code_2023/utils"
	"golang.org/x/exp/slices"
)

var copies = make(map[int]int)

func main() {
	lines, err := utils.StreamLinesStrings("./input.txt")
	if err != nil {
		log.Println("error reading file, ", err)
	}

	sum1 := 0
	sum2 := 0

	for idx, line := range lines {
		yourCard, winningCard := getCards(line[0])
		sum1 += getPoints(yourCard, winningCard)
		getCardCopies(yourCard, winningCard, idx+1)
	}
	for _, val := range copies {
		sum2 += val
	}

	fmt.Println("Part 1: ", sum1)
	fmt.Println("Part 2: ", sum2)
}

func getCards(line string) ([]string, []string) {
	cards := strings.Split(line, ":")
	cardSplit := strings.Split(cards[1], "|")

	yourCard := strings.Split(cardSplit[0], " ")
	winningCard := strings.Split(cardSplit[1], " ")

	return yourCard, winningCard
}

func getPoints(yourCard, winningCard []string) int {
	points := 0
	for _, entry := range yourCard {
		if entry != "" && slices.Contains(winningCard, entry) {
			if points == 0 {
				points = 1
			} else {
				points *= 2
			}
		}
	}
	return points
}

func getCardCopies(yourCard, winningCard []string, cardNum int) {
	copies[cardNum]++
	points := 0
	for _, entry := range yourCard {
		if entry != "" && slices.Contains(winningCard, entry) {
			points++
		}
	}
	for i := 1; i <= points; i++ {
		copies[cardNum+i] += copies[cardNum]
	}
}
