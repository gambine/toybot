var location = {
	x: 0,
	y: 0,
	direction: 'NORTH'
};
//read user input
var command = prompt("Please enter your command");
//split the input and catch the command
var result = command.split(/[ ,]+/);
//the first command has to be PLACE
if(result[0] == 'PLACE'){
	location.x = result[1];
	location.y = result[2];
	location.direction = result[3];
	//if user place the robot out of the table, keep asking user
	//to type the correct one
	while(location.x>5||location.x<0||location.y>5||location.y<0){
		command = prompt("Please enter a valid location");
		result = command.split(/[ ,]+/);
		if(result[0] == 'PLACE'){
			location.x = result[1];
			location.y = result[2];
			location.direction = result[3];
		}
	}

	//type other commands
	command = prompt("Please enter your command");
	result = command.split(/[ ,]+/);
	while(result[0]=='PLACE'||result[0]=='MOVE'||result[0]=='LEFT'||result[0]=='RIGHT'||result[0]=='REPORT'){
        //consider every situation
				//PLACE command
        if(result[0]=='PLACE'){
          location.x = result[1];
	        location.y = result[2];
	        location.direction = result[3];
        }
        //MOVE command
				//the robot cannot fall off the table
        else if(result[0]=='MOVE'){
            if(location.direction == 'NORTH' && location.y!=5){
                location.y++;
            }
            else if(location.direction == 'SOUTH' && location.y!=0){
                location.y--;
            }
            else if(location.direction == 'WEST' && location.x!=0){
                location.x--;
            }
            else if(location.direction == 'EAST' && location.x!=5){
                location.x++;
            }
        }
        //LEFT command
        else if(result[0]=='LEFT'){
            if(location.direction == 'NORTH'){
                location.direction = 'WEST';
            }
            else if(location.direction == 'WEST'){
                location.direction = 'SOUTH';
            }
            else if(location.direction == 'SOUTH'){
                location.direction = 'EAST';
            }
            else if(location.direction == 'EAST'){
                location.direction = 'NORTH';
            }
        }
        //RIGHT command, similar to LEFT command
        else if(result[0]=='RIGHT'){
            if(location.direction == 'NORTH'){
                location.direction = 'EAST';
            }
            else if(location.direction == 'WEST'){
                location.direction = 'NORTH';
            }
            else if(location.direction == 'SOUTH'){
                location.direction = 'WEST';
            }
            else if(location.direction == 'EAST'){
                location.direction = 'SOUTH';
            }
        }
        //REPORT command and exit the program
        else if(result[0]=='REPORT'){
            console.log(location);
            exit();
        }
        command = prompt("Please enter your command");
	    result = command.split(/[ ,]+/);
	}
}
else{
    console.log('Invalid command');
}
