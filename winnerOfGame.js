/**
 * @param {url} https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/description/
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let scores = { A: 0, B: 0 }

    for (let i = 1; i < colors.length - 1; i++) {
        let base = colors[i]
        if (colors[i-1] === base && colors[i+1] === base) {
            scores[base] ++;
        }
    }
    console.log(scores)

    if (scores.B >= scores.A) return false
    else                      return true

};