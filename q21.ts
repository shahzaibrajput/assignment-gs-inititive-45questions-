interface item {
    name:string;
    price:number;
}
const book:item={
name:"History",
price:500 
};

const visit_abroad:item={
    name:"Maldives",
     price:120000
    };

    console.log(`Book Name Is:  ${book.name}, book Price is: $$:   $${book.price}`)
    console.log(`Country Name is:  ${visit_abroad.name}, Ticket Price is: $$:   $${visit_abroad.price}`)