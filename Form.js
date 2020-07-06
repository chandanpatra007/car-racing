class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 20);
    
    
    this.input.position(130, 50);
    this.button.position(250, 100);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

       player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      greeting.position(130, 100)
    });

  }
}
