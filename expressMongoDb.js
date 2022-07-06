var mongoose = require('mongoose')
var Customer = require('./schemas/customers.js')



function Connect() {
    mongoose.connect('mongodb+srv://nodespace:py6VXeSyuuHGvinZ@cluster0.crbs5.mongodb.net/?retryWrites=true&w=majority', (error) => {
        if (!error) {
            console.log('Connected To The MongoDB')
        }

    })
}
Connect();

function Create(name, city) {
    var newCustomer = new Customer({
        name: name,
        city: city
    });

    newCustomer.save((error) => {
        if (error) {
            throw error;
        }
        console.log("New Customer Succesfuly Saved.")
    });
}

function Read(id) {
    Customer.findById(id, (error, data) => {
        if (error) {
            throw error;
        }
        console.log(data);
    })
}

function Update(id, name, city) {
    Customer.findById(id, (error, data) => {
        if (error) {
            throw error;
        }
        console.log(data);
        data.name = name
        data.city = city
        data.save((error) => {
            if (error) {
                throw error;
            }
            console.log("Customer updated")

        })
    })

}

function Delete(id) {
    Customer.findById(id, (error, data) => {
        if (error) {
            throw error;
        }
        console.log(data);
        data.remove((error) => {
            if (error) {
                throw error;
            }
            console.log("Customer Deleted.")

        })
    })
}

