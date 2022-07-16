function counter() {
    let counter = 0;

    this.increment = () => {
         counter++;
        console.log(counter);
    }
    this.decremennt = () =>{
        counter--;
        console.log(counter);
        
    }
}

const counter1 = new counter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.decremennt();