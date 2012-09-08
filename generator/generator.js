


	///////
	//  Randome pass generator helpers 
	//
	///////
	/*
	 * on click  cheks values of chekckboxs 
	 * and sets the values to an object 
	 /*/
	document.onclick = function(){
		var num = document.getElementById("number");
		var let = document.getElementById("letter");
		var cap = document.getElementById("capitals");
		var pun = document.getElementById("punctuation");
		if(num.checked==true){
			generator.num = true;
		}else if(num.checked == false){
			generator.num = false;
		}
		if(let.checked == true){
			generator.let = true;
		}else if (let.checked== false){
			generator.let = false;
		}	
		if(cap.checked == true){
			generator.cap = true;
		}else if(cap.checked == false){
			generator.cap = false;
		}
		if(pun.checked == true){
			generator.punct = true;
		}else if (pun.checked == false){
			generator.punct = false;
		}
			
	}
	
	
	/*
	 * Ger result from  select "range"
	 * set the size to generator object
	 */
	var select = document.getElementById('range');
	select.onchange = function(){
		generator.size = select.selectedIndex + 4;
	}
	
	
	/*
	 * run the generator on click 
	 */
	var button = document.getElementById('ranSubmit');
		button.onclick = function(){
			generator.setup();// refreshes the object
			generator.generate();
			//return false; // make sure tat page is not reset 
		}	




	/*
	 * Generator Object 
	 */
	////////////////////////////////////////////////////////////////////////
	//			Randome pas generator  object 
	//
	//
	var generator = {
		letters: l = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'),
		list: new Array(),
		capitals: new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'),
		punctuation: new Array('.',',','?',';',':','~','!','@','#','$','%','^','&','*'),
		size: 4,
		punct: false,
		num: false,
		let: false,
		cap: false,
		key:new Array(),
		/*
		 * put together the posible values based on parameters 
		 */
		setup: function(){
			this.list = new Array();//refresh list array 
			this.key = new Array(); // refresh key array
			
			// add numbers to list if required
			//
			if(this.num==true){
				for(i = 0 ; i < 10; i++){
					this.list.push(i);// add numbers 
				}
			}
			// ADD LETTERS TO THE LIST 
			//
			if(this.let==true){
				for(i in this.letters){ 
					this.list.push(this.letters[i]); // add elements from letters 
				}
			}
			// IF WITH CAPITAL THEN ADDANOTHER ROUND OF NUMBERS AND THEN CAPITAL LETTERS
			//
			if (this.cap == true){
				if(this.num == true){
					for(i = 0 ; i < 10; i++){
						this.list.push(i);// add numbers 
					}
				}
				for(i in this.capitals){
					this.list.push(this.capitals[i]);// add  capitals to a list 
				}
			}
			// ADD PUNCTUATION TO A LIST 
			//
			if(this.punct == true){
				for(i in this.punctuation){
					this.list.push(this.punctuation[i]);//adding punctuation to a list 
				}
			}
		},		
		/*
		 * function that populates key array with 
		 * random items from list array 
		 */
		generate:function(){  
			// first run setup
			this.setup();			
			
			//get length of available elements
			var len = this.list;
			len = len.length;
			// refresh key  vaule 
			this.key = new Array();			
			
			
			// randome pick of characters 
			for(i = 0 ; i < this.size ; i++){
				this.key.push(this.list[this.rand(len-1)]);				
			}
			
			// makesure that key is not empty
			// if so, nottifies user to selec a format option
			if(this.key[1] == null){
				alert("Please pick atleas one option for password format!");
				return false;
			}
			this.display();// cal display function to display key generated			
		},
		/*
		 * Generate randome int with max range and return that value
		 */
		rand: function(max){			
			return Math.ceil(Math.random()*max);
		},		
		/*
		 * Displays the key
		 */
		display:function(){
			
			var len =  this.key;
			len = len.length;
			var out = new String;
			
			for(i in this.key){
				out = out+this.key[i];
			}
			
			// places result in the output window 
			var outputWindow = document.getElementById('output');
			outputWindow.innerHTML  = out;			
		}		
	};
	//
	//
	///////////////////////////////////////////////////////////////
	

