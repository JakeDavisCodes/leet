def winnerOfGame(colors: str) -> bool:
    scores = {'A': 0, 'B': 0}

    for i in range(1, len(colors) - 1):
        base = colors[i]
        if colors[i - 1] == base and colors[i + 1] == base:
            scores[base] += 1

    if scores['B'] >= scores['A']:
        return False
    else:
        return True

# Test cases
print(winnerOfGame("AAABABB"))  # Output: True
print(winnerOfGame("AA"))       # Output: False
print(winnerOfGame("ABBBBBBBAAA"))  # Output: False