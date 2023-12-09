package utils

import (
	"bufio"
	"os"
	"strings"
)

func StreamLinesStrings(path string) ([][]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}

	defer file.Close()
	scanner := bufio.NewScanner(file)

	lines := [][]string{}
	for scanner.Scan() {
		lines = append(lines, strings.Split(scanner.Text(), "\n"))
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return lines, nil
}

func StreamLinesRunes(path string) ([][]rune, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}

	defer file.Close()
	scanner := bufio.NewScanner(file)

	lines := [][]rune{}
	for scanner.Scan() {
		lines = append(lines, []rune(scanner.Text()))
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return lines, nil
}
