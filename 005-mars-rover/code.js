export function executeInstructions(rover){
    console.log(`0 0 ${newDirection(rover)}\n`);
}

function newDirection(rover){
    if (rover.instructions === 'R'){
        return turnRight(rover.direction)
    }
    else if (rover.instructions === 'L'){
        return turnLeft(rover.direction)
    }
}

function turnLeft(direction){
    switch (direction){
        case 'W': return 'S'
        case 'S': return 'E'
        case 'E': return 'N'
        case 'N': return 'W'
        default:
    }
}

function turnRight(direction){
    switch (direction){
        case 'W': return 'N'
        case 'S': return 'W'
        case 'E': return 'S'
        case 'N': return 'E'
        default:
    }
}