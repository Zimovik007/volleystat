let Render = {
	getInstance: function(){
		return this;
	},
	renderLeftScore: function(par){
		document.getElementById('teamScore1').innerHTML = par;
	},
	renderRightScore: function(par){
		document.getElementById('teamScore2').innerHTML = par;
	}
};

let Party = {
    leftScore: 0,
    rightScore: 0,
    getInstance: function(){
        return this;
    },
    incLeftScore: function(){
        Party.leftScore++;
        Render.getInstance().renderLeftScore(Party.leftScore);
    },
    decLeftScore: function(){
        Party.leftScore--;
        Render.getInstance().renderLeftScore(Party.leftScore);
    },
    incRightScore: function(){
    	Party.rightScore++;
    	Render.getInstance().renderRightScore(Party.rightScore);
    },
    decRightScore: function(){
    	Party.rightScore--;
    	Render.getInstance().renderRightScore(Party.rightScore);
    }
};

let newParty = Party.getInstance();

let incLeftBtn = document.getElementById('incLeftButton');
incLeftBtn.onclick = newParty.incLeftScore;

let decLeftBtn = document.getElementById('decLeftButton');
decLeftBtn.onclick = newParty.decLeftScore;

let incRightBtn = document.getElementById('incRightButton');
incRightBtn.onclick = newParty.incRightScore;

let decRightBtn = document.getElementById('decRightButton');
decRightBtn.onclick = newParty.decRightScore;
