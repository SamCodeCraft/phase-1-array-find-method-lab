
function superbowlWin(record) {
    // Use the find method to search for a win (result === 'W') in the record array
    const winningYear = record.find(game => game.result === 'W');

    // If a win is found, return the year of the win
    if (winningYear) {
        return winningYear.year;
    } else {
        // If no win is found, return undefined
        return undefined;
    }
}


